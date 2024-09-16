
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useState,useEffect } from "react";

function App() {
  const [players,setPlayers] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3001/players")
    .then(resp => resp.json())
    .then(data=>setPlayers(data))
    .catch(error => console.error(error))
  },[])
  console.log(players)
  return (
    <div className="App">
      <NavBar/>
      <Outlet context={players}/>
    </div>
  );
}

export default App;
