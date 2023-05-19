import React, { useState } from 'react'

function Hooks1() {
    const[val,setval]=useState()
    const[num,setnum]=useState(0)
    const handleOnClickD=(sel)=>{
        console.log("clicked",sel)
        if(sel==='decr'){
            setnum(num-1)
        }
    }
    const handleOnClickI=(sel)=>{
        console.log("clicked",sel)
        if(sel==='incr'){
            setnum(num+1)
        }
    }
    const handleOnClick=(type)=>{
        console.log("clicked",type)
        if(type==='red'){
            setval('red')
        }
        if(type==='green'){
            setval('green')
        }
        if(type==='blue'){
            setval('blue')
        }
    }
  return (
    <>
    {/* <button type='button' class="btn btn-primary" onClick={()=>handleOnClick("red")}>click red</button> */}
    {/* <button type='button' class="btn btn-primary" onClick={()=>handleOnClick("green")}>click green</button> */}
    {/* <button type='button' class="btn btn-primary" onClick={()=>handleOnClick("blue")}>click blue</button> */}
    {/* <h2>Color:{val}</h2> */}
    <div className='row'>
        <div className='col-md-4'>
    <button type='button' class="btn btn-primary" onClick={()=>handleOnClickD("decr")}>Decrement</button>
    </div>
    <div className='col-md-4'>
        <h2>Value :{num}</h2>
    </div>
    <div className='col-md-4'>
    <button type='button' class="btn btn-primary" onClick={()=>handleOnClickI("incr")}>Increment</button>
    </div>
    </div>
    </>
  )
}

export default Hooks1