const express = require("express")
const User = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await User.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await User.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await User.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user with the provided email exists in the database
        const user = await User.findOne({ email });

        if (!user) {
            // If the user does not exist, return 'notexist' status
            return res.json("notexist");
        }

        // Check if the provided password matches the password in the database
        if (user.password !== password) {
            // If the password is incorrect, return 'fail' status
            return res.json("fail");
        }

        // If the email and password are correct, return 'success' status
        res.json("success");
    } catch (error) {
        // If an error occurs during the login process, return 'error' status
        console.error("Error during login:", error);
        res.json("error");
    }
});

app.listen(8000,()=>{
    console.log("port connected");
})
