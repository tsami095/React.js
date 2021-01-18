import React from 'react'
import { Link } from 'react-router-dom'
import '../HeroSection.css'
function MoreButtonBody()
{
  return(
<div className='hero-container'>
<video src='videos/video-1.mp4' />
<h1>Tutorials</h1>
<div className='contentmore'>
<p>Video Tutorials is Available .....
<Link  to='www.youtube.com/react.js'>Click here</Link></p>
</div>
</div>
  );
}
export default MoreButtonBody;