const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const fetch = require('isomorphic-fetch')
const url = "https://klassi-proto.herokuapp.com/api/users"

app.use(cors())
//el bodyParser nos parsea el cuepo del post
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const prestamos = [
    {
        id: 1,
        data: 'dummy data'
    },
    {
        id: 2,
        data: 'dummy data'
    },
    {
        id: 3,
        data: 'dummy data'
    }
]

// MIDDLE
app.get('/prestamos', (req, res, next) => {
    console.log('estamos en un middle')
    const prestamo = prestamos.find(e => e.id === Number(req.query.id))
    if (prestamo) {
        req.prestamo = prestamo
        next()
    } else {
        res.redirect('/nope')
    }
});

app.get('/nope', (req, res) => {
    res.json({ mensaje: 'usted no puede pasar a esta ruta' })
})

// POST 
app.post('/prestamos', (req, res) => {
    const body = req.body
    console.log(body)
    return res.json(prestamos)
})

// RUTA DINAMICA
app.get('/prestamos/:id', (req, res) => {
    const id = req.params.id
    const prestamo = prestamos.find(e => e.id === Number(id))
    return res.json({ result: prestamo })
})

//async
app.get('/', async (req, res) => {
    const nombre = req.query.nombre
    const response = await fetch(url)
    const json = await response.json()
    if (nombre) {
        const user = json.result.find(valor => valor.nombre === nombre)
        return res.json({ result: user })
    } else {
        return res.json({ result: json })
    }

})

//no async
app.get('/', (req, res) => {
    const nombre = req.query.nombre
    fetch(url)
        .then(res => res.json())
        .then(json => {
            if (nombre) {
                const user = json.result.find(valor => valor.nombre === nombre)
                return res.json({ result: user })
            } else {
                return res.json({ result: json })
            }
        })
})


//nueva clase
const users = [
    {
        nombre: 'pepe',
        pass: '123'
    },
    {
        nombre: 'pepa',
        pass: '321'
    }
]

// MIDDLE
app.post('/login', (req, res, next) => {
    const body = req.body
    const { nombre, pass } = body
    /**
     * Otra manera de realizar lo de arriba es de la siguiente manera
     * const nombre = body.nombre
     * const pass = body.pass
     * 
     * const {nombre,pass} = body esta tipiado en ES6
     */

    const user = users.find(e => e.nombre === nombre)
    if (user && user.pass === pass) {
        req.user = user
        console.log(user)
        next()
    } else {
        console.log('middleware en accion')
        res.redirect('/nope')
    }
});

app.post('/login', (req, res) => {
    res.json({ user: req.user })
})


app.listen(3000)