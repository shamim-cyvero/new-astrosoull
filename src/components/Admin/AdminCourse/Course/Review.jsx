import { Avatar, Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaStar } from 'react-icons/fa6'
import Rating from 'react-rating'
import { AdminDeleteCourseReview, GetSignleCourseDetails } from '../../../../redux/action/CourseActions'
import { useDispatch } from 'react-redux'

const Review = ({ loading,reviews, rating ,courseId}) => {

	const dispatch=useDispatch()


    const deleteReviewHandler =async (reviewId) => {
        await dispatch(AdminDeleteCourseReview(reviewId,courseId))
         dispatch(GetSignleCourseDetails(courseId))  

     
     
     
     }
    return ( 
        <>
            <Box w={'100%'} p={5} spacing={5} alignItems={'center'} justifyContent={'center'} boxShadow='lg' mt={'10px'} rounded='md' bg='white'>
                <VStack>
                    <Heading children={rating} color={'#22c35e'} />
                    <Rating
                        emptySymbol={<FaStar color='gray' />}
                        fullSymbol={<FaStar color='tomato' />}
                        initialRating={rating}
                        readonly
                    />
                    <Text children={`Reviews(${reviews?.length})`} />
                </VStack>
            </Box>
            {
                reviews && reviews.map((item) => (
                   
                    <Box key={item._id} w={'100%'} p={5} mb={5} spacing={5} alignItems={'center'} justifyContent={'center'} boxShadow='lg' mt={'10px'} rounded='md' bg='white'>
                       
                        <Button isLoading={loading} m={'1vmax 0'} alignSelf={'flex-end'} onClick={()=>deleteReviewHandler(item._id)} top={'10%'} left={'2%'} size={'sm'}  colorScheme='red' >Delete Review</Button>

                        <HStack w={'100%'}>
                            <Avatar name={item.avatar} src={item.avatar} size={'lg'} />
                            <VStack w={'100%'} alignItems={'flex-start'} ml={5}>
                                <Heading children={item.name} fontSize={'lg'} color={'#1f3b64'} textTransform={'capitalize'}/>
                                <Text children={item.comment} fontSize={'md'} color={'grey'}/>
                                <Rating
                                    emptySymbol={<FaStar color='gray' fontSize={'1.5vmax'}/>}
                                    fullSymbol={<FaStar color='tomato' fontSize={'1.5vmax'}/>}
                                    initialRating={item.rating}
                                    readonly
                                />
                           
                            </VStack>

                        </HStack>
                    </Box>
                ))
            }



           

        </>
    )
}

export default Review