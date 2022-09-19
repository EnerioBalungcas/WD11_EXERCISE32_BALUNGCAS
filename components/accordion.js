

const Accordion = () => {
    return ( 

<div class="container">
        <div class="accordion">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed " data-bs-toggle="collapse" data-bs-target="#item-2">
                        <i class="fa-solid fa-magnifying-glass-arrow-right"></i> Who is the Author of the book series about Leonardo the vinci? </button>
                </h2>
                <div id="item-2" class=" accordion-collapse collapse ">
                    <div class="accordion-body">
                    It's Leonardo Da Vinci himself. The book was re-written and reproduced several times by modern-day authors.
                    </div> 
                </div>
            </div>
        </div>
        <br></br>
        <div class="accordion">
            <div class="accordion-item"style={{caretcolor: "rgb(1, 1, 107)"}}>
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" data-bs-toggle="collapse" href="#item-3" role="button"
             aria-expanded="false" aria-controls="#item-3">
                        <i class="fa-solid fa-universal-access"></i> Who are the Great Philosophers? </button>
                </h2>
                <div id="item-3" class=" accordion-collapse collapse ">
                    <div class="accordion-body ">
                    Plato, Aristotle, Socrates, Immanuel kant, Friedrich Nietzsche, Rene Descartes, Confucius, David Hume, John Locke, and many more..
                    </div> 
                </div>

                <br></br>
       
            </div>
        </div>
        <div class="container-fluid text-light" id="footer mb-5">
            <div>
                <p>
                <p style={{textalign: "justify", marginbottom: "0"}}>
                    Privacy Policy
                </p>
                    <p style={{textalign:  "center", color: "white", wordspacing: "30px"}}>
                    <a href="https://www.facebook.com/enerio.balungcas/"><i class="fa-brands fa-facebook-f text-white"></i></a>
                    <a href="https://www.linkedin.com/in/enerio-morales-balungcas-213b3770/">
                        <i class="fa-brands fa-linkedin-in text-white fa"></i></a>
                </p>
                </p>
            </div>
        </div>
    </div>
     );
}
 
export default Accordion;
