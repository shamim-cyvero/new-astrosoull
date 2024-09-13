import React, { useEffect, useState } from 'react'
import './SingleCourse.css'
import {  Box, Button, Heading, HStack, IconButton, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react'
import { RiVidiconLine } from "react-icons/ri";
import { IoShieldCheckmark } from "react-icons/io5";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { FaFileAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import Information from './Information';
import Content from './Content';
import Review from './Review';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { server } from '../../main';
import axios from 'axios';
import { ClearPaymentError, ClearPaymentMessage, GetPaymentKey, PaymentProcess } from '../../redux/action/PaymentActions';
import { UserEnrolled } from '../../redux/action/UserActions';

const SingleCourse = () => {
  const [isEnrolled, setIsEnrolled] = useState(false) 


const { loading, course } = useSelector((state) => state.courseContainer);
const {  user,isAuthenticated } = useSelector( (state) => state.userContainer);
const { payloading, PaymentOrder,Paymentkey,error,message } = useSelector( (state) => state.paymentContainer);
const {  isAstrologerAuthenticated  } = useSelector( state => state.astrologerContainer );

const navigate=useNavigate() 
const dispatch=useDispatch()



const payHandler = async (price) => {
    await dispatch(GetPaymentKey(course._id))
    // await dispatch(PaymentProcess(price)) 
    const { data } = await axios.post(
        `${server}/payment/process`,
        { price },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
    
    if(data){
        const option = {
           key: Paymentkey,
           amount: data.order.amount,
           currency: 'INR',
           name: course?.name,
           description: course?.description,
           image:  course?.banner?.url ,
           order_id: data.order.id,
           // callback_url: `${server}/payment/verfication`,
           callback_url: `${server}/payment/verfication/${course._id}`,
           
           prefill: {               //user details who is logined
               name: user.name,
               email: user.email,
               contact: user.phone
           },
           notes: {
               address: 'ok address'
           },
           theme: {
               color: '#939182'
           } 
       };
    
       const razor = new window.Razorpay(option);
       razor.open()      

    }else{
        return alert('click again')
    }     

}

useEffect(()=>{
    if(course){

        const ViewCourse = {
                 id: course?._id,
                 name:course?.name,
                 price:course?.price,
             };
     localStorage.setItem('ViewCourse', JSON.stringify(ViewCourse)); 
    }
 
let isEnrolled = course?.enrolledUsers.some(
  (rev) => rev?.user.toString() === user?._id.toString()
);
setIsEnrolled(isEnrolled)
},[ ])

    return (
        <>
            {
               !loading && course?(
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
                        <Tabs w={{ base: '90%', md: '98%' }} m={'5px auto'} size={'md'} >
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
                                    <Review  reviews={course?.review} CourseRating={course?.rating} courseId={course?._id}  />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </VStack>

                </HStack>

                <VStack w={{ base: '100%', md: '40%', lg: '35%' }} alignItems={'self-start'} >

                    <Box w={'100%'} alignItems={'flex-start'} boxShadow='lg' p='4' rounded='md' bg='white'>

                        <VStack w={'100%'} spacing={3} > 
                            <Heading children={isEnrolled===true?'You have Enrolled ':`Rs - ${course?.price}`} color={'#22c35e'} fontSize={['1.3rem','1.5rem']} />
                            {
                                
                                isEnrolled ?(
                                    null
                                ):isAstrologerAuthenticated?(
                                    <Heading children={'Astrologer not allow to enrolled'} color={'#22c35e'} fontSize={['1.3rem','1.5rem']} />
                                ):(
                                
                                    <Button isLoading={payloading} onClick={isAuthenticated?()=>payHandler(course?.price):()=>alert('login First')} w={'100%'} size={['md','lg']} colorScheme='blue' > Buy now!</Button>
                               )
                            }
                        </VStack>
                    </Box>

                    <Box w={'100%'} mt={'15px'} boxShadow='lg' p='4' rounded='md' bg='white'>
                        <VStack alignItems={'flex-start'} w={'100%'} spacing={4}>
                            <Heading children={'Course specifications'} fontSize={'1.3rem'} fontWeight={'700'} borderBottom={'3px solid #43d477'} p={'5px 0px'} />

                            <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                                <Text display='flex' alignItems='center' fontWeight={'400'} fontSize={['.9rem', '1rem']}><FaFileAlt size={22} />Files:</Text>
                                <Text children={course?.lectures.length} fontSize={['.9rem', '1rem']} fontWeight={'400'} />
                            </HStack>
                            <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                                <Text display='flex' alignItems='center' fontWeight={'400'} fontSize={['.9rem', '1rem']}><MdDateRange size={22} />Created date:</Text>
                                <Text children={course?.createdAt.split('T')[0]} fontSize={['.9rem', '1rem']} fontWeight={'400'} />
                            </HStack>
                            <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                                <Text display='flex' alignItems='center' fontWeight={'400'} fontSize={['.9rem', '1rem']}><MdDateRange size={22} />Access Period:</Text>
                                <Text children={'Life Time'} fontSize={['.9rem', '1rem']} fontWeight={'400'} />
                            </HStack>
                        </VStack>
                    </Box>

                </VStack>
            </Stack>
                     </>
                ):(
                    navigate('/')
                )
            }
        </>
    )
}
export default SingleCourse