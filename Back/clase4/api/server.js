const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const fetch = require('isomorphic-fetch')
const url = "https://klassi-proto.herokuapp.com/api/users"

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//async
app.get('/', async (req, res) => {
    const nombre = req.query.nombre
    if (nombre) {
        const response = await fetch(url)
        const json = await response.json()
        const user = json.result.find(e => e.nombre === nombre)
        return res.json({ result: user })
    }
    return res.json({ result: json })
})

//no async
app.get('/', (req, res) => {
    const nombre = req.query.nombre
    fetch(url)
    .then(res => res.json())
    .then(json => {
        if (nombre) {
            const user = json.result.find(e => e.nombre === nombre)
            return res.json({ result: user })
        } else {
            return res.json({ result: json })
        }
    })
})

app.listen(3000)