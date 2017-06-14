import React from 'react';

function SliderMapPoint(props) {

  return (
    <div 
      onClick={() => props.changeSlide(props.id)}
      className={`slider-map-point ${props.id === props.activeSlide+1 ? 'active-slide' : ''}`}
    >
      <span className={props.pointBg}>
        {props.id}
      </span>
    </div>
  );
}

SliderMapPoint.PropTypes = {
	id: React.PropTypes.string.isRequired,
	pointBg: React.PropTypes.string.isRequired,
	activeSlide: React.PropTypes.string.isRequired
}

export default SliderMapPoint;