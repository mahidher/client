import React from 'react'

const SampleTask = (props) => {
    const {title,tmpdata} = props
    const data =["a","b",'c']
    
  return (
    <div className="task">
        {tmpdata && tmpdata.map(x=>(
            <div className="individual-task">
                <p>{x['head']}</p>
                <p>{x["message"]}</p>
            </div>
        ))}
        
    </div>
  )
}

export default SampleTask