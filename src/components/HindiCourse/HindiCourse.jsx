import { Box, Button, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick';
import CourseCard from '../CourseCard/CourseCard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const HindiCourse = () => {

const { loading, courses } = useSelector((state) => state.courseContainer);

const navigate=useNavigate()
const dispatch=useDispatch()

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

  

    return (
        <>
            <Box style={{ width: "90%", margin: "auto", marginTop: "60px", marginBottom: "60px" }} >
                <Stack w={'100%'} alignItems={'center'} justifyContent={'space-between'} direction={{ base: 'column', md: 'row' }} spacing={2}>
                    <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'} direction={{ base: 'column', md: 'row' }} flexWrap={'wrap'} spacing={2}>
                        <VStack alignItems={'flex-start'}>
                            <Heading children={'Hindi Courses'} color={'#1f3b64'} fontSize={['1.2rem','1.6rem','1.8rem']} />
                            <Text children={'#Become a Master in Vedic science with our Hindi courses!'}  fontSize={['.9rem', '1.1rem','1rem' ]} fontWeight={'350'} />
                        </VStack>
                        <Button onClick={()=>navigate('/all/courses')} colorScheme='black' variant='outline' size={{ base: 'sm', md: 'md' }}>View All</Button>
                    </HStack> 
                </Stack>

                <Slider {...settings}>
                    {courses && courses.slice(0,5).map((item,i) => ( 

                        <CourseCard key={i} courseId={item._id} offer={item.offer} image={item.banner?.url} name={item.name} category={item?.category} rating={item.rating} totalRating={item.rating} price={item.price} />

                    ))
                    }
                </Slider >
            </Box >
        </>
    )
}

export default HindiCourse