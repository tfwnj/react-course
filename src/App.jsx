
import { useState } from 'react';
import './App.css';

function Greeting({name, age}){
  return <h1>Hello, I am {name}, I am {age} years old.</h1>;
}


function App() {
  const [showGreeting, setShowGreeting] = useState(false);

  function toggleGreeting(){
    setShowGreeting(!showGreeting);
  }

  return <>
  <div>
    <button onClick={toggleGreeting}>Click Me</button>
    {showGreeting && <Greeting name={"Filipe"} age={26} />}
  </div>
  </>;
}

export default App;
