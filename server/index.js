const express= require('express')
const app = express()
const mysql=require('mysql')
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db= mysql.createConnection({
     
    user:'root',
    host: "localhost",
    password:'',
    database:'onlinemarket'

    })


    //Post request
app.post('/signup/create',(req ,res)=>{
    const firstName= req.body.firstName
    const lastName= req.body.lastName
    const email= req.body.email
    const password= req.body.password
console.log(firstName)
    db.query('INSERT INTO buyer (firstname ,lastname ,email ,password) VALUES (?,?,?,?)',[firstName,lastName,email,password],(err ,result)=>{
       
           if(err){
               console.log(err)
           }
           else{

            res.send("values inserted")
           }

    })

})


app.listen(3001,()=>{
    console.log('server is running in 3001')
})