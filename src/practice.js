import React from 'react'
import Practice1 from './practice1';

function Practice(props){

    let {name,course}=props;
    return(
        <>
        <div>
            This is practice page of {name} about {course}
        </div>
        <br/>
        <Practice1 name1={name} course1={course}/>
        </>
    )
}

export default Practice