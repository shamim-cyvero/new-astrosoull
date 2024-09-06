import { Avatar, Box, Button, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import teacher from '../../assets/HindiCourseImg/Alok.jpg';
import slide1 from '../../assets/HindiCourseImg/slide1.jpg'
import slide2 from '../../assets/HindiCourseImg/slide2.jpg'
import slide3 from '../../assets/HindiCourseImg/slide3.png'
import slide4 from '../../assets/HindiCourseImg/slide4.jpg'
import slide5 from '../../assets/HindiCourseImg//slide5.jpg'
import slide6 from '../../assets/HindiCourseImg/slide6.jpg'
import teacherImg from '../../assets/HindiCourseImg/rahul_verma.png';

import { FaStar } from "react-icons/fa6";
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { GetSignleCourseDetails } from '../../redux/action/CourseActions';
const CourseCard = ({ courseId, image, name, category, rating, totalRating, price,  url, }) => {

    // const courseDetails=
    //     {
    //         offer: 25,
    //         image: slide1,
    //         name: 'Astromani 2024',
    //         category: 'in Astrology',
    //         rating: 'rting',
    //         totalRating: '45',
    //         price: 14999,
    //         teacher: {
    //             avatar: teacher,
    //             name: 'Mr.Alok Khandelwal'
    //         }
    //     }

 const navigate=useNavigate()
 const dispatch=useDispatch()



 const ShowSingleCourseDetails=async (courseId)=>{
    await dispatch(GetSignleCourseDetails(courseId))   
    navigate('/course')  
    // navigate('/admin/course/single/course')    
 }  
 
    return (
        <>
            <HStack  onClick={()=>ShowSingleCourseDetails(courseId)} cursor={'pointer'} w={'100%'} alignItems={'center'} justifyContent={'center'}>

                <Box w={'90%'} alignItems={'center'} justifyContent={'center'} p={'6px'} mt={'20px'} borderRadius={'10px'}>


                    <Box pos={'relative'} w={'100%'} h={'170px'} overflow={'hidden'} borderRadius={'10px 10px 0 0'}>
                        <Image src={image} w={'100%'} h={'100%'} objectFit={'cover'} />
                        {/* <Button variant={'gosht'} bg={'#f63c3c'} color={'white'} pos={'absolute'} top={'10%'} left={'2%'} size={'xs'} borderRadius={'10px 0 10px 0'} fontWeight={'400'}>{23} %Offer</Button> */}
                    </Box>
                    <VStack w={'100%'} alignItems={'flex-start'} borderRadius={'0 0 10px 10px'} boxShadow='lg' bg='white' pl={'10px'} pb={'15px'}>
                        {/* <HStack pt={'5px'}>
                            <Avatar name='Dan Abrahmov' src={teacherImg} size={'sm'} />
                            <Text children={'Mr.Rahull Verma.'} fontSize={'.9rem'} fontWeight={'500'} color={'grey'} />
                        </HStack> */}
                        <Heading children={name} fontSize={'1.3rem'} w={'100%'} textOverflow={'ellipsis'} whiteSpace={'nowrap'} overflow={'hidden'} mb={'8px'} />
                        <Text children={category} fontSize={'.9rem'} textDecoration={'underline'} />
                        <HStack>
                            <Rating
                                emptySymbol={<FaStar color='gray' />}
                                fullSymbol={<FaStar color='tomato' />}
                                initialRating={rating}
                                readonly
                            />
                            <Button leftIcon={<FaStar />}cursor={'default'} colorScheme='whatsapp' variant='solid' size={'xs'}>
                                {totalRating}
                            </Button>
                        </HStack>
                        <HStack>
                            <Text children={price} fontSize={'1.2rem'} fontWeight={'700'} color={'#22c35e'} />
                            <del children={'20,000'} style={{ fontSize: "1.1rem", fontWeight: "600", color: "grey" }} />
                        </HStack>
                    </VStack>

                </Box>

            </HStack>
        </>
    )
}

export default CourseCard