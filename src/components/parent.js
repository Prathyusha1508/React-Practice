import React from 'react'

const Parent = ({
    title,
    image,
    description,
    buttonText,
    onButtonClick
})=>{
    return(
        <div>
            <h1>{title}</h1>
            <img src ={image}alt={title}/>
            <h1>{description}</h1>
           <button onClick={onButtonClick}>{buttonText}</button>
            


        </div>
    )
}

export default Parent;