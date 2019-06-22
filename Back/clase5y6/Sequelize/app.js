const Sequelize = require('sequelize')

const connection = new Sequelize('coder_schema', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql'
})

connection
    .authenticate()
    .then(() => console.log('Conexion exitosa.'))
    .catch(err => console.error('No hay conexion:', err));


const User = connection.define('users', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    age: {
        type: Sequelize.INTEGER
    }
});

User
    .sync()
    .then(() => {
        return User.create({
            firstName: 'pepe',
            lastName: 'pepito',
            age: 13
        })
    })

//find all users

User
.findAll()
.then(users => {
    console.log("All users:", JSON.stringify(users,null,4));
})

app.post ('/register', async (req,res) => {
    const body = req.body
    const {firstName, lastName} = body
    const user = await User.create ({firstName, lastName})
    console.log ("Usuario creado", user.id)
    return res.json(user)
})