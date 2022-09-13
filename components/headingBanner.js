
import Banner from '../images/NothingPermanent.png';
import Banner1 from '../images/ExceptChange.png';
import '../css/style.css';

const HeadingBanner = () => {
    let divStyle = {
        height: "80px",
        background: "linear-gradient(to bottom, #E1E1E1, #E19004,#02025F)",
        
    };

    return ( 
        <div className=''  style ={divStyle}>
            <div class="">
                <img src={Banner} alt="" style={{height:"40px", width:"65%",}}></img>
            </div>
            <div className="headingBanner2">
                <img src={Banner1}  alt="" className="" style={{height:"40px", width:"65%"}}></img>
            </div>
        </div>
     );
}
 
export default HeadingBanner;
