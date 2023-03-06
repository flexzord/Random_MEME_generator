import "./Navbar.css"
import logo from "../Images/trollface.png"

export default function Navbar(){
    return(
        <div className="nav">
            <img src={logo}></img>
            <h1>Meme Generator</h1>
        </div>
    )
}