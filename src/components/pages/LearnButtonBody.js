import React from 'react'
import '../HeroSection.css'
import {Link} from 'react-router-dom'
function LearnButtonBody()
{
  return(
<div className='hero-container'>
<video src='videos/video-1.mp4' />
<h1>Learn Something here</h1>
<div className='contentmore'>
<p>React.js is a javascript Library used to design FrontEnd or UI of Website...
  <Link to='www.ebook.com'>Click here</Link></p>
</div>

</div>
  );
}
export default LearnButtonBody;