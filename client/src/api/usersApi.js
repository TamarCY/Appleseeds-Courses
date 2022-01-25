import axios from "axios";

let apiUrl = "http://localhost:8080/api/";

if(process.env.NODE_ENV === "production") {
    apiUrl = "api"
}

// export default axios.create({
//     baseURL: apiUrl
// });
// same as:

const usersApi = axios.create({
    baseURL: apiUrl
})

export default usersApi