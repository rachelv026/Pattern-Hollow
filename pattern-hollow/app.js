const express = require("express");
const User = require("./mongo");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {
    res.send("Server is up and running");
});

app.post("/", async (req, res) => {
    const { email, password } = req.body;

    try {
        const check = await User.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
        }
    } catch (e) {
        res.json("fail");
    }
});

app.post("/signup", async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    const data = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    };

    try {
        const check = await User.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
            await User.insertMany([data]);
        }
    } catch (e) {
        res.json("fail");
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.json("notexist");
        }

        if (user.password !== password) {
            return res.json("fail");
        }

        res.json("success");
    } catch (error) {
        console.error("Error during login:", error);
        res.json("error");
    }
});

app.listen(8000, () => {
    console.log("port connected");
});
