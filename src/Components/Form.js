import React from "react"
import "./Form.css"

export default function Form(){

    const [memes, setMemes] = React.useState([]);
    
    React.useEffect(()=>{
        const fetchMemes = async ()=>{
            const response = await fetch('https://api.imgflip.com/get_memes')
            const data = await response.json()
            setMemes(data.data.memes)
        }
        fetchMemes()
    },[])

    const [randomMeme, setRandomMeme] = React.useState({
        topText: "",
        bottomText:"",
        randomImg: ""
    })

    function handleClick(){
        const randomIndex = Math.floor(Math.random()*memes.length)
        setRandomMeme(prevState=>( {...prevState, randomImg: memes[randomIndex].url}))
    }

    const[formData, setFormData] = React.useState({
        topText:"",
        bottomText:""
    });
    function handleChange(event){
        const {name, value} = event.target
        setFormData(prevFormData=>{
            return {
                ...prevFormData, 
                [name]: value
            }
        })
    }
    
    return(
        <div className="main"> 
        <input 
            className="text-input" 
            name = "topText" type="text" 
            placeholder="top text" 
            onChange={handleChange}>
        </input>  
        <input 
            className="text-input" 
            name = "bottomText" 
            type="text" 
            placeholder="bottom text" 
            onChange={handleChange}>
        </input>
        <button onClick={handleClick} className="button">generate randome meme</button>
        <div className="meme">
            <img className="meme" src={randomMeme.randomImg} />
            <h2 className="meme-top-text">{formData.topText}</h2>
            <h2 className="meme-bottom-text">{formData.bottomText}</h2>
        </div>

       
        </div>
        
    )
}