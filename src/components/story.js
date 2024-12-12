import React from 'react'


const Story = ({
    title,
    author,
    description
})=>{
    return(
        <>
        <h1>{title}</h1>
        <h1>{author}</h1>
        <h1>{description}</h1>



        </>
    )
}

export default Story;