import React from 'react'
import zee from '../../assets/mediaImg/zee.png'
import abp from '../../assets/mediaImg/abp.png'
import toi from '../../assets/mediaImg/toi.png'
import money from '../../assets/mediaImg/money.png'
import sugar from '../../assets/mediaImg/sugar.png'
import Slider from "react-slick";
import { Box, Heading, HStack, Image, VStack } from '@chakra-ui/react'

const MediaSlide = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    const newsData = [
        {
            image: zee,
            newsName: 'Zee News'
        },
        {
            image: abp,
            newsName: 'ABP News'
        },
        {
            image: toi,
            newsName: 'TOI '
        },
        {
            image: money,
            newsName: 'Moneycontrol'
        },
        {
            image: sugar,
            newsName: 'Sugarmint'
        }
    ]
    return (
        <>
            <Box style={{ width: "90%", margin: "auto", marginTop: "40px" ,marginBottom:"40px"}}>
                <Slider {...settings}>
                  { newsData && newsData.map((item) => (
                        <Box key={item.newsName} w={'90%'} m={'auto' } alignItems={'center'} justifyContent={'center'} p={'5px'}>
                            <HStack alignItems={'center'} justifyContent={'center'} >
                                <VStack w={'100%' } alignItems={'flex-start'} borderRadius={'10px'}     boxShadow='lg' rounded='md' bg='white'
                                
                                
                                
                                >
                                    <Box  w={'100%'} bgColor={'#e5dddd'}  p={'20px'}>
                                        <Image src={item.image} w={'140px'} aspectRatio={'4/2'}/>
                                    </Box>
                                    <Heading children={item.newsName} fontSize={['1.5rem','1.3rem','1.2rem']} p={'10px 5px'}/>
                                </VStack>
                            </HStack>
                        </Box>
                    ))}
                </Slider>
            </Box>


         
        </>
    )
}

export default MediaSlide