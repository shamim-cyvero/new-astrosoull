import React from 'react'
import Slider from 'react-slick';
import astro1 from '../../assets/astrologerImg/astro1.png'
import astro2 from '../../assets/astrologerImg/astro2.png'
import astro3 from '../../assets/astrologerImg/astro3.png'
import astro4 from '../../assets/astrologerImg/astro4.png'
import astro5 from '../../assets/astrologerImg/astro5.png'
import astro6 from '../../assets/astrologerImg/astro6.png'
import astro7 from '../../assets/astrologerImg/astro7.png'
import astro8 from '../../assets/astrologerImg/astro8.png'
import astro9 from '../../assets/astrologerImg/astro9.png'
import astro11 from '../../assets/astrologerImg/astro11.png'
import astro12 from '../../assets/astrologerImg/astro12.png'
import astro13 from '../../assets/astrologerImg/astro13.png'

import { Avatar, Box, Button, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { LoadSingleAstrologerDetails } from '../../redux/action/AstrologerActions';
import { useNavigate } from 'react-router-dom';

const AstroProfile = () => {
    const { isAstrologerAuthenticated, allastrologer } = useSelector(
        state => state.astrologerContainer
    );
    const dispatch = useDispatch()
    const navigate = useNavigate()



    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },

            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const profileDetails = [
        {
            image: astro1,
            astroName: 'Astro Yash',
            exp: 'Vedic, Numerology Exp: 3+ Year',
            rating: 'star',
            totalRating: '4.1',
            appointment: 'Book a Consultation'
        },
        {
            image: astro2,
            astroName: 'Akansha Khandelwal',
            exp: 'Astrology Hindi,English Exp: 5+ Year',
            rating: 'star',
            totalRating: '4.5',
            appointment: 'Book a Consultation'
        },
        {
            image: astro3,
            astroName: 'Priya soull',
            exp: 'Tarot Reading, Numerology, Hindi,English Exp: 3+ Year',
            rating: 'star',
            totalRating: '4',
            appointment: 'Book a Consultation'
        },
        {
            image: astro4,
            astroName: 'Agastya',
            exp: 'Career,Marriage,Relationship,Rarot Reading Hindi,English Exp: 5+ Year',
            rating: 'star',
            totalRating: '4.5',
            appointment: 'Book a Consultation'
        },
        {
            image: astro5,
            astroName: 'Rajendra Mahapatra',
            exp: 'Astrology Hindi,English Exp: 5+ Year',
            rating: 'star',
            totalRating: '4.5',
            appointment: 'Book a Consultation'
        },
        {
            image: astro6,
            astroName: 'Meenakshi',
            exp: 'Relationship Hindi, Exp: 30+ Year',
            rating: 'star',
            totalRating: '4.5',
            appointment: 'Book a Consultation'
        },
        {
            image: astro7,
            astroName: 'Navneet sharma',
            exp: 'Vedic Hindi, Exp: 3+ Year',
            rating: 'star',
            totalRating: '4.1',
            appointment: 'Book a Consultation'
        },
        {
            image: astro8,
            astroName: 'Gaurav Ji',
            exp: 'Psychologist,Vedic,Relationship Hindi,English Exp: 3+ Year',
            rating: 'star',
            totalRating: '4.3',
            appointment: 'Book a Consultation'
        },
        {
            image: astro9,
            astroName: 'Govind Pathak',
            exp: 'Vedic Hindi, Exp: 3+ Year',
            rating: 'star',
            totalRating: '4.3',
            appointment: 'Book a Consultation'
        },
        {
            image: astro11,
            astroName: 'Acharya angad',
            exp: 'Marriage, Pshychologist,Vedic Hindi, Exp: 5+ Year',
            rating: 'star',
            totalRating: '4.3',
            appointment: 'Book a Consultation'
        },
        {
            image: astro12,
            astroName: 'Aditya Mehra',
            exp: 'Chandigarh Hindi Exp: 2+ Year',
            rating: 'star',
            totalRating: '4.3',
            appointment: 'Book a Consultation'
        },
        {
            image: astro13,
            astroName: 'Ajay Pandit',
            exp: 'Vedic,Numerology Hindi,Punjabi Exp: 3+ Year',
            rating: 'star',
            totalRating: '4.3',
            appointment: 'Book a Consultation'
        },
    ]

    const ShowSingleAstrologerDetails = async (astrologerId) => {
        await dispatch(LoadSingleAstrologerDetails(astrologerId))
        navigate('/user/astrologers/profile')
        // navigate('/admin/course/single/course') 
    }

    return (
        <>
            <Box style={{ width: "90%", margin: "auto", marginTop: "40px", marginBottom: "60px" }} >
                <Stack w={'100%'} alignItems={'center'} justifyContent={'space-between'} direction={{ base: 'column', md: 'row' }} spacing={2}>
                    <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'} direction={{ base: 'column', md: 'row' }} flexWrap={'wrap'} spacing={2}>
                        <VStack alignItems={'flex-start'}>
                            <Heading children={'Astrologers'} color={'#1f3b64'} fontSize={['2.1rem', '2rem', '1.9rem', '1.8rem']} />
                            <Stack w={'100%'} direction={{ base: 'column', md: 'row' }}>
                                <Text children={'#Discover your path with top astrologers -'} fontSize={['1.3rem', '1.2rem', '1.1rem', '1rem']} fontWeight={'350'} />
                                <Text style={{ fontSize: "1rem", fontWeight: "600" }}> Book an astrology consultation</Text>
                            </Stack>

                        </VStack>
                        <Button onClick={() => navigate('/consult')} colorScheme='black' variant='outline' size={{ base: 'sm', md: 'md' }}>View All</Button>
                    </HStack>
                </Stack>

                <Slider {...settings}>
                    {
                        allastrologer && allastrologer.map((item) => (
                            <Box cursor={'pointer'} onClick={() => ShowSingleAstrologerDetails(item._id)} key={item._id} w={'300px'} m={'20px auto'} p={'10px'} mt={'20px'} borderRadius={'10px'} >
                                <VStack w={'98%'} h={'250px'} alignItems={'center'} justifyContent={'center'} spacing={2} p={'6px 0px'} boxShadow='lg' rounded='md' bg='white'>
                                    <Avatar name={item.name} src={item.avatar?.url} size={'lg'} />
                                    <Heading children={item.name} color={'#1f3b64'} fontSize={'1.4rem'} textTransform={'capitalize'}mb={'10px'} textAlign={'center'} />
                                    <Text children={'Vedic, Numerology Exp: 3+ Year'} fontSize={'1rem'} color={'grey'} fontWeight={'400'} textAlign={'center'} />
                                    <HStack spacing={2} textAlign={'center'}>
                                        {/* <Text children={item.rating} /> */}
                                        <Rating
                                            emptySymbol={<FaStar color='gray' />}
                                            fullSymbol={<FaStar color='tomato' />}
                                            initialRating={item.rating}
                                            readonly
                                        />
                                        <Button colorScheme='whatsapp' variant='solid' size={'xs'} fontSize={'.8rem'}>
                                            {item.rating}
                                        </Button>
                                        {/* <Text children={'₹50 / Min'} /> */}
                                    </HStack>
                                    <Button colorScheme='whatsapp' size={'sm'}>{'Book a Consultation'}</Button>
                                </VStack>
                            </Box>
                        ))
                    }

                </Slider >
            </Box >
        </>
    )
}

export default AstroProfile