import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [list, setList] = useState("");
  const [arr, setArr] = useState([]);

  const inputData = (event) => {
    setList(event.target.value);
  };
  const outputData = () => {
    setArr((oldVal) => {
      return [...oldVal, list];
    });
    setList("");
  };
  const deleteItems = (id) => {
    setArr((oldVal) => {
      return oldVal.filter((arrItem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="mainClass">
        <div className="workClass">
          <br />
          <h1>ToDoList</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            onChange={inputData}
            value={list}
          />
          <button onClick={outputData}>+</button>

          <ol>
            {arr.map((itemList, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                  text={itemList}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
