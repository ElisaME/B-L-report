const express = require('express')
const app = express()

//dice la ruta en donde están nuestros archivos estáticos, archivos estáticos
app.use(express.static('public'))


app.listen(3000,()=>{
  console.log(`server on http://localhost:3000`)
})

const index = require('./routes/index');
app.use('/', index);