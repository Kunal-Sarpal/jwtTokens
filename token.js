const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const app = express();

const ALL_USERS = [
    {
        username:"kunal1@gmail.com",
        password:"1234",
        name:"Kunal1",

    },
    {
        username:"kunal2@gmail.com",
        password:"124",
        name:"Kunal2",

    },
    {
        username:"kunal3@gmail.com",
        password:"2334",
        name:"Kunal3",

    }
];

function userExists(username,password){
    const userExists = false;
    for(let i = 0;i < ALL_USERS.length;i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            userExists = true;
        }
    }
    return userExists;  
}
app.post("/signup", (req,res)=>{
    const username = req.body.username;    
    const password = req.body.password; 
    
    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"user does'nt found in db";
        });
    }
    var token = jwt.sign({username:usernam},jwtPassword);
    return res.json({
        token,
    })
})

app.get("/users", (req,res)=>{
    const token = req.header.authorization;
    try{
        const decode = jwt.verify(token,jwtPassword);

    }
})
