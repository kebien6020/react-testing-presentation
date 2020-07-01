const apiRoutes = require('./apiRoutes')
const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

const app = express()

app.use(bodyParser.json())

app.use('/api', apiRoutes)

// Serve files found in the client dist folder
app.use(express.static(path.resolve(__dirname, '../../client/dist')))

// Serve the SPA for any other route
app.get('*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'))
})

// Error handler
app.use((err, req, res, _next) => {
  console.log(err)
  res.status(500).json({ success: false, error: err })
})

module.exports = app
