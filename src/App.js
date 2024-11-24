import axios from "axios";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchJoke } from "./jokeslicer";

function App() {

  const [category,setCategory] = useState()
  const joke = useSelector(function(state){
    return state.joke.joke
  })
  const dispatch = useDispatch()
  function handleChange(e){
  setCategory(e.target.value)
  }
  function handlefetch(){
dispatch(fetchJoke(category))
  }
  
  return (
    <div className="App">
      <div className="bg">
      <div className="appinupt">
      <input onChange={handleChange}></input>
      <button onClick={handlefetch}>Get Joke</button>
      </div>
     
      <h1 className="jokes">{joke}</h1>
      </div>
     
    </div>
  );
}

export default App;
