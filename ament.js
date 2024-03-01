const zod = require('zod');
const jwt = require('jsonwebtoken');

const user_data = {
    username: "@Kunal",
    password: "#kunal3444%"
}

const un = user_data.username;
const ps = user_data.password;

async function validate(){
    const schema = zod.object({
        username: zod.string().startsWith("@"),
        password: zod.string().min(6)
    })

    const response = schema.safeParse(user_data);

    if(response.success){
            returntoken(un);
            
    }
    else{
            console.log(response.error.issues[0].message);
    }
    
}
function returntoken(un){
    const token = jwt.sign(un,"23456");

    console.log("Token: " + token);

    const verify = jwt.verify(token,"23456");
    console.log("Verify: " + verify);

    const decode = jwt.decode(token,"23456");
    console.log("Decode: " + decode);
}

validate();