import { useState } from 'react';
import Axios from 'axios' // This helps us to send HTTP requests between the FE and the BE
import './App.css';

function App() {

  // Creating useStates for the CRUD operations
  const [itemName, setItemName] = useState('')
  const [brandName, setBrandName] = useState('')
  const [itemDescription, setItemDescription] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)

  // Function to add the useState values into our MongoDB database 

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {
      
      itemName: itemName,
      brandName: brandName,
      itemDescription: itemDescription,
      quantity: quantity,
      price: price
    });

  }
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

      <button onClick={addToList}> Add new item</button>

    </div>
  );
}

export default App;
