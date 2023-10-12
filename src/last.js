// const express = require('express');
// const data = require('./data')
// const env = require('./config/env')


// const port = env.config.PORT
// let students = data.studentData

// const app = express();

// app.use(express.json())


// const logger = (req, res, next) =>{
//     const date = new Date().toISOString();
//     console.log(`this req was performed on ${date} and the method is ${req.method},
//      the url is ${req.url}`);
//      next();
// }

// // app.use(logger);

// app.get('/', (req, res) => {
//     res.send('First Backend server');
// })

// app.get('/names', logger, (req, res) =>{
//     res.send(students)

// });

// app.post('/names', (req, res)=>{

//     const {name, email, matricNo} = req.body
    
//     const foundStudent = students.find(person => person.email === email);

//     if(foundStudent){
//         res.status(403).json({
//             message: `a student with this email ${email} already exist`
//         })
//     }else{
//         const student = {
//         id: students.length + 1,
//         name: name,
//         email: email,
//         matricNo: matricNo
//     }

//     students.push(student)
//     res.status(201).json({
//         student: student,
//         students: students
//     });

//     }
// })

// app.get('/names/:name', (req, res)=>{
//     console.log(req.params.name)
//     const name = req.params.name.toLowerCase()

//     const student = students.find((person) => person.name.toLowerCase() == name)

//     if (!student){
//         res.send(`no student with name ${name}`)
//     }
//     res.send(student)


// })

// app.listen(port, ()=>{
//     console.log(`Server running on port ${port}`);
//     console.log(port)
// });