import { useOutletContext } from "react-router-dom"
import { useState } from "react"
import "../components/Battle.css"
function Battle(){
    const {players} = useOutletContext()
    
    const [damageBoost,setDamageBoost] = useState([])
    console.log(players)

    function genRandNumber(){
        const dataLength = players.length
        const randomNum = Math.floor(Math.random() * dataLength)
        return randomNum
    }
    function handleBattle(){
        
        const randNum1 = genRandNumber()

        console.log(randNum1)
    }
    return(
        <div className="battle-container">
            <div className="box-container">
                <div className="box left-box">
                    LEFT BOX
                </div>
                <div className="vs-tag">VS</div>
                <div className="box right-box">
                    RIGHT BOX

                </div>
            </div>
            <button onClick={handleBattle}>BATTLE!</button>
        </div>
    )
}
export default Battle