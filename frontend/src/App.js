import { useState } from 'react';
import './App.css';

function App() {

  // Creating useStates for the CRUD operations
  const [itemName, setItemName] = useState('')
  const [brandName, setBrandName] = useState('')
  const [itemDescription, setItemDescription] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)


  return (
    <div className="App">
      <h1> Inventory Manager</h1>


      <label>Item Name </label>
      <input
        type="text"
        onChange={(event) => {
          setItemName(event.target.value);
        }} />

      <label>Brand </label>
      <input
        type="text"
        onChange={(event) => {
          setBrandName(event.target.value);
        }} />

      <label>Item Description</label>
      <input
        type="text"
        onChange={(event) => {
          setItemDescription(event.target.value);
        }} />

      <label>Quantity</label>
      <input
        type="number"
        onChange={(event) => {
          setQuantity(event.target.value);
        }} />

      <label>Price</label>
      <input
        type="number"
        onChange={(event) => {
          setPrice(event.target.value);
        }} />

      <button> Add new item</button>

    </div>
  );
}

export default App;
