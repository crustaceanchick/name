import React, { useState } from "react"

export const TextField = ({xui, arr, pizdanutsa}) => {
    const [text, setText] = useState<string>('')
    
    const handleChange = (event) => {
        setText(event.target.value)
    }
    const pizdanutsa1 = () => {
        pizdanutsa (false);
        xui([...arr, text])
    }

    return(
        <>
            <input value={text} onChange={handleChange}/>
            <button onClick = {pizdanutsa1}>Enter</button>
        </>
    )
}


