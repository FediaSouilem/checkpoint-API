import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
 .then(response =>{
   console.log(response);
   setPosts(response.data)
 })
 .catch(err =>{
   console.log (err)
 })
}, [])


  return (
    <div>
       <ul>
         {posts.map(post => <li key={post.id}>{post.name} </li>)}
         </ul>  

    </div>
  )
}

export default UserList