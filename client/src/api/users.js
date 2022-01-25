import usersApi from "./usersApi";

// const sendUser = async () => {
//     const {data} = await usersApi.post("/users", {
//         name,
//         age
//     })
//     setName("");
//     setAge("");
//     console.log(data);
// }

// const getUsers = async () => {
//     const results = await usersApi.get("/users")
//     console.log(results);
// }

// export { sendUser, getUsers}

const getAllUsers = async (url) => {
    const { data: {users}} = await usersApi.get(url);
    return users
}

export {getAllUsers}