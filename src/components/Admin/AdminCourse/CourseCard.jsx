import {
    Box,
    HStack,
    Text,
    VStack,
    Button,
    Heading,
    Image,
} from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { AdminDeleteCourse, GetAllCourseDetails, GetSignleCourseDetails } from "../../../redux/action/CourseActions";
import { useDispatch } from "react-redux";
import Rating from "react-rating";

const Coursecard = ({ image, name, category, rating, totalRating, price, teacherImg, teacherName,id }) => {
  const dispatch=useDispatch()
  const navigate=useNavigate() 

    const deleteCourseHandler =async (id) => {
        await dispatch(AdminDeleteCourse(id))
        dispatch(GetAllCourseDetails())
     
     
     }
     const ShowSingleCourseDetails=async (courseId)=>{
        await dispatch(GetSignleCourseDetails(courseId))  
        navigate('/admin/course/addcourse/newcourse')  
        // navigate('/admin/course/single/course')  
     }  
    return (
        <>
            <HStack w={'250px'} alignItems={'center'} justifyContent={'center'} transition={'all 0.3s '} _hover={{ transform: 'translateY(-10px)' }} cursor={'pointer'}>

                <Box w={'100%'} alignItems={'center'} justifyContent={'center'} p={'6px'} mt={'20px'} borderRadius={'10px'} >


                    <Box pos={'relative'} w={'100%'} h={'170px'} overflow={'hidden'} borderRadius={'10px 10px 0 0'}>
                        <Image src={image} w={'100%'} h={'100%'} objectFit={'cover'} />
                        
                          <Button onClick={()=>deleteCourseHandler(id)} pos={'absolute'} top={'10%'} left={'2%'} size={'sm'}  colorScheme='red' >Delete</Button>
                    </Box>
                    <VStack onClick={()=>ShowSingleCourseDetails(id)} w={'100%'} alignItems={'flex-start'} borderRadius={'0 0 10px 10px'} boxShadow='lg' bg='white' pl={'10px'} pb={'15px'}>
                       
                        <Heading children={name} fontSize={'1.3rem'} w={'100%'} textOverflow={'ellipsis'} whiteSpace={'nowrap'} overflow={'hidden'} mb={'8px'} />
                        
                        <Text children={category} fontSize={'.9rem'} textDecoration={'underline'} />
                        <HStack>
                            <Rating
                                emptySymbol={<FaStar color='gray' />}
                                fullSymbol={<FaStar color='tomato' />}
                                initialRating={rating}
                                readonly
                            />
                            <Button leftIcon={<FaStar />} colorScheme='whatsapp' variant='solid' size={'xs'}>
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

export default Coursecard