import { Avatar, Box, Button, Heading, HStack, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa6'
import Rating from 'react-rating'
import { useDispatch, useSelector } from 'react-redux'
import { GetSignleCourseDetails, UserCreateCourseReview } from '../../redux/action/CourseActions'

const Review = ({reviews,CourseRating,courseId}) => {
    const [rating, setNewRating] = useState(0)
    const [comment, setComment] = useState("") 

	const dispatch=useDispatch()
const { loading } = useSelector((state) => state.courseContainer);


    const ReviewHandler=async(e)=>{
        e.preventDefault()
        if(rating<=0){
            alert('enter raring')
        }
     
       await dispatch(UserCreateCourseReview(rating,comment,courseId))
       await dispatch(GetSignleCourseDetails(courseId))     

    }

    return (
        <>
            <Box w={'100%'} p={5} spacing={5} alignItems={'center'} justifyContent={'center'} boxShadow='lg' mt={'10px'} rounded='md' bg='white'>
                <VStack>
                    <Heading children={CourseRating} color={'#22c35e'} />
                    <Rating
                      emptySymbol={<FaStar color='gray' />}
                      fullSymbol={<FaStar color='tomato' />}
                      initialRating={CourseRating}
                        readonly
                    />
                    <Text children={`${reviews.length} Reviews`} />
                </VStack>
            </Box> 
            {
                reviews && reviews.map((item) => (
                    // <Heading mt={10} fontSize={'1.5rem'} children={'Comments'} />
                    <Box key={item._id} w={'100%'} p={5} mb={5} spacing={5} alignItems={'center'} justifyContent={'center'} boxShadow='lg' mt={'10px'} rounded='md' bg='white'>
                        <Heading   mb={5} fontSize={['1rem','1.2rem']} children={'Comments : '} />
                        <HStack w={'100%'}>
                            <Avatar name={item.avatar} src={item.avatar} size={'lg'} />
                            <VStack w={'100%'} alignItems={'flex-start'} ml={5}>
                                <Heading children={item.name} fontSize={'lg'} color={'#1f3b64'} textTransform={'capitalize'}/>
                                <Text children={item.comment} fontSize={'md'} color={'grey'}/>
                                <Rating
                                    emptySymbol={<FaStar color='gray' />}
                                    fullSymbol={<FaStar color='tomato' />}
                                    initialRating={item.rating}
                                    readonly
                                />
                                {/* <Text children={item.rating} fontSize={'md'} /> */}
                            </VStack>

                        </HStack>
                    </Box>
                ))
            }



            <form style={{ width: '100%', marginTop: '20px' }} onSubmit={ReviewHandler} >
                <Heading mb='8px' fontSize={['1rem','1.2rem']} children={`Give Your Review`} />
                <Rating
                      emptySymbol={<FaStar color='gray' fontSize={['1rem','1.2rem']} />}
                      fullSymbol={<FaStar color='tomato' fontSize={['1rem','1.2rem']} />}
                    //   initialRating={0}
                      onChange={(rate) => setNewRating(rate)}
                />
                <Textarea mt={'1vmax'} required cols={'3'} rows={'8'} onChange={(e)=>setComment(e.target.value)} />
                <Button isLoading={loading} type='submit' colorScheme='whatsapp' mt='10px'  size={['sm','md']}   p={'2px 0px'} fontSize={'1.2rem'}>Post review</Button>
            </form>

        </> 
    )
}

export default Review