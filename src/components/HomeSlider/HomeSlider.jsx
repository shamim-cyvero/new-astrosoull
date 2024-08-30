import React from 'react';
import './HomeSlider.css'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import Slider from "react-slick";

// import guru from '../../assets/HomeSliderImg/Alok.png';
import guru from '../../assets/HomeSliderImg/rahul_verma.png';
import consultation from '../../assets/HomeSliderImg/Hand.png';
import kundli from '../../assets/HomeSliderImg/Kundli.png';

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
            image: guru,
            bg: '#edf8f4',
            btnClr: 'whatsapp'
        },
        {
            heading: `Consult with Our Expert Astrologer's for`,
            text: 'Personalized Insights!',
            smallText: 'Consult Now for a transformative astrology Session!',
            button: ' Book consultation',
            image: consultation,
            bg: '#f5e9cf',
            btnClr: ' #a96f21'
        },
        // {
        //     heading: 'Discover the Power of Personalized kundli',
        //     text: ' Superboost your destiny!',
        //     smallText: 'With complate 10-year prediction report',
        //     button: ' Buy now',
        //     image: kundli,
        //     bg: '#d3e8ff',
        //     btnClr: 'whatsapp'
        // },
    ]
    return (
        <Box  w={{ base:'98%',md:'97%',lg:'95%'}} m={'1.5vmax auto'} >
            <Slider  {...settings}>
                {SlideData && SlideData.map((item) => (
                    <Box  key={item.heading} bgColor={item.bg}  p={2}  borderRadius={{base:'30px',md:'0'}}>
                        <Stack w={{ base: '100%', md: '90%', lg: '90%' }} m={'0 auto'} alignItems={'stretch'} justifyContent={'space-between'} direction={{ base: 'row', md: 'row', lg: 'row' }}>
                            <VStack w={{ base: '50%', md: '50%', lg: '50%' }} spacing={4} alignItems={'flex-start'} justifyContent={'center'} >
                                <Heading color={'#1f3b64'} fontSize={{ base: '1.1rem', md: '2rem', lg: '2.9rem' }}>
                                    {item.heading}
                                </Heading>
                                <Text fontWeight={'700'} mt={'20px'} fontSize={{ base: '1rem', md: '1.1rem', lg: '1.2rem' }} display={{base:'none',md:'block',lg:'block'}}>
                                    {item.text}
                                </Text>
                                <Text fontSize={['.8rem', '1.2rem', '1.1rem']} color={'grey'} display={{base:'none',md:'block',lg:'block'}}>
                                    {item.smallText}
                                </Text>
                                <Button colorScheme='whatsapp' mt={'10px'} rounded={'20px'} fontSize={'.9rem'} bgColor={item.btnClr}  size={{base:'xs',md:'sm',lg:'md'}}>
                                    {item.button}
                                </Button>
                            </VStack>
                            <Box w={{ base: '40%', md: '50%', lg: '40%' }}  >
                                <Image src={item.image} alt='guru' w={'80%'} objectFit={'contain'} />
                            </Box>
                        </Stack>

                    </Box>
                ))}
            </Slider>
        </Box>

    );
}

export default HomeSlider;
