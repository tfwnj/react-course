
import { useState } from 'react';
import './App.css';


function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setName(value);
    console.log(value);
  }

  return (
    <div>
      <input type="text" placeholder='Name...' onChange={handleChange} />
      {name}
    </div>
  );
}

export default App;
