import Footer from '../Footer';
//import HeroSection from '../HeroSection';
import '../HeroSection.css'
import LearnButtonBody from './LearnButtonBody';
import Navbar from '../Navbar';

function LearnButton()
{
    return(
        <>
       <Navbar/>
     <LearnButtonBody/>
        <Footer/>
        </>
    )
}
export default LearnButton;