//import { useState } from "react"
function ReserveContainer({ displayInfo }){
    console.log(displayInfo)
    return(
        <div>
            RESERVECONTAINER
            {
                <>
                    <h1>Name: {displayInfo.name}</h1>
                    <h1>Attack:{displayInfo.attack}</h1>
                </>
            }
        </div>
    )
}
export default ReserveContainer