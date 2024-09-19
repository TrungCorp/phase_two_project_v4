
function ActiveContainer({ players, handlePlayerInfo }){
    const playerList = players.map((player) => {
        return <h1 key={player.id} onClick={handlePlayerInfo} >{player.name} </h1>
    })
  
    return(
        <div>
            PLAYER LIST:
            {playerList}
        </div>
    )
}
export default ActiveContainer