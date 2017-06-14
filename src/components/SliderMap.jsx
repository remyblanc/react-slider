import React from 'react';

import SliderMapPoint from "./subComponents/SliderMapPoint";

function SliderMap(props) {
  return (
    <div id="Slider-map">
      <div id="slider-map-bg"></div>
      <div className="flex-container">
        {
      	  props.slides.map(slide => 
      	    <SliderMapPoint 
              changeSlide={props.changeSlide}
              activeSlide={props.activeSlide} 
              key={slide.id} 
              id={slide.id} 
              pointBg={slide.pointBg}
            />
      	  )
      	}
      </div>
    </div>
  );
}

SliderMap.PropTypes = {
	slides: React.PropTypes.array.isRequired,
  activeSlide: React.PropTypes.string.isRequired,
  changeSlide: React.PropTypes.func.isRequired
}

export default SliderMap;