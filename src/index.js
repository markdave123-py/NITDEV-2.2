const express = require('express');
const data = require('./data')

students = data.studentData

const app = express();

console.log(process.env)


app.get('/', (req, res) => {
    res.send('First Backend server');
})

app.get('/names/:name', (req, res)=>{
    const name = req.params.name

    const student = data.studentData.find((person) => person.name == name)

    if (student.length === 0){
        res.send(`no student with name ${name}`)
    }
    res.send(student)



    // if (name == foundStudent[name]){
    //     res.send(foundStudent)
    // }
})

app.listen(3000, ()=>{
    console.log('server starting at port 3000')
});
