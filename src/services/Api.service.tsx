import axios from "axios"

const API_BASE_URL = "http://localhost:1337"
const REQUEST_TIME_OUT = 10000

const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: REQUEST_TIME_OUT
})

export default instance