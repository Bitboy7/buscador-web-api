# Buscador Web

Un motor de búsqueda web moderno desarrollado con la API de SerpStack, Express.js y Tailwind CSS.

## Características

- Interfaz de usuario limpia y moderna inspirada en el diseño de Google
- Resultados de búsqueda en tiempo real
- Diseño adaptable (responsive)
- Animaciones de carga
- Registro de resultados en consola
- Manejo de errores
- Soporte para navegación por teclado (Enter para buscar)

## Tecnologías Utilizadas

- Frontend:
  - HTML5
  - Tailwind CSS
  - jQuery
  - Font Awesome
- Backend:
  - Node.js
  - Express.js
  - Axios
  - dotenv

## Instalación

1. Clona el repositorio
2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en el directorio raíz y añade tu clave API de SerpStack:

```plaintext
SERPSTACK_API_KEY=tu_clave_api_aquí
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

5. Abre `http://localhost:3000` en tu navegador

## Uso

1. Ingresa tu consulta en el campo de búsqueda
2. Presiona Enter o haz clic en el icono de búsqueda
3. Visualiza los resultados en un diseño limpio basado en tarjetas
4. Revisa la consola del navegador para ver resultados detallados

## Referencia de la API

El proyecto utiliza la API de SerpStack para los resultados de búsqueda. Necesitarás obtener una clave API de [SerpStack](https://serpstack.com/).

## Scripts

- `npm start`: Ejecuta el servidor en producción
- `npm run dev`: Ejecuta el servidor de desarrollo con recarga automática

## Dependencias

- express: ^4.21.2
- axios: ^1.7.9
- cors: ^2.8.5
- dotenv: ^16.4.7
- nodemon: ^3.1.9 (dependencia de desarrollo)

## Contribuir

Siéntete libre de enviar problemas y solicitudes de mejora.

## Licencia

Este proyecto está licenciado bajo la Licencia ISC. Para más detalles, consulta el archivo LICENSE en el repositorio.
