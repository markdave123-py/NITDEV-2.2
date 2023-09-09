const dotenv = require('dotenv')

dotenv.config()

const config = Object.freeze({
    PORT: process.env.PORT
})

module.exports = {
    config
}