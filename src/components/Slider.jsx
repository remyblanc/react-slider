import React from 'react';

import Slide from "./subComponents/Slide";

class Slider extends React.Component
{
  constructor(props) {
    super(props);
    this.handleActiveSlide = this.handleActiveSlide.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.handleActiveSlide(nextProps);
  }

  handleActiveSlide(nextProps)
  {
    let moveLeft = nextProps.activeSlide*720;
    document.getElementById("slide-list").style.transform = `translateX(-${moveLeft}px)`;
  }

  handleDrag(obj,props)
  {
    let startX = obj.pageX || obj.originalEvent.touches[0].pageX,
        currentPos = document.getElementById("slide-list").style.transform,
        x = 0;
    
    if (currentPos)
    {
      currentPos = parseInt(currentPos.replace(/[^-0-9]/g,''));
    }
    else
    {
      currentPos = 0;
    }

    window.onmousemove = function(e)
    {
      x = e.pageX || e.originalEvent.touches[0].pageX;

      document.getElementById("slide-list").style.transition = "0s";
      document.getElementById("slide-list").style.transform = `translateX(${currentPos-(startX-x)}px)`;

      window.onmouseup = function(e)
      {
        window.onmousemove = null;
        document.getElementById("slide-list").style.transition = "0.5s";

        if (startX-20 > x)
        {
          props.changeSlide("next")
          window.onmouseup = null;
        } else if (startX < x-20)
        {
          props.changeSlide("prev")
          window.onmouseup = null;
        }
        else
        {
          props.changeSlide(props.activeSlide+1)
          window.onmouseup = null;
        }
      }
    }

    window.onmouseup = function(e)
    {
      window.onmousemove = null;
    }
    
  }
  render()
  {
    return (
    <div id="slider-wrap">
      <div id="prev-slide" 
        className={this.props.slides[this.props.activeSlide].pointBg}
        onClick={() => this.props.changeSlide("prev")}
      >
        <div className="arrow-top-line"></div>
        <div className="arrow-bottom-line"></div>
      </div>
      <div id="next-slide" 
        className={this.props.slides[this.props.activeSlide].pointBg}
        onClick={() => this.props.changeSlide("next")}
      >
        <div className="arrow-top-line"></div>
        <div className="arrow-bottom-line"></div>
      </div>
      <div id="slider">
        <div id="slide-list" onMouseDown={(e) => this.handleDrag(e, this.props)}>
          {
            this.props.slides.map(slide => 
              <Slide 
                key={slide.id} 
                slideImage={slide.slideImage} 
                slideTitle={slide.slideTitle} 
                slideText={slide.slideText}
                pointBg={slide.pointBg}
              />
            )
          }
        </div>
      </div>
    </div>
    );
  }
}

Slider.PropTypes = {
	slides: React.PropTypes.array.isRequired,
  activeSlide: React.PropTypes.string.isRequired,
  changeSlide: React.PropTypes.func.isRequired
}

export default Slider;