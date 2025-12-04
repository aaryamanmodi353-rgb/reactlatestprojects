import React,{useContext} from "react";
import Usercontext from "../context/context";
import user from "../context/contextprovider"

function Profile(){
    const {setUser} = useContext(Usercontext)

    if(!user){
        return <div>please login </div>
    }
    return <div>Welcome {user.username}</div>
    return(
        <div>Profile</div>
    )
}
export default Profile;