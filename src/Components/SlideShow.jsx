import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import img1 from "../img/paper.png";
const slideImages = [
  "../img/paper.png",
  "../img/stone.png",
  "../img/scissors.png"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};
class SlideShow extends Component {
  state = {};
  render() {
    return (
      <div>
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{ backgroundImage: { img1 } }}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    );
  }
}

export default SlideShow;
// const Slideshow = () => {

//     )
// }
