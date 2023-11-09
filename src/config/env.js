import dotenv from 'dotenv';

dotenv.config();



export const config = {

    port: process.env.PORT,
    DBNAME: process.env.DBNAME,
    DBUSER: process.env.DBUSER,
    DBPASSWORD: process.env.DBPASSWORD,
    DBHOST: process.env.DBHOST
    
}