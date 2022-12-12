import React, { useEffect, useState } from 'react'

import Navbar from '../components/Navbar';


function Todo() {
  const [data, setdata] = useState([])


  useEffect(()=>{
    async function result(){
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const text = await res.json();
      let counttext =text.slice(0,12);

       setdata(counttext)      
    }
    result();
  }
,[])


  return (
    <div>
      <Navbar />
      <div className="display">
      {data.length>0 && data.map((item) => (
       
          <div key={item.id} className="card">
          <span>{item.id}</span>
          <h4>{item.title}</h4>
          </div>
      ))}
      </div>

    </div>
  )
}

export default Todo;
