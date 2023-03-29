import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola Mundo')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <>
            <h1>{inputValue}</h1>
            <input
                type= "text"
                value={inputValue}
                onChange= {handleInputChange()} 

            />
        </>
    )
}
