import { useState, useEffect } from 'react';
import Axios from 'axios' // This helps us to send HTTP requests between the FE and the BE
import './App.css';

function App() {

  // Creating useStates for the CRUD operations
  const [itemName, setItemName] = useState('')
  const [brandName, setBrandName] = useState('')
  const [itemDescription, setItemDescription] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)

  //Creating a useState to display the database items onto the frontend
  const [itemList, setItemList] = useState([]);

  // Creating a useState to update the items already in the database
  const [isPut, setIsPut] = useState(false);
  const [updatedItem, setUpdatedItem] = useState({
    title: "",
    description: "", 
    id: ""

  })

  //Calling the useEffect hook here so that we can see the items currently in the database on the frontend

  useEffect(() => {

    Axios.get("http://localhost:3001/read").then((response) => {
      setItemList(response.data)
    })

  }, [])

  // Function to add the useState values into our MongoDB database 

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {

      itemName: itemName,
      brandName: brandName,
      itemDescription: itemDescription,
      quantity: quantity,
      price: price
    });

    alert("Item added successfully! Please refresh the page to see the changes");

  }

  // Function to delete an item
  const deleteItem = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`, {

    });

    alert("Item deleted successfully! Please refresh the page to see the changes");
  }

  // Function to update an item
  function updateItem(id) {
    setIsPut(true)
    setUpdatedItem(prevInput => {

      return (
        {
          ...prevInput,
          id: id
        }
      )
    })

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

      <h1>Item List</h1>

      {itemList.map((val, key) => {

        return <div key={key} className='item'>

          <p>itemID: {val._id}</p>
          <h3>Name: {val.Name}</h3>
          <h3>Brand: {val.Brand}</h3>
          <h3>Description: {val.Description}</h3>
          <h3>Quantity: {val.Quantity}</h3>
          <h3>Price($): {val.Price}</h3>
          {""}

          <button onClick={() => updateItem(val_.id)}>Update</button>
          <button onClick={() => deleteItem(val._id)}>Delete item</button>
        </div>
      })}

    </div>
  );  
}

export default App;
