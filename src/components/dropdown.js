import React, { useState } from 'react';

const Dropdown = ()=>{
    const [selectedOption,setSelectedOption]=useState();

    const handleSelect = (e)=>{
        setSelectedOption(e.target.value)
    }
    return(
        <div>
            <label htmlFor='dropdown'>choose an option:</label>
            <select id='dropdown'onChange={handleSelect} > 
                <option >opt 1</option>
                <option>opt 2</option>
                <option>opt 3</option>
                <option>opt 4</option>

            </select>
            {selectedOption && <p>You selected: {selectedOption}</p>}

        </div>
    )
}

export default Dropdown;