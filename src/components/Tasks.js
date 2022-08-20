import React, { useState,useEffect } from 'react'
import SampleTask from './SampleTask'
import "./Tasks.css"
const Tasks = () => {
   const [mock,setMock] = useState(null) 

   const apiHandler = async () =>{
    const data = fetch('http://localhost:5000/')
  .then((response) => response.json())
  .then((data) => {console.log(data);return data});
    setMock(data)
   }

   useEffect(()=>{
    apiHandler()
    console.log("mock updated")
    console.log(mock)
    
    
   },[])


  return (
   mock && <div className="tasks-grid">
        
        <SampleTask title ={"To Do"} tmpdata={mock[0]["todo"]}> </SampleTask>
        <SampleTask title ={"In progress"} tmpdata={mock[0]["todo"]}></SampleTask>
        <SampleTask title ={"To Do"} tmpdata={mock[0]["todo"]}></SampleTask>
        <SampleTask title ={"To Do"} tmpdata={mock[0]["todo"]}></SampleTask>
        <SampleTask title ={"To Do"} tmpdata={mock[0]["todo"]}></SampleTask>
    </div>
  )
}

export default Tasks