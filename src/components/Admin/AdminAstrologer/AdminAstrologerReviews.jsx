import React from 'react'
import { Avatar, Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { useDispatch } from 'react-redux';
import { AdminDeleteAstrologerReview, LoadSingleAstrologerDetails } from '../../../redux/action/AstrologerActions';

const AdminAstrologerReviews = ({ review,loading,astrologerId }) => {
    // const {  loading, isAuthenticated,astrologer } = useSelector(
	// 	state => state.astrologerContainer
	// );

    const dispatch=useDispatch()


    const deleteReviewHandler =async (reviewId) => {
        
        await dispatch(AdminDeleteAstrologerReview(reviewId,astrologerId))
         dispatch(LoadSingleAstrologerDetails(astrologerId))     
     }
    
  return (
    <>
    {
               review && review.map((item) => (
                   // <Heading mt={10} fontSize={'1.5rem'} children={'Comments'} />
                   <Box w={'100%'} p={5} mb={5} spacing={5} alignItems={'center'} justifyContent={'center'} boxShadow='lg' mt={'10px'} rounded='md' bg='white'>
                       <Heading   mb={5} fontSize={'1.3rem'} children={'Comments : '} />
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
                               {/* <Text children={item.rating} fontSize={'md'} /> */}
                           </VStack>

                       </HStack>
                   </Box>
               ))
           }
   </>
  )
}

export default AdminAstrologerReviews