//import { useState } from "react"
function ReserveContainer({ displayInfo }){
    console.log(displayInfo)
    return(
        <div>
            
            {
                <>
                    <h1>Name: {displayInfo.name}</h1>
                    <h1>Attack:{displayInfo.attack}</h1>
                    <h1>Age: {displayInfo.age}</h1>
                    <h1>Max Damage Boost:{displayInfo[`${"damage-boost"}`]}</h1>
                </>
            }
        </div>
    )
}
export default ReserveContainer