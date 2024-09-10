import NavBar from "../components/NavBar";
import {useEffect,useState} from "react";
import uchiha from "../images/uchiha1.png"
function Home(){
    const [users,setUsers] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/techniqueUsers")
        .then(resp=> resp.json())
        .then(data =>setUsers(data))
  },[])

  const userList = users.map((user)=> {
    return <article key={user.name}>
        <h2>{user.name}</h2>
        <img src={uchiha}></img>
        <h2>Techiques:
            <ul>
                {user.techniques.map(technique =>
                    
                     <li>{technique}
                         
                     </li>
                     
                    )}

            </ul>
        </h2>
    </article>
  })
    return(
        <div>
            <header>
                <NavBar/>
            </header>
            HOME PAGE

            {userList}
        </div>
    )
}

export default Home;