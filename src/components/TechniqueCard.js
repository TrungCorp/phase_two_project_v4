import {Link} from 'react-router-dom'

function TechniqueCard({technique}){
    console.log(technique)
    return(
        <article >
            <h2 >{technique}</h2>
        </article>
    )
}

export default TechniqueCard;