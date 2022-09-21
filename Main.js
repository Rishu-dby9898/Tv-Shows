import axios from 'axios';
import React from 'react';
import { useState } from 'react';
function Main() {
  const [id, setId] = useState("");
  const [data, setData] = useState({});


  function handleChange(e) {
    return setId(e.target.value);
  }

 async  function Event() {
    await axios.get(`https://api.tvmaze.com/search/people?q=${id}`).then((response)=>{
   

    setData(response.data);
    })
    // data.map((xyz)=>{
    //   console.log(xyz);
    // })
  }




  return (<>
    <input type='text' onChange={handleChange} placeholder="Enter name" />
    <button onClick={Event}>ok</button>
    {{data}}
    {data&&data.map((xyz)=>{
      <p>{xyz.score}</p>
    })}
    
  </>)
}
export default Main;