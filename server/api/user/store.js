import { redisClient } from "../../service/redis";

const userRegister = async (req, res) => {
    let userSession = await redisClient.hGetAll('user-session:123');
    res.json({ userSession })

}


export default { userRegister }