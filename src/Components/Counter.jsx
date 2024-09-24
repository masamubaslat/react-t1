import React, { useEffect, useState } from 'react'
export default function Counter() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState('Masa');
    const increment = ()=>{
        setCount(count+1);
    }
    const decrement = ()=>{
        setCount(count-1);
    }
    const changeName = ()=>{
        setName('Lara');
    }
    function counterUpdated(){
        console.log('Counter Updated');
    }
    function nameUpdated(){
        console.log('Name is updated');
    }
    function printHi(){
        console.log('Hi');
    }
    useEffect(()=>{
        printHi();
    },[count,name])
    useEffect(()=>{
        counterUpdated();
    },[count])
    useEffect(()=>{
        nameUpdated();
    },[name])
  return (
    <div>
      <h2>Counter: {count} </h2>
      <button className='btn' onClick={increment}>+</button>
      <button className='btn' onClick={decrement}>-</button>
      <h2>name is {name}</h2>
      <button className='btn' onClick={changeName}>Change Name</button>
    </div>
  )
}


