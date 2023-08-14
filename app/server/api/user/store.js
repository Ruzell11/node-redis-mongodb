import { redisClient } from "../../service/redis";
import User from "../user/models/userModel";

const userRegister = async (req, res) => {
    try {
       const {email} = req.body

       const newUser = await new User({
        email
       }).save()

        return res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ message: 'An error occurred while registering the user' });
    }
};

export default { userRegister };
