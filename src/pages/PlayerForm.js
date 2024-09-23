import { useState } from "react";
import { Form } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import "../components/Form.css"

function PlayerForm(){
    const [name,setName] = useState("")
    const [attack,setAttack] = useState()
    const [age,setAge] = useState()
    const [damageBoost,setDamageBoost] = useState()
    const {handleNewPlayer} =useOutletContext()

    function handleName(event){
        
        setName(event.target.value)
    }
    function handleAttack(event) {
        
        setAttack(event.target.value)
    }

    function handleAge(event){
        
        setAge(event.target.value)
    }
    function handleDamage(event){
        
        setDamageBoost(event.target.value)
    }
    function handleSubmit(event){
        event.preventDefault()
        fetch("http://localhost:3001/players",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": name,
                "attack": parseInt(attack,10),
                "age": parseInt(age,10),
                "boost": parseInt(damageBoost,10)
            })
        })
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data)
            handleNewPlayer(data)
        })  
    }

    return(
        <div>
            ENTER DATA FOR NEW PLAYER
            <Form className="form-container" onSubmit={handleSubmit}>
                <label>Name:
                    <input type="text" value={name} onChange={handleName} />   
                </label>
                <label>Attack Power:
                    <input type="text" value={attack} onChange={handleAttack} />
                </label>
                <label>Age:
                    <input type="text" value={age} onChange={handleAge} />
                </label>
                <label>Max Damage Boost:
                    <input type="text" value={damageBoost} onChange={handleDamage} />
                </label>
                <button type="submit">ADD NEW PLAYER</button>
            </Form>
        </div>
    )
}
export default PlayerForm