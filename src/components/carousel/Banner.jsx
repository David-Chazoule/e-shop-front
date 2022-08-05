import { Carousel } from "react-bootstrap";

import sliderOne from "../../img/caroussel/sliderOne.jpeg";
import sliderTwo from "../../img/caroussel/slidertwo.png";
import sliderThree from "../../img/caroussel/sliderThree.jpg";

// import '../../CSS/caroussel/caroussel.css'

function Banner() {
  return (
    <div className="banner">
      <Carousel
        pause={false}
        interval={2000}
        controls={false}
        indicators={false}
      >
        <Carousel.Item>
          <img className="d-block  vh-60" src={sliderOne} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block  vh-60" src={sliderTwo} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block  vh-60" src={sliderThree} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
