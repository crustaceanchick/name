import React, { useEffect, useState } from 'react'
import {TextField} from './components/textField.tsx'

import './Todo.css'
import { Card } from './components/card.tsx'


export const Todo = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [arr, setArr] = useState<string[]>([])
useEffect(()=>{
    console.log('arr: ', arr)
},[arr])

    return (
        <div className="container">
            {arr.map((pizda, index) => <Card item={pizda} xxx={index} xui={setArr} arr={arr}/>)}
            {modalOpen && <TextField xui={setArr} arr={arr} pizdanutsa={setModalOpen}/>}            
            <button 
            className='button'
            onClick={() => setModalOpen(true)}
            >
                +      
            </button>
        </div>
    )
}