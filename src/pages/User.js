import React, { useEffect, useState } from 'react'

import Navbar from '../components/Navbar';

function User() {
  const [data, setdata] = useState([])


  useEffect(()=>{
    async function result(){
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const text = await res.json();

       setdata(text)      
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
          <h4>{item.name}</h4>
          <p>{item.email}</p>
          <p>{item.address.city}</p>
          </div>
      ))}
      </div>

    </div>
  )
}

export default User;
