import { Box, Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { FaStar } from "react-icons/fa6";
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { GetSignleCourseDetails } from '../../redux/action/CourseActions';
const CourseCard = ({ courseId, image, name, category, rating, totalRating, price }) => {
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

                <Box w={['95%','100%']}  alignItems={'center'} justifyContent={'center'} p={'6px'} mt={'20px'} borderRadius={'10px'}>
                    <Box pos={'relative'} w={'100%'} h={'170px'} overflow={'hidden'} borderRadius={'10px 10px 0 0'}>
                        <Image src={image} w={'100%'} h={'100%'} objectFit={'cover'} />   
                    </Box>
                    <VStack w={'100%'} alignItems={'flex-start'} borderRadius={'0 0 10px 10px'} boxShadow='lg' bg='white' pl={'10px'} pb={'15px'}>
                       
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