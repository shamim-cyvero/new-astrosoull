import { Avatar, Box, Button, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick';
import teacher from '../../assets/HindiCourseImg/rahul_verma.png';
// import teacher from '../../assets/HindiCourseImg/Alok.jpg';
import slide1 from '../../assets/EnglishCourseImg/e1.jpg'
import slide2 from '../../assets/EnglishCourseImg/e2.jpg'
import slide3 from '../../assets/EnglishCourseImg/e3.jpg'
import { FaStar } from "react-icons/fa6";
import CourseCard from '../CourseCard/CourseCard';



const EnglishCourse = () => {
    const settings = {
        dots: true,
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
                    dots: true
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

    const courseDetails = [
        {
            offer: 25,
            image: slide1,
            name: 'Astrology',
            category: 'in Astrology',
            rating: 'rting',
            totalRating: '4.5',
            price: 14999,
            teacher: {
                avatar: teacher,
                name: 'Mr.Rahull Verma.'
            }
        },
        {
            offer: 25,
            image: slide2,
            name: 'Astrology Intermediate Level',
            category: 'in Astrology',
            rating: 'rting',
            totalRating: '4.5',
            price: 14999,
            teacher: {
                avatar: teacher,
                name: 'Mr.Rahull Verma.'
            }
        },
        {
            offer: 25,
            image: slide3,
            name: 'Astrology Advanced Level',
            category: 'in Astrology',
            rating: 'rting',
            totalRating: '4.5',
            price: 14999,
            teacher: {
                avatar: teacher,
                name: 'Mr.Rahull Verma.'
            }
        },
      


    ]
    return (
        <>
            <Box style={{ width: "90%", margin: "auto", marginTop: "40px", marginBottom: "50px" }} >
                <Stack w={'100%'} alignItems={'center'} justifyContent={'space-between'} direction={{ base: 'column', md: 'row' }} spacing={2}>
                    <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'} direction={{ base: 'column', md: 'row' }} flexWrap={'wrap'} spacing={2}>
                        <VStack alignItems={'flex-start'}>
                            <Heading children={'English Courses'} color={'#1f3b64'} fontSize={{ base: '1.8rem', md: '1.7rem', lg: '1.5rem' }} />
                            <Text children={'#Learn Vedic science effortlessly with our English courses!'} fontSize={{ base: '1.1rem', md: '1rem', lg: '.9rem' }} fontWeight={'350'} />
                        </VStack>
                        <Button colorScheme='black' variant='outline' size={{ base: 'sm', md: 'md' }}>View All</Button>
                    </HStack>
                </Stack>

                <Slider {...settings}>
                    {courseDetails && courseDetails.map((item,i) => (

                        <CourseCard key={i} url={'/course'} offer={item.offer} image={item.image} name={item.name} category={item.category} rating={item.rating} totalRating={item.totalRating} price={item.price} teacherName={item.teacher.name} teacherImg={item.teacher.avatar}/>

                    ))
                    }

                </Slider >
            </Box >
        </>
    )
}

export default EnglishCourse