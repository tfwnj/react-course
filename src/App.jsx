
import './App.css';

function Greeting(props){
  return <h1>Hello, I am {props.name}. I am {props.age} years old.</h1>;
}

function Alternative({name, age}){
  return <h1>Hi! I am {name}. I am {age} years old.</h1>
}


function App() {
  const name = getName();
  const age = 26;

  return <>
  <div>
    <Alternative name={"Norm"} age={70}  />
    <Greeting name={"Pedro"} age={24} />
    <Greeting name={"Filipe"} age={26} />
    <Greeting name={"Flower"} age={28} />
    <Greeting name={"Vini"} age={19} />
    
  </div>
  </>;
}

function getName(){
  return "Paulo";
}
export default App;
