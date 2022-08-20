import React,{useState} from 'react'

const Search = () => {
    const [entry,setEntry] = useState("")

    const inputHandler =() =>{
            console.log(entry)
    }

    
  return (
    <div className="search">
        <div className="search-input">
            <input type="text" value={entry} onChange={inputHandler}></input>
        </div>
        <div className="search-buttons">
            <button >CREATE TASK</button>
            <button  >CREATE JOB</button>
        </div>
        
    </div>
  )
}

export default Search