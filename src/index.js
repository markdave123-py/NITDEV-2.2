import Express from 'express'
import { config } from './config/env.js'
import { studentRouter } from './routes/student.route.js';
import { myDb } from './config/database.js';


const app = Express();

app.use(Express.json())

app.use(studentRouter)


myDb.sync().then(() => {
    console.log("database connected")
    app.listen(config.port, () =>{
    console.log(`Server running on port ${config.port}`);
})

}).catch((err) => {
    console.log(err.message)
})








