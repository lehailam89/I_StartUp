const http = require('node:http')
const fs = require('node:fs/promises')

const { GoogleGenerativeAI } = require('@google/generative-ai')

const genAI = new GoogleGenerativeAI('AIzaSyAgMyl1RYC8o8IzdWiarmDhiRu9qts2p-o')
const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

const server = http.createServer()

server.on('request', async (request, response) => {
  if (request.url === '/' && request.method === 'GET') {
    response.setHeader('Content-Type', 'text/html')

    const file = await fs.open('./public/index.html', 'r')
    const readFileStream = file.createReadStream()

    readFileStream.pipe(response)
  }

  if (request.url === '/styles.css' && request.method === 'GET') {
    response.setHeader('Content-Type', 'text/css')

    const file = await fs.open('./public/styles.css', 'r')
    const readFileStream = file.createReadStream()

    readFileStream.pipe(response)
  }

  if (request.url === '/favicon.ico' && request.method === 'GET') {
    // response.setHeader('Content-Type', 'text/css')
    // const file = await fs.open('./public/', 'r')
    // const readFileStream = file.createReadStream()
    // readFileStream.pipe(response)
  }

  if (request.url === '/scripts.js' && request.method === 'GET') {
    response.setHeader('Content-Type', 'text/javascript')

    const file = await fs.open('./public/scripts.js', 'r')
    const readFileStream = file.createReadStream()

    readFileStream.pipe(response)
  }

  if (request.url === '/' && request.method === 'POST') {
    let data = ''
    request.on('data', chunk => {
      data += chunk.toString()
    })

    request.on('end', async () => {
      const body = JSON.parse(data)
      console.log(`request.on - body:`, body.text)
      response.setHeader('Content-Type', 'application/json')
      const result = await model.generateContent(body.text)
      const resultText = result.response.text()
      response.end(JSON.stringify(resultText))
    })
  }
})

server.listen(9000, () => {
  console.log('Web server is live at http://localhost:9000')
})
