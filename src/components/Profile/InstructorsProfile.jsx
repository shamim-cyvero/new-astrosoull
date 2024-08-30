import React from 'react'
import astro10 from '../../assets/astrologerImg/astro10.png'

import { Avatar, Box, Button, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import Rating from 'react-rating'
import { FaStar } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';

 

const InstructorsProfile = () => {
  const navigate=useNavigate()
  const profileDetails = [
    {
        image: astro10,
        astroName: 'Mr.Rahull Verma',
        exp: 'Vedic,Relationship,Numerology Hindi,English Exp: 6+ Year',
        rating: 'star',
        totalRating: '4.5',
        appointment: 'Book a Consultation'
    }
   

]
  return (
    <>
      <HStack justifyContent={'space-between'} alignItems={'center'} w={'90%'} m={'0 auto'} flexWrap={'wrap'}  >

          {
            profileDetails && profileDetails.map((item) => (
                <Box cursor={'pointer'} onClick={()=>navigate('/user/instructors/profile')}  key={item.astroName} w={'300px'} m={'20px auto'} p={'10px'} mt={'20px'} borderRadius={'10px'} >
                    <VStack w={'98%'} h={'250px'} alignItems={'center'} justifyContent={'center'} spacing={2} p={'6px 0px'} boxShadow='lg' rounded='md' bg='white'>
                        <Avatar name='Dan Abrahmov' src={item.image} size={'lg'} />
                        <Heading children={item.astroName} color={'#1f3b64'} fontSize={'1.1rem'} mb={'10px'} textAlign={'center'} />
                        <Text children={item.exp} fontSize={'.9rem'} color={'grey'} fontWeight={'400'}textAlign={'center'}  />
                        <HStack spacing={2} textAlign={'center'}>
                            <Rating
                                emptySymbol={<FaStar color='gray' />}
                                fullSymbol={<FaStar color='tomato' />}
                                initialRating={item.totalRating}
                                readonly
                            />
                            <Button colorScheme='whatsapp' variant='solid' size={'xs'} fontSize={'.8rem'}>
                                {item.totalRating}
                            </Button>
                        </HStack>
                        <Button colorScheme='whatsapp' size={'sm'}>{item.appointment}</Button>
                    </VStack>
                </Box>
            ))
          }
      </HStack>
    </>
  )
}

export default InstructorsProfile