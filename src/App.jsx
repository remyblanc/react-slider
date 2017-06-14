import React from 'react';
import ReactDom from 'react-dom';

import './styles.scss';

import SliderMap from "./components/SliderMap";
import Slider from "./components/Slider";

import slides from "./entry-data/slides";

class App extends React.Component {
  constructor(props) {
    super(props);
	
	this.state = {
	  activeSlide: 0
	};

	this.handleChangeSlide = this.handleChangeSlide.bind(this);
  }

  handleChangeSlide(position) {
  	let activeSlide = this.state.activeSlide;
  	
  	typeof position == "string" ?
  	  position == "next" ?
  	    activeSlide < 4 ? activeSlide++ : activeSlide = 0
  	  :
  	    activeSlide != 0 ? activeSlide-- : activeSlide = 4
   	:
   	  activeSlide = position-1;
   	  
   	this.setState({activeSlide});
  }

  render()
  {
    return (
      <main>
        <SliderMap activeSlide={this.state.activeSlide} changeSlide={this.handleChangeSlide} slides={slides} />
        <Slider activeSlide={this.state.activeSlide} changeSlide={this.handleChangeSlide} slides={slides} />
      </main>
    )
  }
}

App.PropTypes = {
}

ReactDom.render(<App />, document.getElementById("root"));