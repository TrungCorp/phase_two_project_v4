

import ActiveContainer from "./ActiveContainer";
import { useOutletContext } from "react-router-dom";
import ReserveContainer from "./ReserveContainer";
import { useState } from "react";
import "../components/Home.css"

function Home(){
   
    const {players} = useOutletContext()
    const [displayInfo,setDisplayInfo] = useState([])
    console.log(players)
    function handlePlayerInfo(infoObj){
        
        
        const userObj = players.find((player) =>{ 
            if (player.name === infoObj.target.innerText){
            console.log("found")
            setDisplayInfo(player)
         }
         else{
            
            console.log(infoObj.target.innerHTML)
            console.log("not found")
         }
        })
        
        
        console.log(userObj)
    }

    return(
        <div className="home-container">
           
            
            <ActiveContainer players={players} handlePlayerInfo={handlePlayerInfo}>

             
            </ActiveContainer>
            <ReserveContainer displayInfo={displayInfo}/>
            
        </div>
    )
}

export default Home;