

import ActiveContainer from "./ActiveContainer";
import { useOutletContext } from "react-router-dom";
import ReserveContainer from "./ReserveContainer";

import "../components/Home.css"

function Home(){
   
    const players = useOutletContext()
    const playerList = players.map((player)=>{
        return <h1 key={player.id}>{player.name}</h1>
    })
    

    return(
        <div className="home-container">
           
            
            <ActiveContainer playerList={playerList}>

             
            </ActiveContainer>
            <ReserveContainer/>
            
        </div>
    )
}

export default Home;