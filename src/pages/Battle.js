import { useOutletContext } from "react-router-dom"
import { useState } from "react"
import "../components/Battle.css"
function Battle(){
    const {players} = useOutletContext()
    
    const [damageBoost,setDamageBoost] = useState([])
    console.log(players)

    function handleBattle(){
        console.log("BATTLE.JS TEST")
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
            <button >BATTLE!</button>
        </div>
    )
}
export default Battle