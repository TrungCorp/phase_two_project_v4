import { useOutletContext } from "react-router-dom"
import { useState } from "react"
import "../components/Battle.css"
function Battle(){
    const {players} = useOutletContext()
    const [player1,setPlayer1] = useState({})
    const [player2, setPlayer2] = useState({})
    const [damageBoost1,setDamageBoost1] = useState()
    const [damageBoost2, setDamageBoost2] = useState()
    const [player1Damage,setPlayer1Damage] = useState()
    const [player2Damage, setPlayer2Damage] = useState()
    //GENERATES RANDOM NUMBER FOR P1 AND P2
    function genRandNumber(){
        const dataLength = players.length
        const randomNum = Math.floor(Math.random() * dataLength)
        return randomNum
    }
    //GENERATES RANDOM BOOST DAMAGE
    function generateBoost(playerObj){
        const playerData = players.find((player)=>player.id === playerObj )
        
        const playerBoost = Math.floor(Math.random()* playerData.boost+1)
        
        return playerBoost
    }

    //SETS TOTAL DAMAGE FOR P1 AND P2
    function handleTotalDamage(p1Attack,p1Boost,p2Attack,p2Boost){
        const p1Dmg = p1Attack.attack+p1Boost
        const p2Dmg = p2Attack.attack+p2Boost
        
        setPlayer1Damage(p1Dmg)
        setPlayer2Damage(p2Dmg)
        
    }
    //HANDLES FUNCTIONALITY FOR THE BATTLE BUTTON
    function handleBattle(){
        //holds id value for players
        let randNum1 = genRandNumber()
        let randNum2 = genRandNumber()
        //While loop makes sure that random numbers 1 and 2 are different
        while(randNum1 === randNum2){
            randNum2 = genRandNumber()
        }
        //damage boosts for player 1 and 2
        const player1Boost = generateBoost(randNum1)
        const player2Boost = generateBoost(randNum2)

        //set player boosts
        setDamageBoost1(player1Boost)
        setDamageBoost2(player2Boost)
        //CONST VARS CONTAIN P1 AND P2 OBJECTS
        const p1Object = (players.find(player => player.id === randNum1))
        const p2Object = (players.find(player => player.id === randNum2))
        //SETS P1 AND P2 OBJECTS
        setPlayer1(p1Object)
        setPlayer2(p2Object)
        
        handleTotalDamage(p1Object,player1Boost,p2Object,player2Boost)


        //console.log(player1Boost)
        //console.log(players[randNum1].boost +" :"+player1Boost)
    }
    
    //GETS STRING OF DAMAGE TO OUTPUT
    function getDamageString(player,boost){
        const damage = player.attack
        
        return `Damage: ${damage}(+${boost})=${damage+boost}`
    }
    //FUNCTION OUTPUTS THE RESULTS OF BATTLE
    function handleResults(){
        if(Object.keys(player1).length ===0)return ""
        if(player1Damage>player2Damage){
            return `${player1.name} Wins ${player1Damage}>${player2Damage}`
        }
        else if(player2Damage>player1Damage){
            return `${player2.name} Wins ${player2Damage}>${player1Damage}`
        }
        else if(player1Damage === player2Damage){
            
            return "TIED!"
        }
    }
    
    return(
        <div className="battle-container">
            <div className="box-container">
                <div className="box left-box">
                    {<>
                        <h1>Name: {player1.name}</h1>
                        <h1>Attack: {player1.attack}</h1>
                        <h1>Boost: {damageBoost1}</h1>
                        <h1>Age: {player1.age}</h1>
                        <h1>{Object.keys(player1).length !== 0 ? getDamageString(player1, damageBoost1) : ""}</h1>
                    </>}
                </div>
                <div className="vs-tag">VS</div>
                <div className="box right-box">
                    {
                        <>
                            <h1>Name: {player2.name}</h1>
                            <h1>Attack: {player2.attack}</h1>
                            <h1>Boost: {damageBoost2}</h1>
                            <h1>Age: {player2.age}</h1>
                            <h1>{Object.keys(player2).length!==0?getDamageString(player2, damageBoost2):""}</h1>
                        </>
                       
                    }

                </div>
            </div>
            <button onClick={handleBattle}>BATTLE!</button>
            <h1>{handleResults()}</h1>
        </div>
    )
}
export default Battle