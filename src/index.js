import Express from 'express'
import { students } from './data.js'


const app = Express();

app.use(Express.json())


const logger = (req, res, next) =>{
    const date = new Date().toISOString();
    console.log(`this req was performed on ${date} and the method is ${req.method},
    the url is ${req.url}`);
     next();
}


app.post('/login', (req, res) =>{

    const {name, email, matricNo} = req.body

    const student = {
        id: students.length + 1,
        name: name,
        email: email,
        matricNo: matricNo
    }

    students.push(student)

    
    res.status(201).json({
        message: 'student created successfully',
        student: student,
        data: students
    })
})

app.get('/students', (req, res) =>{
    res.send(students);
})

app.get('/hello/:name', logger, (req, res) =>{
    const name = req.params.name
    
    res.send({
        name: name,
    });
})


app.listen(3000, () =>{
    console.log(`Server running on port 3000`);
})