import React from 'react';
import './HomeSlider.css'
import { Box, Image } from '@chakra-ui/react';
import Slider from "react-slick";
import slide1 from '../../assets/HomeSliderImg/slide1.png';
import slide2 from '../../assets/HomeSliderImg/slide2.png';
import slide3 from '../../assets/HomeSliderImg/slide3.png';
import slide4 from '../../assets/HomeSliderImg/slide4.png';

const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrow:false
    };

    const SlideData = [
        {
            heading: 'Solution for Every Aspect of Life',
            text: ' Step into the world of vedic wisdom!',
            smallText: 'Let our guidance shape your journey to a purposeful life',
            button: '  Know more',
            image: slide4,
            bg: '#edf8f4',
            btnClr: 'whatsapp'
        },
        {
            heading: `Consult with Our Expert Astrologer's for`,
            text: 'Personalized Insights!',
            smallText: 'Consult Now for a transformative astrology Session!',
            button: ' Book consultation',
            image: slide2,
            bg: '#f5e9cf',
            btnClr: ' #a96f21'
        },
        {
            heading: 'Discover the Power of Personalized kundli',
            text: ' Superboost your destiny!',
            smallText: 'With complate 10-year prediction report',
            button: ' Buy now',
            image: slide3,
            bg: '#d3e8ff',
            btnClr: 'whatsapp'
        },
    ]
    return (
        <Box w={{ base: '98%', md: '97%', lg: '95%' }} m={'1.5vmax auto'} >
            <Slider  {...settings}>
                {SlideData && SlideData.map((item,i) => (
                   
                    <Image key={i} src={item.image} borderRadius={'15px'} />
                ))}
            </Slider>
        </Box>

    );
}

export default HomeSlider;
