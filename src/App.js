import React, { useState } from 'react'
import TodoList from './TodoList';




export default function App() {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);


  const itemEvent = (e) => {
    setInputList(e.target.value)
  }


  const listOfItems = () => {
    setItems((items) => {
      return [...items, inputList]
    });
    setInputList("");
  }


  const deletedItems = (id) => {
    setItems((items) => {
      return items.filter((arr, index) => {
        return index !== id;
      });
    })
  }


  return (
    <div className='main_div'>
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder='Add a item' value={inputList} onChange={itemEvent} />
        <button onClick={listOfItems}>+</button>

        <ol>
          {items.map((item, index) => {
            return <TodoList
            key={index}
            id={index}
            deletedItems={deletedItems} 
            item={item} />
          })}
        </ol>
      </div>
    </div>
  )
}
