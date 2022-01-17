import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Inventory Manager</h1>


      <label>Item Name </label>
      <input type="text" />

      <label>Brand </label>
      <input type="text" />

      <label>Item Description</label>
      <input type="text" />

      <label>Quantity</label>
      <input type="number" />

      <label>Price</label>
      <input type="number" />

      <button> Add new item</button>

    </div>
  );
}

export default App;
