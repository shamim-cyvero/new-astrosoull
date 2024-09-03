import React, { useState } from "react";
import astro1 from "../../assets/astrologerImg/astro1.png";
import astro2 from "../../assets/astrologerImg/astro2.png";
import astro3 from "../../assets/astrologerImg/astro3.png";
import astro4 from "../../assets/astrologerImg/astro4.png";
import astro5 from "../../assets/astrologerImg/astro5.png";
import astro6 from "../../assets/astrologerImg/astro6.png";
import astro7 from "../../assets/astrologerImg/astro7.png";
import astro8 from "../../assets/astrologerImg/astro8.png";
import { Avatar, Box, Button, Heading, HStack, List, ListIcon, ListItem, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, VStack } from "@chakra-ui/react";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa6";
import { MdCheckCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { LoadSingleAstrologerDetails, UserCreateAstrologerReview } from "../../redux/action/AstrologerActions";
import { useNavigate } from "react-router-dom";

const UserAstrologersProfile = () => {
  const [rating, setNewRating] = useState(0)
  const [comment, setComment] = useState("") 

  const {  loading, isAuthenticated,astrologer,SingleAstrologer } = useSelector(
		state => state.astrologerContainer
	)
	const dispatch=useDispatch()
  const navigate=useNavigate() 


  const ReviewHandler=async(e)=>{
    e.preventDefault()
    if(rating<=0){
        alert('enter raring')
    }
 
   await dispatch(UserCreateAstrologerReview(rating,comment,SingleAstrologer?._id))
   await dispatch(LoadSingleAstrologerDetails(SingleAstrologer?._id))  

    setNewRating(0)
    setComment("")

}


;

  const profileDetails = [
    {
      image: astro1,
      astroName: "Abhay Sharma",
      exp: "Astrology Hindi,English Exp: 5+ Year",
      rating: "star",
      totalRating: "4.5",
      appointment: "Book a Consultation",
    },
    {
      image: astro2,
      astroName: "Akansha Khandelwal",
      exp: "Astrology Hindi,English Exp: 5+ Year",
      rating: "star",
      totalRating: "4.5",
      appointment: "Book a Consultation",
    },
    {
      image: astro3,
      astroName: "Vishnu Dhanuka",
      exp: "Astrology Hindi,English Exp: 5+ Year",
      rating: "star",
      totalRating: "4.5",
      appointment: "Book a Consultation",
    },
    {
      image: astro4,
      astroName: "Mani Aggarwal",
      exp: "Astrology Hindi,English Exp: 5+ Year",
      rating: "star",
      totalRating: "4.5",
      appointment: "Book a Consultation",
    },
    {
      image: astro5,
      astroName: "Rajendra Mahapatra",
      exp: "Astrology Hindi,English Exp: 5+ Year",
      rating: "star",
      totalRating: "4.5",
      appointment: "Book a Consultation",
    },
    {
      image: astro6,
      astroName: "Acharya Panduranga",
      exp: "Astrology Hindi,English Exp: 5+ Year",
      rating: "star",
      totalRating: "4.5",
      appointment: "Book a Consultation",
    },
    {
      image: astro7,
      astroName: "Revanthi Shridhar",
      exp: "Astrology Hindi,English Exp: 5+ Year",
      rating: "star",
      totalRating: "4.5",
      appointment: "Book a Consultation",
    },
    {
      image: astro8,
      astroName: "Anubhav Gairola",
      exp: "Astrology Hindi,English Exp: 5+ Year",
      rating: "star",
      totalRating: "4.3",
      appointment: "Book a Consultation",
    },
  ];

  // const singleProfile = {
  //   image: astro1,
  //   astroName: "Abhay Sharma",
  //   Specialist:'Astrology | Vastu Specialist',
  //   exp: "Astrology Hindi,English Exp: 5+ Year",
  //   rating: "star",
  //   totalRating: "4.5",
  //   appointment: "Book a Consultation",
  // };
  // const singleProfile = 
  // {
  //   image: astro1,
  //   astroName: 'Mr.Rahull Verma',
  //   exp: 'Vedic,Relationship,Numerology Hindi,English Exp: 6+ Year',
  //   rating: 'star',
  // totalRating: '4.5',
  //   appointment: 'Book a Consultation'    
  // }

  return (
    <>
    {
      SingleAstrologer?(

    <>
        <Stack bgColor={'white'} borderRadius={'10px'} boxShadow='lg' spacing={'10'}  w={'80%'} p={'6'} m={'1.5vmax auto'} alignItems={'center'} justifyContent={'flex-start'} direction={{base:'column',md:'row',lg:'row'}}>
            <Avatar w={'15vmax'} h={'15vmax'} src={SingleAstrologer.avatar?.url} name={SingleAstrologer?.name} >
              {/* <AvatarBadge  bg='tomato' boxSize='.9em' /> */}
            </Avatar>

            <VStack p={2} spacing={'1'}  alignItems={'flex-start'} >
                <Heading letterSpacing={'4px'}  fontSize={['1xl','3xl']} textTransform={'capitalize'} children={SingleAstrologer?.name} />
                <Text children={'Astrology | Vastu Specialist'} fontSize={['.9rem','1rem']}/>
                <HStack >
                    {/* <Rating
                      emptySymbol={<FaStar color='gray' />}
                      fullSymbol={<FaStar color='red' />}
                      /> */}
                    <Rating
                      emptySymbol={<FaStar color='gray' />}
                      fullSymbol={<FaStar color='tomato' />}
                      initialRating={SingleAstrologer.rating}
                      readonly
                    />
                    <Button size={'sm'} colorScheme={'whatsapp'} children={SingleAstrologer.rating} cursor={'default'}/>
                </HStack>
                <Text children={'₹50 / Min'} />

            </VStack>
        </Stack>

        {/* tabs start */}
        <Tabs w={'80%'} m={'1vmax auto'}  size='md' >
        <TabList p={'4'}>
          <Tab _selected={{borderBottom:'3px solid green' }} mr={'2vmax'}>About</Tab>
          <Tab _selected={{borderBottom:'3px solid green' }}>More Details</Tab>
        </TabList>

        <TabPanels >

          <TabPanel p={'4'}>
            <VStack mb={'2vmax'}  alignItems={'flex-start'} spacing={'0'} >
              <Heading m={'1vmax 0'} fontSize={['1xl','xl']} children={'Education'} />
              <List spacing={1}>
                <ListItem fontSize={['.9rem','1rem']}>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                    Associate in Physical Therapy from University of British Columbia
                </ListItem>   
                <ListItem fontSize={['.9rem','1rem']}>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Bachelor of Arts in Psychology from Duke University
                </ListItem>     
                <ListItem fontSize={['.9rem','1rem']}>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Master of Public Health from Cornell University
                </ListItem>            
              </List>
            </VStack>

            <VStack mb={'2vmax'} alignItems={'flex-start'} spacing={'0'} >
              <Heading m={'1vmax 0'} fontSize={['1xl','xl']} children={'Experiences'} />
              <List spacing={1}>
                <ListItem fontSize={['.9rem','1rem']}>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  10 years of experience working with astrolok
                </ListItem>             
              </List>
            </VStack>

            <VStack alignItems={'flex-start'} spacing={'0'} >
              <Heading m={'1vmax 0'} fontSize={['1xl','xl']} children={'About'} />
              <Text fontSize={['.9rem','1rem']} children={`
                Mr. Narendra Umrikar, a globally recognized Indian Vaastu Astrologer with 6+ years of expertise. 
                His journey commenced at Asttrolok, and through dedication and study, he obtained an M.Phil in Vaastu Shastra.
                Now, with over 16 years of experience, he's a cornerstone in the field and a member of the Institute of 
                Vedic Vaastu & Research Foundation, Indore.
                `} 
              />

            </VStack>
          </TabPanel>



          <TabPanel p={'4'}>
            <VStack justifyContent={'center'} alignItems={'center'} >
              {/* <Text children={`
                  Instructor is not available for meetings...
                `} 
              /> */}
              {/*            

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()} // Disable past dates
                inline
                showDisabledMonthNavigation
                withPortal
                
              /> */}
            {
                SingleAstrologer.review && SingleAstrologer.review.map((item) => (
                    // <Heading mt={10} fontSize={'1.5rem'} children={'Comments'} />
                    <Box w={'100%'} p={5} mb={5} spacing={5} alignItems={'center'} justifyContent={'center'} boxShadow='lg' mt={'10px'} rounded='md' bg='white'>
                        <Heading   mb={5} fontSize={'1.3rem'} children={'Comments : '} />
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
                <Heading mb='8px' fontSize={['1rem','1.5rem']} children={`Give Your Review`} />
                <Rating
                      emptySymbol={<FaStar color='gray' fontSize={['1rem','1.5rem']}  />}
                      fullSymbol={<FaStar color='tomato' fontSize={['1rem','1.5rem']}  />}
                      initialRating={0}
                      onChange={(rate) => setNewRating(rate)}
                />
                <Textarea mt={'1vmax'} value={comment} required cols={'3'} rows={'8'} onChange={(e)=>setComment(e.target.value)} />
                <Button isLoading={loading} type='submit' colorScheme='whatsapp' mt='10px' size={['sm','md']} p={'2px 0px'} fontSize={'1.2rem'}>Post review</Button>
            </form>
            </VStack>
          </TabPanel>

        </TabPanels>
      </Tabs>
    </>
      ):(
        navigate('/consult')
      )
    }
    </>
    
  );
};

export default UserAstrologersProfile;
