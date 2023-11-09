import { Sequelize } from "sequelize";
import { config } from "./env.js"

export const myDb = new Sequelize(config.DBNAME, config.DBUSER, config.DBPASSWORD, {

    host: config.DBHOST,
    dialect: "mysql",

})