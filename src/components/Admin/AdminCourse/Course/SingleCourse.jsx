import React, { useState } from 'react'
import './SingleCourse.css'
import medical from '../../../../assets/EnglishCourseImg/e1.jpg'
import { Avatar, Box, Button, Heading, HStack, IconButton, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react'
import { RiVidiconLine } from "react-icons/ri";
import { IoShieldCheckmark } from "react-icons/io5";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { FaFileAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import Information from './Information';
import Content from './Content';
import Review from './Review';
import { Link } from 'react-router-dom';
// import user1 from '../../../../assets/team-1.jpg'
// import user2 from '../../../../assets/team-2.jpg'
// import user3 from '../../../../assets/team-3.jpg'
import user1 from '../../../../assets/astrologerImg/astro1.png'
import user2 from '../../../../assets/astrologerImg/astro2.png'
import user3 from '../../../../assets/astrologerImg/astro3.png'
import { useSelector } from 'react-redux'; 
 
const SingleCourse = () => { 
const { loading, course } = useSelector((state) => state.courseContainer);

    const Testcourse = {
        name: 'Medical Astrologer',
        description: ' into the captivating world of astrlogy with our Astrology Basics Course! This program is perfect for begninners curious about astrology. Its a journey thal helps you understand how the cosmos affects our lives.This journey unravels the cosmic secrets behind Rashi,planets,houses,and captivating myhtological stories.Jion us and unlock the mysteries of the stars!',
        price: 12345,
        rating: 4,
        banner: medical,
        lectures: [
            {
                name: 'lecture 1',
                description: 'lecture 1 description',
                video: [
                    {
                        title: 'Introduction class and hhh Division of sky',
                        url: 'vido url',
                        vedioMb: '1.28 GB'
                    },
                    {
                        title: 'Introduction class and Division of sky',
                        url: 'vido url',
                        vedioMb: '1.28 GB'
                    },
                ]
            },
            {
                name: 'lecture 2',
                description: 'lecture 2 description',
                video: [
                    {
                        title: 'Introduction Astrology',
                        url: 'vido url',
                        vedioMb: '1.28 GB'
                    },
                    {
                        title: 'Introduction class and Explain the numerology',
                        url: 'vido url',
                        vedioMb: '1.28 GB'
                    },
                ]
            },
            {
                name: 'lecture 3',
                description: 'lecture 2 description',
                video: [
                    {
                        title: 'Introduction class and hhh Division of sky',
                        url: 'vido url',
                        vedioMb: '1.28 GB'
                    },
                    {
                        title: 'Introduction class and Division of sky',
                        url: 'vido url',
                        vedioMb: '1.28 GB'
                    },
                    {
                        title: 'Introduction class and Division of sky',
                        url: 'vido url',
                        vedioMb: '1.28 GB'
                    },
                    {
                        title: 'Introduction class and Division of sky',
                        url: 'vido url',
                        vedioMb: '1.28 GB'
                    },
                ]
            }
        ],
        reviews: [
            {
                user: 'user id 1',
                avatar:user1,
                name: 'user name 1',
                comment: 'Its a journey thal helps you understand how the cosmos affects our lives.',
                rating: 2
            },
            {
                user: 'user id 2',
                avatar:user2,
                name: 'user name 2',
                comment: 'into the captivating world of astrlogy with our Astrology Basics Course! This program is perfect for begninners curious about astrology.',
                rating: 3
            },

        ]
    }



    return (
        // <>

        // </>
        <>
            <div className="singleCourseBg">
                <Heading children={course?.name} textAlign={'center'} mb={'10px'} />
                <Stack w={'100%'} alignItems={'center'} spacing={4} justifyContent={'center'} direction={{ base: 'column', md: 'column', lg: 'row' }}>
                    <VStack w={{ base: '90%', md: '100%', lg: '50%' }}>
                        <Image src={course?.banner?.url} alt={course?.name} w={['100%', '100%', '70%']} />
                    </VStack>

                    <VStack w={{ base: '100%', md: '100%', lg: '50%' }} spacing={4}>

                        <HStack w={['90%', '90%', '65%']} boxShadow='lg' p='2' rounded='md' bg='white'>
                            <IconButton colorScheme='whatsapp' icon={<RiVidiconLine />} isRound={true} fontSize='25px' />
                            <Text children={'On Demand Videos'} fontSize={['1.2rem', '1.6rem']} fontWeight={'600'} />
                        </HStack>
                        <HStack w={['90%', '90%', '65%']} boxShadow='lg' p='2' rounded='md' bg='white'>
                            <IconButton colorScheme='whatsapp' icon={<IoShieldCheckmark />} isRound={true} fontSize='25px' />
                            <Text children={'Certification Course '} fontSize={['1.2rem', '1.6rem']} fontWeight={'600'} />
                        </HStack>
                        <HStack w={['90%', '90%', '65%']} boxShadow='lg' p='2' rounded='md' bg='white'>
                            <IconButton colorScheme='whatsapp' icon={<HiMiniCurrencyRupee />} isRound={true} fontSize='25px' />
                            <Text fontSize={['1.2rem', '1.6rem']} fontWeight={'600'}>Course Fees - <span style={{ fontWeight: '700', color: '#22c35e' }}>{course?.price}/-</span></Text>
                        </HStack>

                    </VStack> 
                </Stack>
            </div>

            <Stack w={['100%', '90%']} m={'40px auto'} spacing={4} direction={{ base: 'column', md: 'row', lg: 'row' }}>
                <HStack justifyContent={'center'} spacing={4} alignItems={'center'} alignContent={'flex-start'} w={'100%'} flexWrap={'wrap'} >
                    <VStack w={'100%'}>
                        <Tabs w={{ base: '100%', md: '98%' }} m={'5px auto'} size={'md'} >
                            <TabList bg={'#1f3b64'} color={'white'} rounded={'lg'} p={2}>
                                <Tab w={'30%'} _selected={{ borderBottom: '3px solid green' }}>Information</Tab>
                                <Tab w={'30%'} _selected={{ borderBottom: '3px solid green' }}>{`Content(${course?.lectures.length})`}</Tab>
                                <Tab w={'30%'} _selected={{ borderBottom: '3px solid green' }}>{`Reviews(${course?.review.length})`}</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <Information info={course?.description} />
                                </TabPanel>
                                <TabPanel>
                                    <Content lectures={course?.lectures} rating={course?.rating} courseId={course?._id}/>
                                </TabPanel>
                                <TabPanel>
                                    <Review loading={loading} reviews={course?.review} rating={course?.rating} courseId={course?._id} />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </VStack>

                </HStack>


            </Stack>
        </>
    )
}

export default SingleCourse