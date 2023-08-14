import { redisClient } from '../../service/redis';
const getMovieList = async (req, res) => {
    res.json({ message: "Movie routes is working fine just change" })
}

export default { getMovieList }