const fetch = require('isomorphic-fetch')
const url = "https://klassi-proto.herokuapp.com/api/users"

fetch(url)
.then(res => res.json())
.then(json => {
    const names = json.result
    const singleName = names.map(names => names.nombre)
    console.log(singleName)
})