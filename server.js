const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static("public"));

app.get("/api/search", async (req, res) => {
  try {
    const query = req.query.q;
    const response = await axios.get(`http://api.serpstack.com/search`, {
      params: {
        access_key: process.env.SERPSTACK_API_KEY,
        query: query,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
