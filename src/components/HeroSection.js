import React from 'react'
import {Button} from './Button'
import './HeroSection.css'
import '../App.css'
function HeroSection()
{
  return(
<div className='hero-container'>
<video src='videos/video-1.mp4' />
<h1>React.js</h1>
<p>what are you waiting for?</p>

<div className='hero-btns'>
<Button className='btn' buttonSize='btn--medium' buttonStyle='btn--primary' onClick='/LearnButton'>Lets start</Button>
<Button className='btn' buttonSize='btn--medium' buttonStyle='btn--primary' onClick='/MoreButton'>Learn more</Button>
</div>
</div>
  );
}
export default HeroSection;