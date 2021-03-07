import React, { useState } from 'react'
function CreateUser() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

    function makeUser() {
        let data={name,age,address}
        console.warn("called",data);
    }

    return (<div>
        <h1>Registeration</h1>
        <input type="text" name="username" onChange={(e) => setName(e.target.value)} /><br /><br />
        <input type="text" name="age" onChange={(e) => setAge(e.target.value)} /><br /><br />
        <input type="text" name="address" onChange={(e) => setAddress(e.target.value)} /><br /><br />
        <button onClick={makeUser}>Create User</button>

    </div>)
}

export default CreateUser;