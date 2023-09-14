const express = require('express')

const app = express()
app.get('/',(request, response)=>{
    response.send('hola get')
})

//http://localhost:3000/

app.post('/',(request, response)=>{
    response.send('hola get')
})


app.listen(3000,()=>{
    console.log('listening on port 3000')
})
