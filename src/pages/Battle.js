import { useOutletContext } from "react-router-dom"

function Battle(){
    const {players} = useOutletContext()
    console.log(players)

    function handleBattle(){
        console.log("BATTLE.JS TEST")
    }
    return(
        <div>
            BATTLE PAGE
        </div>
    )
}
export default Battle