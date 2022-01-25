
import '../../CSS/filter/choicebox.css';


import computer   from "../../img/computer.png"
import game  from "../../img/game.png"
import mobile  from "../../img/mobile.png"
import tv  from "../../img/tv.png"
import vr  from "../../img/vr.png"
import audio from "../../img/audio.png"

const data = [
    {
        name: "All",
        image: computer,
        type: "all"
},
    {
        name: "Informatique",
        image: computer,
        type: "ordinateur"
},
    {
        name: "Mobile",
        image: mobile,
        type:"smartphone"
},
    {
        name: "Jeux video",
        image: game,
        type: "jeu"
},
    {
        name: "Casque audio",
        image: audio,
        type: "casque audio"
},
    {
        name: "ecran tv",
        image: tv,
        type:"ecran"
},
    {
        name: "casque VR",
        image: vr,
        type:"casque VR"
},
]


function Choicebox (props) {


    
    return(
        <div className="choicebox">
        {data && data.map(elem => 
             <div className='choice-title-img' key={elem.name} onClick={() => props.setType(elem.type)}>
             <img className='img-choice' src={elem.image} alt={elem.name} />
             <p className='choice-title'>{elem.name}</p>
             </div>
        )}
        </div>
    )
}

export default Choicebox;