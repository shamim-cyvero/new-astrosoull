import React, { useEffect } from 'react'
import { Avatar, Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import Rating from 'react-rating'
import { FaStar } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AdminLoadAllAstrologer, LoadSingleAstrologerDetails } from '../../redux/action/AstrologerActions'

const AstrologersProfile = () => {
    const {  isAstrologerAuthenticated ,allastrologer } = useSelector(
        state => state.astrologerContainer
      );
    const navigate=useNavigate()
    const dispatch=useDispatch()
   
   
   
    const ShowSingleAstrologerDetails=async (astrologerId)=>{
       await dispatch(LoadSingleAstrologerDetails(astrologerId))  
       navigate('/user/astrologers/profile')  
       // navigate('/admin/course/single/course') 
    }  

    useEffect(()=>{
        dispatch(AdminLoadAllAstrologer())
    },[])
   
  
  
  
  return (
    <> 
      <HStack justifyContent={'space-between'} alignItems={'center'} w={'90%'} m={'0 auto'} flexWrap={'wrap'}  >

{
  allastrologer && allastrologer.map((item) => (
      <Box cursor={'pointer'} onClick={()=>ShowSingleAstrologerDetails(item._id)}  key={item._id} w={'340px'} m={'20px auto'} p={['0px','10px']} mt={'20px'} borderRadius={'10px'} >
          <VStack w={'100%'}  h={'250px'} alignItems={'center'} justifyContent={'center'} spacing={2} p={'6px 0px'} boxShadow='lg' rounded='md' bg='white'>
              <Avatar name={item.name} src={item.avatar?.url} size={'lg'} />
              <Heading children={item.name} color={'#1f3b64'} fontSize={'1.1rem'} mb={'10px'} textAlign={'center'} />
            
            <Text children={`${item.expert?item.expert:'no'} | ${item?.language?item.language:'no'}`} />
              
              <HStack spacing={2} textAlign={'center'}>
                 
                  <Rating
                      emptySymbol={<FaStar color='gray' />}
                      fullSymbol={<FaStar color='tomato' />}
                      initialRating={item.rating}
                      readonly
                    />
                  <Button colorScheme='whatsapp' variant='solid' size={'xs'} fontSize={'.8rem'} cursor={'default'}>
                      {item.rating}
                  </Button>
                <Text children={`₹ ${item.chargePerMin ? item.chargePerMin : '00'}/Min`} />

              </HStack>
              <Button mt={2} colorScheme='whatsapp' size={'sm'}>{'Book a Meeting'}</Button>
          </VStack>
      </Box>
  ))
}
</HStack>

    </>
  )
}

export default AstrologersProfile