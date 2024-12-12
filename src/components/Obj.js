import React from 'react'


const Object = ()=>{
    const items = ['apple','banana','orange','grapes'];
    return(
        <>
        {items.map((val,index)=>(
            <div key={index}
            >
                <h1>{val}</h1>

            </div>
        ))}



        </>
    )
}

export default Object;