import Express from 'express'
import { config } from './config/env.js'
import { studentRouter } from './routes/student.route.js';



const app = Express();

app.use(Express.json())

app.use(studentRouter)

app.listen(config.port, () =>{
    console.log(`Server running on port ${config.port}`);
})


// const logger = (req, res, next) =>{
//     const date = new Date().toISOString();
//     console.log(`this req was performed on ${date} and the method is ${req.method},
//     the url is ${req.url}`);
//      next();
// }


// app.get('/students', (req, res) =>{
//     res.send(students);
// })

// app.get('/hello/:name', logger,(req, res) =>{
//     const name = req.params.name
//     console.log(config.port)
//     res.send({
//         name: name, 
//     });
// })


