import React from 'react'
import Slider from "react-slick";
import '../styles/carousel.css'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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

const SlidingCorousel = () => {
    return (
        <div style={{margin:'30px'}}>
            <Slider 
                autoplay 
                autoplaySpeed={2000} 
                initialSlide={1} 
                prevArrow={<PrevBtn />}
                nextArrow={<NextBtn />}
                infinite>
                <div>
                    <img src={image1} alt="" style={{width:'100%', height:'40vh'}} />
                </div>
                <div>
                    <img src={image2} alt="" style={{width:'100%', height:'40vh'}}/>
                </div>
                <div>
                    <img src={image3} alt="" style={{width:'100%', height:'40vh'}}/>
                </div>
                <div>
                    <img src={image4} alt="" style={{width:'100%', height:'40vh'}}/>
                </div>
                <div>
                    <img src={image5} alt="" style={{width:'100%', height:'40vh'}}/>
                </div>
            </Slider>
        </div>
    )
}

export default SlidingCorousel
