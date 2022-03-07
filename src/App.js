import {useEffect, useState} from "react";
import Button from './Button';
import styles from './App.module.css';


function Hello(){
  function destroyedFn(){
    console.log("난 파괴됐다")
  }

  function createFn(){
    console.log("난 만들어졌다");
    return destroyedFn;
  }
  useEffect( createFn, [])
  return(
  <h1>Hello</h1>
  )
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev)=> !prev);
  }
  return (
    <div>
    {showing ? <Hello/> : null}  
    <button onClick={onClick}>{showing ? "hide" : "Show"}</button>
    </div>
  ); 
}

export default App;

