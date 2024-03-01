const jwt = require('jsonwebtoken');


const value = {
    name: "Kunal",
    account: 161623748495060,
    balance: "$100Billion"
    
}
const secret = "234567787";
const token = jwt.sign(value,secret);

function getLength(name){
    return name.length;
}

try{
    
    const verify = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS3VuYWwiLCJhY2NvdW50IjoxNjE2MjM3NDg0OTUwNjAsImJhbGFuY2UiOiIkMTAwQmlsbGlvbiIsImlhdCI6MTcwOTMxMTgyMn0.awFFP2JqJpclzRvrUgtOI0MycebUpuSzaA1lTwGuQBA",'df');
    console.log(verify);
    // throw "Secret";
}
catch(err){
    console.log("token doesnot matches to the secret");
}

console.log(token);