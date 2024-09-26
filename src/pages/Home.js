

import ActiveContainer from "./ActiveContainer";
import { useOutletContext } from "react-router-dom";
import ReserveContainer from "./ReserveContainer";
import { useState } from "react";



import "../components/Home.css"

function Home(){
   //GETS PROPS FROM OUTLET
    const {players} = useOutletContext()

    const [displayInfo,setDisplayInfo] = useState([])
    const [word,setWord]= useState("")
    const [count,setCount] = useState(0)


    const handleWord= (event)=>{
        setWord(event.target.value)
    }

    const handleWordSubmit = (event)=>{
        event.preventDefault()
        const wordLength = word.length
        setCount((previousCount)=>previousCount+wordLength)
        setWord("")

    }

    console.log(players)
    function handlePlayerInfo(infoObj){
        
        
        const userObj = players.find((player) =>{ 
            if (player.name === infoObj.target.innerText){
            
            setDisplayInfo(player)
         }
        
        })
        
        
        console.log(userObj)
    }

    return(
        <div className="home-container">
            <form onSubmit={handleWordSubmit}>
                <input  value={word}  onChange={handleWord}/>
                <button>CLICK ME</button>
            </form>
            <p>
                {count}
            </p>
            <ActiveContainer players={players} handlePlayerInfo={handlePlayerInfo} />
            <ReserveContainer displayInfo={displayInfo}/>
            
        </div>
    )
}

export default Home;