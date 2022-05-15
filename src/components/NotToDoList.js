import React, { useEffect, useState } from "react";


export const NotToDoList = ({ itemList, handleToDoComplete }) => {

    return (
        <div className='todos'>
            {itemList.map((item) => 
            <li 
            onClick={() => handleToDoComplete(item.id)}
            key={item.id}
            className={item.isCompleted ? 'completed' : ''}
            >
            {item.name}
            </li>)}
        </div>
    )
};