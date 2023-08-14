import store from "../store"


const getMovieList = async (req, res) => {
    return await store.getMovieList(req, res)
}

export default { getMovieList }