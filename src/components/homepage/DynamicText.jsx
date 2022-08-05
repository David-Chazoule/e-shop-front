import React from 'react'
import { useEffect } from 'react'
import '../../CSS/homepage/DynamicText.css'







function DynamicText() {
  useEffect(() => {
    const target = document.getElementById("text-target");
    let array = ["Mobile", "Ordinateur", " Casque -VR", "jeux-Videos" ,"Ecran-PC"];
    let wordIndex = 0;
    let letterIndex = 0;

    const createLetter = () => {
      const letter = document.createElement("span");
      target.appendChild(letter);

      letter.classList.add("letter");
      letter.style.opacity = "0";
      letter.style.animation = "anim 8s ease forwards";
      letter.textContent = array[wordIndex][letterIndex];

      setTimeout(() => {
        letter.remove();
      }, 3000);
    };

    const loop = () => {
      setTimeout(() => {
        if (wordIndex >= array.length) {
          wordIndex = 0;
          letterIndex = 0;
          loop();
        } else if (letterIndex < array[wordIndex].length) {
          createLetter();
          letterIndex++;
          loop();
        } else {
          letterIndex = 0;
          wordIndex++;
          setTimeout(loop, 2000);
        }
      }, 80);
    };
    loop();
  }, []);

  return (
    <span className='dynamic-text'>
      
      <span id='text-target'></span>

    </span>
  )
}

export default DynamicText