const { default: axios } = require("axios");

//created axios client to create endpoint
const axiosClient=axios.create({
    baseURL:'http://localhost:8000'
});

const createUser=(data)=>axiosClient.post('/user', data)
const getUserByEmail=(email)=>axiosClient.post('/user'+email)


export default{
    createUser,
    getUserByEmail
}