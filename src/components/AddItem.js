import React, { useEffect, useState } from "react";


export const AddItem = ({ addItem }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (evt) => {
     
    evt.preventDefault();
    addItem({
      name: item,
      id: Math.floor(Math.random() * 10000),
      isCompleted: false
    });
    resetItemInput();
  }

  const resetItemInput = () => {
    setItem('')
  }

  return (
    <form onSubmit={handleSubmit}>     
        <input
          className="input"
          type="text"
          value={item}
          onChange={e => setItem(e.target.value)}
        />     
    </form>

  )
};