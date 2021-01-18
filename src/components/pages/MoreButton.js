import Footer from '../Footer';
//import HeroSection from '../HeroSection';
import '../HeroSection.css'
import MoreButtonBody from './MoreButtonBody';
import Navbar from '../Navbar';

function MoreButton()
{
    return(
        <>
       <Navbar/>
      <MoreButtonBody/>
        <Footer/>
        </>
    )
}
export default MoreButton;