const Sequelize = require ('sequelize')
const conecction = require('../sql')

const Likes = conecction.define('likes',{
    url: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
})

module.exports = Likes