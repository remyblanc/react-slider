import React from 'react';

function Slide(props) {
  return (
    <div className="slide-wrap">
      <div className="slide">
        <div className="slide-image">
          <img alt="" src={props.slideImage} onDrag={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}/ >
        </div>
        <div className="slide-content">
          <span className={props.pointBg}>{props.slideTitle}</span>
          <p dangerouslySetInnerHTML={{__html: props.slideText}}></p>
        </div>
      </div>
    </div>
  );
}

Slide.PropTypes = {
	slideImage: React.PropTypes.string.isRequired,
	slideTitle: React.PropTypes.string.isRequired,
	slideText: React.PropTypes.string.isRequired,
	pointBg: React.PropTypes.string.isRequired
}

export default Slide;