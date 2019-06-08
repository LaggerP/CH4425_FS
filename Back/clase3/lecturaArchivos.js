const fs = require('fs')
const funciones = require('./otrasFunciones')

//lectura de un archivo de manera asincrona
const fileAsync = fs.readFile('archivo.txt',(err, data)=>{
    if (err) throw err
    const dataFromFile = data.toString()
    funciones.changeString(dataFromFile)
})
