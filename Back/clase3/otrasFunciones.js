const saludo = () => console.log('Como estas?')

const changeString = (dataFromFile) => {
    let newString = ''
    for (const key in dataFromFile) {
        let char = dataFromFile[key]
        if (char === 'a') {
            char = '!'
        }
        newString = newString + char
    }
    console.log(newString)
}


const persona = {
    nombre: 'pepe',
    edad: 43,
    hijo: {
        nombreHijo: 'pepito',
        edad: 12
    }
}

const saludito = ({nombre,edad, hijo:{nombreHijo, edadHijo}}, primo = 'primito')=>{
    console.log(nombre,edad,nombreHijo, edadHijo, primo)
}

saludito(persona)

module.exports = {
    saludo,
    changeString,
}