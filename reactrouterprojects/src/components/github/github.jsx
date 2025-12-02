import React, {useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){

    const data = useLoaderData()
// const [data,setData] = useState([])
//     useEffect(() =>{
//         fetch('https://api.github.com/users/aaryamanmodi353-rgb').then(res => res.json()).then(data=> {
//             console.log(data);
//             setData(data)
//         })


//     },[])
    return(
        <div className='text-center m-4 bg-gray-900 text-yellow-400 p-5 text-4xl'>Github followers: {data.followers} 
        <br/>
        <img src= {data.avatar_url} alt="Git picture"/>
        </div>
       
    )
}

export default Github;

export const githubInfoLoader = async () =>{
    const res = await fetch('https://api.github.com/users/aaryamanmodi353-rgb')
    return res.json()
}