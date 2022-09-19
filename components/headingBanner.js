import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// import { faAnimation } from '@fortawesome/free-solid-svg-icons';
import Banner from '../images/NothingPermanent.png';
import Banner1 from '../images/ExceptChange.png';
import '../css/style.css';

const HeadingBanner = () => {
    let divStyle = {
        height: "auto",
        background: "linear-gradient(to bottom, #E1E1E1, #E19004,#02025F)",
    };
    
    const sun = <FontAwesomeIcon icon={faSun} spin size='xl' />
    const moon = <FontAwesomeIcon icon={faMoon} spin size='xl'/>
    const earth = <FontAwesomeIcon icon={faEarth} spin size='xl'/>
    const star = <FontAwesomeIcon icon={faStar} spin size='xl'/>
    const plane = <FontAwesomeIcon icon={faPlane} spin size='xl'/>
    // const spin = <FontAwesomeIcon style={faSpinner} spin />

    // ReactDOM.render(plane, document.body);
    return ( 
        <div class="mb-2 container-fluid d-flex flex-wrap"  style ={divStyle}> {/* local style */}
             <div class="container-fluid flex-wrap pt-1 px-1 mx-2" >
                <div class="row flex-wrap">
                    <div class="col-sm-3 w-10 pb-2 m-auto d-flex justify-content-evenly" style={{fontsize:"36pt"}} >
                        <i class= "text-danger">{sun}</i>
                        <i class="text-warning">{moon}</i>
                        <i class="text-info">{earth}</i>
                        <i class="text-light">{star}</i>
                        <i class="text-secondary">{plane}</i>
                    </div>
                    
                    <div class="col-sm-9 w-90" style ={{height: "80px"}} >
                        <div class="">
                            <img src={Banner} alt="" style={{height:"35px", width:"65%",}}></img> {/* inline style */}
                        </div>
                        <div className="headingBanner2">
                            <img src={Banner1}  alt="" className="" style={{height:"35px", width:"65%"}}></img> {/* inline style */}
                        </div>
                    </div>    
                </div>    
            </div>            
        </div>
     );
}
 
export default HeadingBanner;