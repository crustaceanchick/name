import React, { useEffect } from "react"
import "./card.css"

export const Card =({item, xui, arr, xxx})=>{

        const onDelete = () => {
            xui(arr.filter((_, index) => index !== xxx));
        };
    
    return(
        <div onClick = {onDelete} className ="card">
             {item}   
        </div>
    )
}