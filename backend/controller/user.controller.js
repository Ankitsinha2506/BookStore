import User from "../Model/user.model.js";
import bcryptjs from "bcryptjs"


export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "USer already exists." })
        }
        const hashPassword = await bcryptjs.hash(password, 8)
        const newUser = new User({
            fullname,
            email,
            password: hashPassword
        })
        await newUser.save()
        res.status(201).json({ message: "User created successfully" })

    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal Server Error." })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password, user.password)
        if (!user || !isMatch) {
            return res.status(400).json({ message: " Invalid Username or Password." })
        } else {
            res.status(200).json({
                message: "Login Successfull.", user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email
                }
            })
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal Server Error." })
    }

}