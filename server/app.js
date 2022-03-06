if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}
const express = require('express')
const app = express()
const indexRoutes = require('./routes/indexRoutes')
const cors = require('cors')
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', indexRoutes)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})