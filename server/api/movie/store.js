import { redisClient } from '../../service/redis';
const getMovieList = async (req, res) => {
    await redisClient.hSet('user-session:123', {
        name: 'John',
        surname: 'Smith',
        company: 'Redis',
        age: 29
    })
    console.log("ITS RUNNING")
    res.json({ message: "Movie routes is working fine" })
}

export default { getMovieList }