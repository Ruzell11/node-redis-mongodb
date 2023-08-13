import store from "../store"

const userRegister = async(req , res) => {
    return await store.userRegister(req,res)
}

export default {userRegister}