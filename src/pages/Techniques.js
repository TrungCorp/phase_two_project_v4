import NavBar from "../components/NavBar";
import {useState, useEffect} from 'react'
import TechniqueCard from "../components/TechniqueCard";
function Techniques (){
    const [techniques, setTechniques] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/techniques")
        .then(resp => resp.json())
        .then(data=>setTechniques(data))

    },[])
    console.log(techniques)
    const techniqueList = techniques.map(technique =>{
        return <TechniqueCard key={technique} technique={technique}/>
    })
    return (
        <div>
            <header><NavBar/></header>
            TECHNIQUES PAGE
            {techniqueList}
        </div>
    )
}

export default Techniques;