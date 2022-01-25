import React, { useState } from "react";
import usersApi from "../api/usersApi";
import { getAllUsers } from "../api/users";
// TODO: change it from to states to one object

// const handleChange = (e) => {
//     updateUser({[e.target.name]: e.target.value})
// }


const UserForm = () => {
    // const [user, updateUser] = useState({});
    const [name, setName] = useState("");
    const [age, setAge] = useState("")

    const sendUser = async () => {
        const { data } = await usersApi.post("/users", {
            name,
            age
        })
        setName("");
        setAge("");
        console.log(data);
    }

    const getUsers = async () => {
        // const results = await getAllUsers("/users")
        const results = await usersApi.get("/users")
        console.log(results);
    }

    return (
        <div>
            <label>Name</label>
            {/* <input type="text" name="name" value={user.name} onChange={(e) => handleChange(e)}/> */}
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <label>Age</label>
            <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
            {/* <input type="number" name="age" value={user.age} onChange={(e) => handleChange(e)}/> */}
            <button onClick={sendUser}>submit</button>
            <br />
            <button onClick={getUsers}>Get all</button>
        </div>
    )
}

export default UserForm
