const express = require ('express')
const path = require ("path")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}));


const port = 3000;
const static_path = path.join(__dirname,"./public")
app.use(express.static(static_path))


const users = [];
app.get('/register', (req,res)=>{
   res.json(users) 
})

app.post('/register',  (req, res)=>{
   const user = {
      name:req.body.name, 
      password :req.body.password, 
      email:req.body.email,
      gender: req.body.gender } 
    users.push(user)
    console.log(users)

    return res.redirect('index.html');
   
   })





app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)})