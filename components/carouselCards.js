
import Card1 from '../images/The_Vagabond.jpg';
import Card2 from '../images/The_Gate_of_Angels.jpg';
import Card3 from '../images/The_Jane_Austen_Project.jpg';
import Card4 from '../images/The_Iliad.jpg';
import Card5 from '../images/East_of_Eden.jpg';
import Carousel from 'react-bootstrap/Carousel';
// import ModalCards from './modalCards';
// import Button from 'react-bootstrap/Button';
import '../css/style.css';

const CarouselSlides = () => {
     
    return ( 

    <div class="container my-4 carouselDiv bg-success">
        <div class="row bg-danger d-flex flex-row carouselDiv" >
            <div class="col-md-4 carouselContainer">
                
                    <Carousel fade>
                        <Carousel.Item>
                            <img src={Card1} alt="card1" class="d-block w-100"  ></img>
                            <Carousel.Caption>
                                <h3><button type='button' class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#topFiveModal">Open Modal</button></h3>                              
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Card2} alt="card1" class="d-block w-100"  ></img>
                            <Carousel.Caption>
                                <h3 class="primary">First Carousel in React.JS</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Card3} alt="card1" class="d-block w-100"  ></img>
                            <Carousel.Caption>
                                <h3>First Carousel in React.JS</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Card4} alt="card1" class="d-block w-100"  ></img>
                            <Carousel.Caption>
                                <h3>First Carousel in React.JS</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Card5} alt="card1" class="d-block w-100"  ></img>
                            <Carousel.Caption>
                                <h3>First Carousel in React.JS</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
            </div>
            <div class="col-md-8 bg-warning" className="carouselDescriptionContainer">
                <h3 class="text-center">
                    About this series
                </h3>
                <br />
                <p class="aboutDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolore quis obcaecati labore accusamus voluptate blanditiis dolorem ipsum assumenda corporis! Ullam in obcaecati tenetur cupiditate quisquam nostrum suscipit ipsum nam?
                </p>
            </div>
        </div>
        {/* Modal Dialog */}
        <div class="modal fade modal-md" id="topFiveModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>Top Five Books of the Year</h3>
                        <button class="btn btn-close" type="button" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body imgBackdrop">
                    
                        {/* <!-- Flex Box inside the Modal --> */}
                        <div class="d-flex flex-row flex-wrap">
                            <div class=" d-flex" style={{width:"100%"}}>
                                {/* <!-- Card inside the Flex box --> */}
                                <div class="card" style={{width:"auto", overflow: "scroll"}}>
                                    <img src={Card1} class="card-img-top" alt="Missing Image" style={{height:"250px"}}></img>
                                    <div class="card-header text-center bg-warning"> <span style={{color:"red", fontweight: "bolder"}}>The Vagabond</span></div>
                                    <div class="card-body"> 
                                        <h3 class="Card"><i>Synopsis</i> </h3>
                                        <p class="card-text">
                                            Thirty-three years-old and recently divorced, Renée Néré has begun a new life on her own, supporting herself as a music-hall artist. Maxime, a rich and idle bachelor, intrudes on her independent existence and offers his love and the comforts of marriage. A provincial tour puts distance between them and enables Renée, in a moving series of letters and meditations, to resolve alone the struggle between her need to be loved, and her need to have a life and work of her own.
                                        </p>
                                        <button class="btn btn-primary"> Add to Cart</button>
                                        <a class="btn btn-primary" href="https://us.macmillan.com/books/9780374528041/thevagabond">Read More...</a>
                                    </div>
                                    <div class="footer">This is card Footer</div>
                        
                                </div>
                            </div>
                            <br></br>
                            <div class=" d-flex" style={{width:"100%"}}>
                                {/* <!-- Card inside the flex box --> */}
                                <div class="card" style={{width:"auto", overflow: "scroll"}}>
                                    {/* <!--inserted overflow property--> */}
                                    <img src={Card2} class="card-img-top" alt="Missing Image" style={{height:"250px"}}></img>
                                    <div class="card-header text-center bg-warning"> <span style={{color:"red", fontweight: "bolder"}}>The Gate of Angels</span></div>
                                    <div class="card-body"> 
                                        <h3 class="card-title"><i>Synopsis</i> </h3>
                                    {/* <!--   <h5 class="card-subtitle text-secondary"><i>Card Sub-Title</i></h5> --> */}
                                        <p class="card-text">
                                            In 1912, rational Fred Fairly, one of Cambridge's best and brightest, crashes his bike and wakes up in bed with a stranger - fellow casualty Daisy Saunders, a charming, pretty, generous working-class nurse. So begins a series of complications - not only of the heart but also of the head - as Fred and Daisy take up each other's education and turn each other's philosophies upside down. 
                                        </p>
                                        <button class="btn btn-primary"> Add to Cart</button>
                                        <a class="btn btn-primary" href="https://www.facebook.com/">Go to Facebook</a>
                                    </div>
                                    <div class="footer">This is card Footer</div>
                        
                                </div>
                            </div>
                            <br></br>
                            <div class=" d-flex" style={{width:"100%"}}>
                                <div class="card" style={{width:"auto", overflow: "scroll"}}>
                                    <img src={Card3} class="card-img-top" alt="Missing Image" style={{height:"250px"}}></img>
                                    <div class="card-header text-center bg-warning"> <span style={{color:"red", fontweight: "bolder"}}>The Jane Austen Project</span></div>
                                    <div class="card-body"> 
                                        <h3 class="card-title"><i>Synopsis</i> </h3>
                                        <p class="card-text">
                                            London England, 1815: Two travelers—Rachel Katzman and Liam Finucane—arrive in a field, disheveled and weighed down with hidden money. They are not what they seem, but colleagues from a technologically advanced future, posing as a doctor and his spinster sister. While Rachel and Liam aren’t the first team of time travelers, their mission is the most audacious yet: meet, befriend, and steal from Jane Austen.

                                            Carefully selected and rigorously trained by The Royal Institute for Special Topics in Physics, disaster-relief doctor Rachel and actor-turned-scholar Liam have little in common excerpt their extraordinary circumstances. Circumstances that call for Rachel to stifle her independent nature and let Liam take the lead as they infiltrate Austen’s circle via her favorite brother, Henry
                                        </p>
                                        <a class="btn btn-primary" href="https://us.macmillan.com/books/9780374528041/thevagabond">Read More...</a>
                                    </div>
                                    <div class="footer">This is card Footer</div>
                        
                                </div>
                            </div>
                            <div class=" d-flex" style={{width:"100%"}}>

                                <div class="card" style={{width:"auto", overflow: "scroll"}}> 
                                
                                    <img src={Card4} class="card-img-top" alt="Missing Image" style={{height:"250px"}}></img>
                                    <div class="card-header text-center bg-warning"> <span style={{color:"red", fontweight: "bolder"}}>The Iliad</span></div>
                                    <div class="card-body"> 
                                        <h3 class="card-title"><i>Synopsis</i> </h3>
                                        <p class="card-text">
                                            The Iliad is one of the greatest works of literature ever written. It has inspired readers and listeners for millennia. The story tells of the Trojan War, fought between the Trojans, led by King Priam, and the Greeks, led by King Agamemnon. At its center is Achilles, the greatest warrior-champion of the Greeks, and his refusal to fight after being humiliated by his leader Agamemnon. But when the Trojan Hector kills Achilles' close friend Patroclus, he storms back into battle to take revenge—even though he knows this will ensure his own untimely death. This retelling has been shortened and illustrated for younger readers.
                                        </p>
                                        <button class="btn btn-primary"> Add to Cart</button>
                                        <a class="btn btn-primary" href="https://www.facebook.com/">Go to Facebook</a>
                                    </div>
                                    <div class="footer">This is card Footer</div>
                        
                                </div>
                            </div>
                            <div class=" d-flex" style={{width:"100%"}}>
                                <div class="card" style={{width:"auto", overflow: "scroll"}}>
                                    <img src={Card5} class="card-img-top" alt="Missing Image" style={{height:"250px"}}></img>
                                    <div class="card-header text-center bg-warning"> <span style={{color:"red", fontweight: "bolder"}}>East of Eden</span></div>
                                    <div class="card-body"> 
                                        <h3 class="card-title"><i>Synopsis</i> </h3>
                                        <p class="card-text">
                                            Adam Trask came to California from the East to farm and raise his family on the new rich land. But the birth of his twins, Cal and Aaron, brings his wife to the brink of madness, and Adam is left alone to raise his boys to manhood. One boy thrives nurtured by the love of all those around him; the other grows up in loneliness enveloped by a mysterious darkness.
                                        </p>
                                        <button class="btn btn-primary"> Add to Cart</button>
                                        <a class="btn btn-primary" href="https://www.facebook.com/">Go to Facebook</a>
                                    </div>
                                    <div class="footer">This is card Footer</div>
                                </div>
                            </div>
                        </div>
                        {/* <!--  End of Card --> */}
                    <div class="modal-footer">
                        <button class="btn btn-primary"> Sign Up Now</button>
                        <button class="btn btn-secondary" data-bs-dismiss="modal"> close</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    <br></br>

    </div>

     );
}
 
export default CarouselSlides;