import React, { useState } from "react";
import styled from "styled-components";
import Button from "./ButtonSW";

const Checkbox = () => {
  const [items, setItems] = useState([
    { id: "01", text: "Patient1", checked: true },
    { id: "02", text: "Patient2", checked: false },
    { id: "03", text: "Coffee", checked: false },
  ]);

  const [newItem, setNewItem] = useState("");

  const handleCheck = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([
        ...items,
        {
          id: Date.now().toString(),
          text: newItem,
          checked: false,
        },
      ]);
      setNewItem("");
    }
  };

  return (
    <StyledWrapper>
      <div id="checklist" style={{width:'260px'}}>
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <input
              checked={item.checked}
              value={item.id}
              name="r"
              type="checkbox"
              id={item.id}
              onChange={() => handleCheck(item.id)}
            />
            <label htmlFor={item.id}>{item.text}</label>
          </React.Fragment>
        ))}
      </div>
      <div className="input-container" style={{width:'260px'}}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
        />
      </div>
      
      <div>
      <div className="ml-20 mt-5">

      <Button onClick={addItem}>Add Item</Button>
      </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  #checklist {
    --background: #fff;
    --text: #414856;
    --check: #4f29f0;
    --disabled: #c3c8de;
    --width: 100px;
    --height: 180px;
    --border-radius: 10px;
    background: var(--background);
    width: var(--width);
    height: var(--height);
    border-radius: var(--border-radius);
    position: relative;
    box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);
    padding: 30px 85px;
    display: grid;
    grid-template-columns: 30px auto;
    align-items: center;
    justify-content: center;
  }

  #checklist label {
    color: var(--text);
    position: relative;
    cursor: pointer;
    display: grid;
    align-items: center;
    width: fit-content;
    transition: color 0.3s ease;
    margin-right: 20px;
  }

  #checklist label::before,
  #checklist label::after {
    content: "";
    position: absolute;
  }

  #checklist label::before {
    height: 2px;
    width: 8px;
    left: -27px;
    background: var(--check);
    border-radius: 2px;
    transition: background 0.3s ease;
  }

  #checklist label:after {
    height: 4px;
    width: 4px;
    top: 8px;
    left: -25px;
    border-radius: 50%;
  }

  #checklist input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    height: 15px;
    width: 15px;
    outline: none;
    border: 0;
    margin: 0 15px 0 0;
    cursor: pointer;
    background: var(--background);
    display: grid;
    align-items: center;
    margin-right: 20px;
  }

  #checklist input[type="checkbox"]::before,
  #checklist input[type="checkbox"]::after {
    content: "";
    position: absolute;
    height: 2px;
    top: auto;
    background: var(--check);
    border-radius: 2px;
  }

  #checklist input[type="checkbox"]::before {
    width: 0px;
    right: 60%;
    transform-origin: right bottom;
  }

  #checklist input[type="checkbox"]::after {
    width: 0px;
    left: 40%;
    transform-origin: left bottom;
  }

  #checklist input[type="checkbox"]:checked::before {
    animation: check-01 0.4s ease forwards;
  }

  #checklist input[type="checkbox"]:checked::after {
    animation: check-02 0.4s ease forwards;
  }

  #checklist input[type="checkbox"]:checked + label {
    color: var(--disabled);
    animation: move 0.3s ease 0.1s forwards;
  }

  #checklist input[type="checkbox"]:checked + label::before {
    background: var(--disabled);
    animation: slice 0.4s ease forwards;
  }

  #checklist input[type="checkbox"]:checked + label::after {
    animation: firework 0.5s ease forwards 0.1s;
  }

  .input-container {
    margin-top: 20px;
    display: flex;
    gap: 10px;
  }

  input[type="text"] {
    padding: 10px;
    font-size: 1em;
    border-radius: 5px;
    border: 1px solid #ddd;
    flex: 1;
  }

  button {
    padding: 10px 15px;
    font-size: 1em;
    border-radius: 5px;
    background-color: #4f29f0;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 200ms;

    &:hover {
      background-color: #3b1fc9;
    }
  }

  @keyframes move {
    50% {
      padding-left: 8px;
      padding-right: 0px;
    }

    100% {
      padding-right: 4px;
    }
  }

  @keyframes slice {
    60% {
      width: 100%;
      left: 4px;
    }

    100% {
      width: 100%;
      left: -2px;
      padding-left: 0;
    }
  }

  @keyframes check-01 {
    0% {
      width: 4px;
      top: auto;
      transform: rotate(0);
    }

    50% {
      width: 0px;
      top: auto;
      transform: rotate(0);
    }

    51% {
      width: 0px;
      top: 8px;
      transform: rotate(45deg);
    }

    100% {
      width: 5px;
      top: 8px;
      transform: rotate(45deg);
    }
  }

  @keyframes check-02 {
    0% {
      width: 4px;
      top: auto;
      transform: rotate(0);
    }

    50% {
      width: 0px;
      top: auto;
      transform: rotate(0);
    }

    51% {
      width: 0px;
      top: 8px;
      transform: rotate(-45deg);
    }

    100% {
      width: 10px;
      top: 8px;
      transform: rotate(-45deg);
    }
  }

  @keyframes firework {
    0% {
      opacity: 1;
      box-shadow: 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0,
        0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0;
    }

    30% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      box-shadow: 0 -15px 0 0px #4f29f0, 14px -8px 0 0px #4f29f0,
        14px 8px 0 0px #4f29f0, 0 15px 0 0px #4f29f0, -14px 8px 0 0px #4f29f0,
        -14px -8px 0 0px #4f29f0;
    }
  }
`;

export default Checkbox;
