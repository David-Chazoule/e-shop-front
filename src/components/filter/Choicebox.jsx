
import '../../CSS/filter/choicebox.css';


import computer   from "../../img/computer.png"
import game  from "../../img/game.png"
import mobile  from "../../img/mobile.png"
import tv  from "../../img/tv.png"
import vr  from "../../img/vr.png"
import audio from "../../img/audio.png"


function Choicebox () {
    return(
        <div className="choicebox">
        <div className='choice-title-img'>
         <img className='img-choice' src={computer} alt="informatique" />
         <p className='choice-title'>Informatique</p>
         </div>
         
         <div className='choice-title-img'>
         <img className='img-choice' src={mobile} alt="téléphones" />
         <p className='choice-title'>Mobile</p>
         </div>
         <div className='choice-title-img'>
         <img className='img-choice' src={game} alt="jeux vidéo" />
         <p className='choice-title'>Jeux video</p>
         </div>
         <div className='choice-title-img'>
         <img className='img-choice' src={audio} alt="casque" />
         <p className='choice-title'>Casque audio</p>
         </div>
         <div className='choice-title-img'>
         <img className='img-choice' src={tv} alt="tv" />
         <p className='choice-title'>ecran tv</p>
         </div>
         <div className='choice-title-img'>
         <img className='img-choice' src={vr} alt="vr" />
         <p className='choice-title'> casque VR</p>
        </div>
        </div>
    )
}

export default Choicebox;