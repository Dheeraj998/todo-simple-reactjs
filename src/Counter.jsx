import React, { useEffect, useState } from 'react'

function Counter({title,countValue}) {
   
const [count,setCount]=useState(0)
const [count2,setCount2]=useState(0)
    useEffect(()=>{
         console.log('mounting')
   console.log('count1'+count)
   console.log('count2'+count2)
    return ()=>{
        console.log('unmounting');
    }
},[count,count2])

  return (
    <div>
    <h1 onClick={()=>setCount(count+1)}>I am component {count}</h1>
    <h1 onClick={()=>setCount2(count2+1)}>I am component {count2}</h1>
    </div>
  )
}

export default Counter
