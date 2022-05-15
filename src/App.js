import React, { useEffect, useState } from "react";
import { AddItem } from './components/AddItem'
import { NotToDoList } from './components/NotToDoList'
import './App.css';

function App() {

  const [notToDoItems, setNotToDoItems] = useState([]);

  const addItem = (item) => {
    setNotToDoItems((items) => { 
      return [item, ...items]
    })
  }

  const handleToDoComplete = (id) => {
   
    let mapped = notToDoItems.map(task => {
      return task.id == id ? { ...task, isCompleted: !task.isCompleted } : { ...task};
    });
    setNotToDoItems(mapped.sort((a,b) => a.isCompleted - b.isCompleted));
  }

  return (
    <div className="App">
      <h1 className="App-header">NOT TO DO LIST</h1>
      <div className="todos">
        <AddItem addItem={addItem} />
        <NotToDoList itemList={notToDoItems} handleToDoComplete={handleToDoComplete} />
      </div>
    </div>
  );
}

export default App;
