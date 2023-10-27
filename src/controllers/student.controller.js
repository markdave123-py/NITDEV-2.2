import { students } from '../models/data.js'
import { signUpSchema } from '../validator/validate.signup.js'
import { hashpassword } from '../utils/hash.js'


export const signup = async (req, res) => {

    const {error, value} = signUpSchema.validate(req.body)
    
    if(error){
        return res.status(400).json({
            message: `validation error, ${error.details[0].message}`
        })
    }

    const {name, email, matricNo, password} = value;

    const foundUser = students.find((student) => student.email === email)

    if(foundUser){
        console.log("user already exists")
        return res.status(400).json({
            message: `User with email ${email} already exists`,
        })
    }

    const hashedPassword = await hashpassword(password)

    console.log(hashedPassword)

    const student = {
        id: students.length + 1,
        name: name,
        email: email,
        matricNo: matricNo,
        password: hashedPassword
    }

    students.push(student)

    
    res.status(201).json({
        message: 'student created successfully',
        student: student,
        data: students
    })
}

export const getStudents = (req, res) =>{
    res.send(students);
}
