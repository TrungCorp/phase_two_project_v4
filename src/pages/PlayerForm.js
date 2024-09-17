import { useState } from "react";
import { Form } from "react-router-dom";
import "../components/Form.css"

function PlayerForm(){
    const [name,setName] = useState("")
    const [attack,setAttack] = useState("")
    

    function handleName(event){
        
        setName(event.target.value)
    }
    function handleAttack(event) {
        
        setAttack(event.target.value)
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
                "attack": attack
            })
        })
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data)
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
                <button type="submit">ADD NEW PLAYER</button>
            </Form>
        </div>
    )
}
export default PlayerForm