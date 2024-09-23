import { useOutletContext } from "react-router-dom"
import { useState } from "react"
import "../components/Battle.css"
function Battle(){
    const {players} = useOutletContext()
    const [player1,setPlayer1] = useState({})
    const [player2, setPlayer2] = useState({})
    const [damageBoost1,setDamageBoost1] = useState()
    const [damageBoost2, setDamageBoost2] = useState()
    console.log(players)

    function genRandNumber(){
        const dataLength = players.length
        const randomNum = Math.floor(Math.random() * dataLength)
        return randomNum
    }

    function generateBoost(playerObj){
        const playerData = players.find((player)=>player.id === playerObj )
        
        const playerBoost = Math.floor(Math.random()* playerData.boost+1)
        
        return playerBoost
    }

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

        setPlayer1(players.find(player=>player.id===randNum1))
        setPlayer2(players.find(player => player.id === randNum2))




        //console.log(player1Boost)
        //console.log(players[randNum1].boost +" :"+player1Boost)
    }

    function getDamageString(player,boost){
        const damage = player.attack
        
        return `Damage: ${damage}(+${boost})=${damage+boost}`
    }
    console.log(player1)
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
        </div>
    )
}
export default Battle