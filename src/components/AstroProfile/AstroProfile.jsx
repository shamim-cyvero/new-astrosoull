import React from 'react'
import Slider from 'react-slick';
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
                            <Heading children={'Astrologers'} color={'#1f3b64'} fontSize={['1.2rem','1.6rem','1.8rem']}  />
                            <Stack w={'100%'} direction={{ base: 'column', md: 'row' }}>
                                <Text children={'#Discover your path with top astrologers -'} fontSize={['.9rem', '1.1rem','1rem' ]} fontWeight={'350'} />
                                <Text style={{ fontSize: "1rem", fontWeight: "600" }}> Book a session with an astrologer</Text>
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
                                    <Text children={`${item.expert?item.expert:'no update'}} | ${item.language?item.language:'no update'}`} fontSize={'1rem'} color={'grey'} fontWeight={'400'} textAlign={'center'} />
                                    <HStack spacing={2} textAlign={'center'}>
                                        
                                        <Rating
                                            emptySymbol={<FaStar color='gray' />}
                                            fullSymbol={<FaStar color='tomato' />}
                                            initialRating={item.rating}
                                            readonly
                                        />
                                        <Button colorScheme='whatsapp' cursor={'default'} variant='solid' size={'xs'} fontSize={'.8rem'}>
                                            {item.rating}
                                        </Button>
                                    </HStack>
                                    <Button colorScheme='whatsapp' size={'sm'}>{'Book a Meeting'}</Button>
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