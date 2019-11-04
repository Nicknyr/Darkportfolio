import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

const Slider = () => {
  return(
    <AwesomeSlider cssModule={AwesomeSliderStyles}>
      <div data-src="/path/to/image-0.png" />
      <div data-src="/path/to/image-1.png" />
      <div data-src="/path/to/image-2.jpg" />
    </AwesomeSlider>
  );
}

export default Slider;
