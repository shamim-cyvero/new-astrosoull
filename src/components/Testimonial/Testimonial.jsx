import React from 'react'
import './Testimonial.css'
import { Avatar, Box, Heading, HStack, 
     Text, VStack } from '@chakra-ui/react'
import Slider from 'react-slick';
import user1 from '../../assets/testimonialImg/user1.png'
import user2 from '../../assets/testimonialImg/user2.png'
import user3 from '../../assets/testimonialImg/user3.png'
import user4 from '../../assets/testimonialImg/user4.png'
import user5 from '../../assets/testimonialImg/user5.png'
const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
        
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

    const userInfo = [
        {
            img: user5,
            userName: 'Revanthi Shridhar',
            profession: 'Astrologer',
            rating: 'start',
            des: 'In the past five months,I have learned Astrlogy from Alok sir.His broad knowledge and confortable teaching style have inspired me.He is patience,humble,and dedicated to  his students understanding '
        },
        {
            img: user2,
            userName: 'Swagat Chakrabotary',
            profession: 'System Administrator at Amazon',
            rating: 'star',
            des: 'In the past five months,I have learned Astrlogy from Alok sir.His broad knowledge and confortable teaching style have inspired me.He is patience,humble,and dedicated to  his students understanding '
        },
        {
            img: user3,
            userName: 'Dipak Samtani',
            profession: 'It Technician at IBM',
            rating: 'star',
            des: 'In the past five months,I have learned Astrlogy from Alok sir.His broad knowledge and confortable teaching style have inspired me.He is patience,humble,and dedicated to  his students understanding '
        },
        {
            img: user4,
            userName: 'Shreya Ranawat',
            profession: 'Graphic Designer at Chaafo',
            rating: 'star',
            des: 'In the past five months,I have learned Astrlogy from Alok sir.His broad knowledge and confortable teaching style have inspired me.He is patience,humble,and dedicated to  his students understanding '
        },
        {
            img: user1,
            userName: 'Thakur PrasadDas',
            profession: 'Computer Engineer at Oracle',
            rating: 'star',
            des: 'In the past five months,I have learned Astrlogy from Alok sir.His broad knowledge and confortable teaching style have inspired me.He is patience,humble,and dedicated to  his students understanding '
        },
    ]
    return (
        <>
            <Box style={{ width: "90%", margin: "auto", marginTop: "40px", marginBottom: "50px" }} >

                <VStack>
                    <Heading children={'Testimonials'} color={'#1f3b64'} fontSize={['1.2rem','1.6rem','1.8rem']}  />
                    <Text children={'#What our customers say about us'} fontSize={['.9rem', '1.1rem','1rem' ]} fontWeight={'350'} />
                </VStack>

                <Slider {...settings}>
                    {
                        userInfo && userInfo.map((item,i) => (
                            <HStack key={i} w={'100%'} mt={'30px'} alignItems={'center'} justifyContent={'center'}>
                                <Box  w={'97%'} h={'300px'}  alignItems={'center'} justifyContent={'center'} boxShadow='lg' p='4' rounded='md' bg='white' borderBottom={'8px solid #32ba7c'}>
                                    <VStack w={'100%'} textAlign={'center'}>
                                        <Avatar name='Dan Abrahmov' src={item.img} size={'lg'}/>
                                        <Heading children={item.userName} fontSize={'1.3rem'} fontWeight={'700'} color={'#1f3b64 '}/>
                                        <Text children={item.profession} fontSize={'.9rem'} fontWeight={'400'} />
                                        <Text children={item.rating}fontSize={'.9rem'} />
                                        <Text  children={item.des} className='scrollBar' fontSize={'.9rem'} color={'grey'} mt={'5px'} w={'100%'} textOverflow={'ellipsis'} overflowY={'auto'} whiteSpace={'normal'} h={'100px'}/>
                                    </VStack>
                                </Box>
                            </HStack>
                        ))
                    }

                </Slider >
            </Box >
        </>
    )
}

export default Testimonial