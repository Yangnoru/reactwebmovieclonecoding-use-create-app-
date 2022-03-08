import {useEffect, useState} from "react";
import Button from './Button';
import styles from './App.module.css';


function App() {
  const [toDo,setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  }
  const onSubmit = (event) =>{
    event.preventDefault();
    if (toDo ===""){
      return;
    }else{
      setToDos(function(toDos){
        return([...toDos,toDo])
      })
      setToDo("");
    }
  }
  console.log(toDos);


  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
       <input onChange ={onChange} value={toDo} type="text" placeholder=''/>
       <button>Add To Do</button>
      </form>
    </div>
  ); 
}

export default App;

