import React from 'react'
import Parent from './parent';


const Child = ()=>{

    const handleButton = ()=>{
        alert('clicked');
    }
    return(
        <div>
            <Parent
            title="Card1"
            image="https://via.placeholder.com/150"
            description="this is card 1"
            buttonText="click me"
            onButtonClick={handleButton}/>


        </div>
    )
}

export default Child;