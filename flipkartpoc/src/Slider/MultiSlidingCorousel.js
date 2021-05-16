import React from 'react'
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import '../styles/carousel.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import image6 from './images/image6.jpeg'
import image7 from './images/image7.jpeg'
import image8 from './images/image8.jpeg'
import image9 from './images/image9.jpeg'
import image10 from './images/image10.jpeg'
import image11 from './images/image11.jpg'
import image12 from './images/image12.jpeg'
import image13 from './images/image13.jpg'
import image14 from './images/image14.jpeg'
import image15 from './images/image15.jpeg'


 const PrevBtn = (props) => {
    const {className,onClick}=props;
    return(
        <div className={className} onClick={onClick}>
            <ArrowBackIosIcon style={{color:'black', fontStyle:'bold', fontSize:'30px'}} />
        </div>
    )
}

const NextBtn = (props) => {
    const {className,onClick}=props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIosIcon  style={{color:'black', fontStyle:'bold', fontSize:'30px'}} />
        </div>
    )
}

   
 
 function MultiSlidingCorousel () {

    const history = useHistory();

    const ViewAll = () => {
        
        history.push('/viewall');
    }

     return (
        
        <div className="multisliding">
            <div className="dealsofday">
                
                    <p>Deals of the day</p>
                
                <button onClick={ViewAll}>View All</button>
            </div >
            <div className="dealsofdayhr">
                <hr />
            </div>
                
                <div className="sliding">
                    <Slider 
                        prevArrow={<PrevBtn />}
                        nextArrow={<NextBtn />}
                        slidesToShow={6}
                        slidesToScroll={4}
                        
                        >
                        <div style={{textAlign:"center"}}>
                            <img src={image6} className="transformscalling" alt="" style={{width:'100%', height:'170px', objectFit:'contain'}} />
                            <div style={{fontSize:'16px', marginTop:'15px' , fontWeight:500 }}>Beauty Products</div>
                            <div style={{fontSize:'14px',  paddingBottom:'5px',  marginTop:'5px' , color:'green'}}>Upto 40% off</div>
                            <div style={{fontSize:'14px', paddingBottom:'5px',  marginTop:'5px' , color:'gray'}}>Ayurveda and more</div>
                        </div>
                    
                        <div style={{textAlign:"center"}}>
                            <img src={image7} className="transformscalling" alt="" style={{width:'100%', height:'170px', objectFit:'contain'}} />
                            <div style={{fontSize:'16px', marginTop:'15px' , fontWeight:500  }}>Electrical Products</div>
                            <div style={{fontSize:'14px',  paddingBottom:'5px',  marginTop:'5px' , color:'green'}}>Upto 30% off</div>
                            <div style={{fontSize:'14px', paddingBottom:'5px',  marginTop:'5px' , color:'gray'}}>Charger wires and more</div>
                        </div>
                        <div style={{textAlign:"center"}}>
                            <img src={image8} className="transformscalling" alt="" style={{width:'100%', height:'170px', objectFit:'contain'}} />
                            <div style={{fontSize:'16px', marginTop:'15px' , fontWeight:500 }}>Electronnic Products</div>
                            <div style={{fontSize:'14px',  paddingBottom:'5px',  marginTop:'5px' , color:'green'}}>Upto 20% off</div>
                            <div style={{fontSize:'14px', paddingBottom:'5px',  marginTop:'5px' , color:'gray'}}>Calculators and more</div>
                        </div>
                        <div style={{textAlign:"center"}}>
                            <img src={image9} className="transformscalling" alt="" style={{width:'100%', height:'170px', objectFit:'contain'}} />
                            <div style={{fontSize:'16px', marginTop:'15px' , fontWeight:500 }}>Pharma Products</div>
                            <div style={{fontSize:'14px',  paddingBottom:'5px',  marginTop:'5px' , color:'green'}}>Upto 10% off</div>
                            <div style={{fontSize:'14px', paddingBottom:'5px',  marginTop:'5px' , color:'gray'}}>Medical Products and more</div>
                        </div>
                        <div style={{textAlign:"center"}}>
                            <img src={image10} className="transformscalling" alt="" style={{width:'100%', height:'170px', objectFit:'contain'}} />
                            <div style={{fontSize:'16px', marginTop:'15px' , fontWeight:500 }}>Covid Products</div>
                            <div style={{fontSize:'14px',  paddingBottom:'5px',  marginTop:'5px' , color:'green'}}>Upto 40% off</div>
                            <div style={{fontSize:'14px', paddingBottom:'5px',  marginTop:'5px' , color:'gray'}}>Oximeters and more</div>
                        </div>
                        <div style={{textAlign:"center"}}>
                            <img src={image11} className="transformscalling" alt="" style={{width:'100%', height:'170px', objectFit:'contain'}} />
                            <div style={{fontSize:'16px', marginTop:'15px' , fontWeight:500 }}>Daily Products</div>
                            <div style={{fontSize:'14px',  paddingBottom:'5px',  marginTop:'5px' , color:'green'}}>Upto 40% off</div>
                            <div style={{fontSize:'14px', paddingBottom:'5px',  marginTop:'5px' , color:'gray'}}>Sprays and more</div>
                        </div>
                        <div style={{textAlign:"center"}}>
                            <img src={image12} className="transformscalling" alt="" style={{width:'100%', height:'170px', objectFit:'contain'}} />
                            <div style={{fontSize:'16px', marginTop:'15px' , fontWeight:500 }}>Clothes Products</div>
                            <div style={{fontSize:'14px',  paddingBottom:'5px',  marginTop:'5px' , color:'green'}}>Upto 50% off</div>
                            <div style={{fontSize:'14px', paddingBottom:'5px',  marginTop:'5px' , color:'gray'}}>Sarees and more</div>
                        </div>
                        <div style={{textAlign:"center"}}>
                            <img src={image13} className="transformscalling"  alt="" style={{width:'100%', height:'170px', objectFit:'contain'}} />
                            <div style={{fontSize:'16px', marginTop:'15px' , fontWeight:500 }}>Body weighs Products</div>
                            <div style={{fontSize:'14px',  paddingBottom:'5px',  marginTop:'5px' , color:'green'}}>Upto 30% off</div>
                            <div style={{fontSize:'14px', paddingBottom:'5px',  marginTop:'5px' , color:'gray'}}>Dumbles and more</div>
                        </div>
                        <div style={{textAlign:"center"}}>
                            <img src={image14} className="transformscalling" alt="" style={{width:'100%', height:'170px', objectFit:'contain'}} />
                            <div style={{fontSize:'16px', marginTop:'15px' , fontWeight:500 }}>Furniture Products</div>
                            <div style={{fontSize:'14px',  paddingBottom:'5px',  marginTop:'5px' , color:'green'}}>Upto 30% off</div>
                            <div style={{fontSize:'14px', paddingBottom:'5px',  marginTop:'5px' , color:'gray'}}>Tables and more</div>
                        </div>
                        <div style={{textAlign:"center"}}>
                            <img src={image15} className="transformscalling" alt="" style={{width:'100%', height:'170px',  objectFit:'contain'}} />
                            <div style={{fontSize:'16px', marginTop:'15px' , fontWeight:500 }}>Toys Products</div>
                            <div style={{fontSize:'14px',  paddingBottom:'5px',  marginTop:'5px' , color:'green'}}>Upto 40% off</div>
                            <div style={{fontSize:'14px', paddingBottom:'5px',  marginTop:'5px' , color:'gray'}}>Child Toys and more</div>
                        </div>
                    </Slider>
                </div>
            </div>
        
     )
 }
 
 export default MultiSlidingCorousel
