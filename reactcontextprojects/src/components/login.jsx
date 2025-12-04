import React , {useState, useContext} from "react";
import Usercontext from "../context/context"

function Login(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser}  = useContext(Usercontext)

    const handleSubmit = (event) =>{
        event.preventDefault()
        setUser({username,password})


    }
    return(
        <div>Login
        <input type ="text" 
        value = {username} placeholder="username" 
        onChange={(event) => setUsername(event.target.value)}/>

        {" "}
        <input type="text" 
        value = {password}
        onChange={(event) => setPassword(event.target.value)} placeholder="password" />
        <button onClick={handleSubmit}>Submit</button> 
        </div>
    )

   
}

export default Login