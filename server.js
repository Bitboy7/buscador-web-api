// Change require statements to import statements
import express from "express";
import axios from "axios";
import cors from "cors";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv";

// Configure __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize dotenv
dotenv.config();

const app = express();
const port = 3000;
const searchLogFile = path.join(__dirname, "search-log.json");

app.use(cors());
app.use(express.static("public"));

// Función para guardar el registro de búsqueda
async function logSearch(query, results) {
  try {
    let searches = [];
    try {
      const existingData = await fs.readFile(searchLogFile, "utf8");
      searches = JSON.parse(existingData);
    } catch (error) {
      // Si el archivo no existe, comenzamos con un array vacío
    }

    searches.push({
      timestamp: new Date().toISOString(),
      query,
      totalResults: results.organic_results?.length || 0,
      results: results.organic_results || [],
    });

    await fs.writeFile(searchLogFile, JSON.stringify(searches, null, 2));
  } catch (error) {
    console.error("Error al guardar el registro:", error);
  }
}

app.get("/api/search", async (req, res) => {
  try {
    const query = req.query.q;
    const response = await axios.get(`http://api.serpstack.com/search`, {
      params: {
        access_key: process.env.SERPSTACK_API_KEY,
        query: query,
      },
    });

    // Guardar la búsqueda y sus resultados
    await logSearch(query, response.data);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para ver el historial de búsquedas
app.get("/api/search-history", async (req, res) => {
  try {
    const data = await fs.readFile(searchLogFile, "utf8");
    res.json(JSON.parse(data));
  } catch (error) {
    res.json([]);
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
