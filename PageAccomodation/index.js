const http = require('node:http');
const fs = require('node:fs/promises');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI('AIzaSyAgMyl1RYC8o8IzdWiarmDhiRu9qts2p-o');
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

const server = http.createServer();

server.on('request', async (request, response) => {
  if (request.method === 'GET') {
    if (request.url === '/') {
      response.setHeader('Content-Type', 'text/html');
      const file = await fs.readFile('./public/index.html');
      response.end(file);
    } else if (request.url === '/styles.css') {
      response.setHeader('Content-Type', 'text/css');
      const file = await fs.readFile('./public/styles.css');
      response.end(file);
    } else if (request.url === '/scripts.js') {
      response.setHeader('Content-Type', 'text/javascript');
      const file = await fs.readFile('./public/scripts.js');
      response.end(file);
    } else if (request.url === '/favicon.ico') {
      response.statusCode = 404; // File favicon.ico not found
      response.end();
    }
  }

  if (request.method === 'POST' && request.url === '/submit') {
    let data = '';
    request.on('data', chunk => {
      data += chunk.toString();
    });

    request.on('end', async () => {
      try {
        const body = JSON.parse(data);
        console.log(`request.on - body:`, body.text);
        response.setHeader('Content-Type', 'application/json');

        // Xử lý dữ liệu ở đây
        const result = await model.generateContent(body.text);
        const resultText = await result.response.text();
        response.end(JSON.stringify(resultText));
      } catch (error) {
        response.statusCode = 400; // Bad Request
        response.end(JSON.stringify({ error: error.message }));
      }
    });
  }
});

server.listen(5500, () => {
  console.log('Web server is live at http://127.0.0.1:5500/PageAccomodation/index.html');
});
