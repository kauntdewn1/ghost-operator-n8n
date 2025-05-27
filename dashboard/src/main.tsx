import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './index.css'

// Health check endpoint
if (import.meta.env.PROD) {
  const http = require('http')
  const server = http.createServer((req: any, res: any) => {
    if (req.url === '/healthz') {
      res.writeHead(200)
      res.end('OK')
    }
  })
  server.listen(5678)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)