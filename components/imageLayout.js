import '../css/style.css';
import Banner from '../images/LeonardoDaVinci.jpg';
import Banner1 from '../images/Lord_of_the_rings.jpg';
import Banner2 from '../images/TheColony.jpg';
import Banner3 from '../images/TheRecordKeeper.jpg';
import Banner4 from '../images/ThingWeDoInTheDark.jpg';
import Banner5 from '../images/Without_a_Trace.jpg';
import Banner6 from '../images/The_Codex.jpg';
import Banner7 from '../images/Books_of_Blood.jfif';
const ImageLayout = () => {
    return ( 
        <div className="imageContainer">
            <img src={Banner} alt="" className='imageSize'></img>
            <img src={Banner1} alt="" className='imageSize'></img>
            <img src={Banner2} alt="" className='imageSize'></img>
            <img src={Banner3} alt="" className='imageSize'></img>
            <img src={Banner4} alt="" className='imageSize'></img>
            <img src={Banner5} alt="" className='imageSize'></img>
            <img src={Banner6} alt="" className='imageSize'></img>
            <img src={Banner7} alt="" className='imageSize'></img>

        </div>
     );
}
 
export default ImageLayout;