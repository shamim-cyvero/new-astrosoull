import React, { useEffect } from 'react'
import astro1 from '../../assets/astrologerImg/astro1.png'
import astro2 from '../../assets/astrologerImg/astro2.png'
import astro3 from '../../assets/astrologerImg/astro3.png'
import astro4 from '../../assets/astrologerImg/astro4.png'
import astro5 from '../../assets/astrologerImg/astro5.png'
import astro6 from '../../assets/astrologerImg/astro6.png'
import astro7 from '../../assets/astrologerImg/astro7.png'
import astro8 from '../../assets/astrologerImg/astro8.png'
import astro9 from '../../assets/astrologerImg/astro9.png'
import astro11 from '../../assets/astrologerImg/astro11.png'
import astro12 from '../../assets/astrologerImg/astro12.png'
import astro13 from '../../assets/astrologerImg/astro13.png'

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
   
  
    const profileDetails = [
        {
            image: astro1,
            astroName: 'Astro Yash',
            exp: 'Vedic, Numerology Exp: 3+ Year',
            rating: 'star',
            totalRating: '4.1',
            appointment: 'Book a Consultation'
        },
        {
            image: astro2,
            astroName: 'Akansha Khandelwal',
            exp: 'Astrology Hindi,English Exp: 5+ Year',
            rating: 'star',
            totalRating: '4.5',
            appointment: 'Book a Consultation'
        },
        {
            image: astro3,
            astroName: 'Priya soull',
            exp: 'Tarot Reading, Numerology, Hindi,English Exp: 3+ Year',
            rating: 'star',
            totalRating: '4',
            appointment: 'Book a Consultation'
        },
        {
            image: astro4,
            astroName: 'Agastya',
            exp: 'Career,Marriage,Relationship,Rarot Reading Hindi,English Exp: 5+ Year',
            rating: 'star',
            totalRating: '4.5',
            appointment: 'Book a Consultation'
        },
        {
            image: astro5,
            astroName: 'Rajendra Mahapatra',
            exp: 'Astrology Hindi,English Exp: 5+ Year',
            rating: 'star',
            totalRating: '4.5',
            appointment: 'Book a Consultation'
        },
        {
            image: astro6,
            astroName: 'Meenakshi',
            exp: 'Relationship Hindi, Exp: 30+ Year',
            rating: 'star',
            totalRating: '4.5',
            appointment: 'Book a Consultation'
        },
        {
            image: astro7,
            astroName: 'Navneet sharma',
            exp: 'Vedic Hindi, Exp: 3+ Year',
            rating: 'star',
            totalRating: '4.1',
            appointment: 'Book a Consultation'
        },
        {
            image: astro8,
            astroName: 'Gaurav Ji',
            exp: 'Psychologist,Vedic,Relationship Hindi,English Exp: 3+ Year',
            rating: 'star',
            totalRating: '4.3',
            appointment: 'Book a Consultation'
        },
        {
            image: astro9,
            astroName: 'Govind Pathak',
            exp: 'Vedic Hindi, Exp: 3+ Year',
            rating: 'star',
            totalRating: '4.3',
            appointment: 'Book a Consultation'
        },
        {
            image: astro11,
            astroName: 'Acharya angad',
            exp: 'Marriage, Pshychologist,Vedic Hindi, Exp: 5+ Year',
            rating: 'star',
            totalRating: '4.3',
            appointment: 'Book a Consultation'
        },
        {
            image: astro12,
            astroName: 'Aditya Mehra',
            exp: 'Chandigarh Hindi Exp: 2+ Year',
            rating: 'star',
            totalRating: '4.3',
            appointment: 'Book a Consultation'
        },
        {
            image: astro13,
            astroName: 'Ajay Pandit',
            exp: 'Vedic,Numerology Hindi,Punjabi Exp: 3+ Year',
            rating: 'star',
            totalRating: '4.3',
            appointment: 'Book a Consultation'
        },
    ]
  
    // onClick={()=>navigate('/user/astrologers/profile')}
  return (
    <> 
      <HStack justifyContent={'space-between'} alignItems={'center'} w={'90%'} m={'0 auto'} flexWrap={'wrap'}  >

{
  allastrologer && allastrologer.map((item) => (
      <Box cursor={'pointer'} onClick={()=>ShowSingleAstrologerDetails(item._id)}  key={item._id} w={'300px'} m={'20px auto'} p={'10px'} mt={'20px'} borderRadius={'10px'} >
          <VStack w={'98%'} h={'250px'} alignItems={'center'} justifyContent={'center'} spacing={2} p={'6px 0px'} boxShadow='lg' rounded='md' bg='white'>
              <Avatar name={item.name} src={item.avatar?.url} size={'lg'} />
              <Heading children={item.name} color={'#1f3b64'} fontSize={'1.1rem'} mb={'10px'} textAlign={'center'} />
              {/* <Text children={'Vedic, Numerology Exp: 3+ Year'} fontSize={'.9rem'} color={'grey'} fontWeight={'400'}textAlign={'center'}  /> */}
            <Text children={`${item.expert?item.expert:'no'} | ${item?.language?item.language:'no'}`} />
              
              <HStack spacing={2} textAlign={'center'}>
                  {/* <Text children={item.rating} /> */}
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
              <Button colorScheme='whatsapp' size={'sm'}>{'Book a Consultation'}</Button>
          </VStack>
      </Box>
  ))
}
</HStack>

    </>
  )
}

export default AstrologersProfile