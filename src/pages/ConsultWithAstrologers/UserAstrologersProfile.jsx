import React, { useState } from "react";
import { Avatar, Box, Button, Heading, HStack, List, ListIcon, ListItem, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, VStack } from "@chakra-ui/react";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa6";
import { MdCheckCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { LoadSingleAstrologerDetails, UserCreateAstrologerReview } from "../../redux/action/AstrologerActions";
import { useNavigate } from "react-router-dom";
import UserAstrologersMeeting from "./UserAstrologersMeeting";

const UserAstrologersProfile = () => {
  const [rating, setNewRating] = useState(0)
  const [comment, setComment] = useState("")



  const { loading, isAuthenticated, astrologer, SingleAstrologer } = useSelector(
    state => state.astrologerContainer
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const ReviewHandler = async (e) => {
    e.preventDefault()
    if (rating <= 0) {
      alert('enter raring')
    }

    await dispatch(UserCreateAstrologerReview(rating, comment, SingleAstrologer?._id))
    await dispatch(LoadSingleAstrologerDetails(SingleAstrologer?._id))

    setNewRating(0)
    setComment("")

  }


  return (
    <>
      {
        SingleAstrologer ? (

          <>
            <Stack bgColor={'white'} borderRadius={'10px'} boxShadow='lg' spacing={'10'} w={'80%'} p={'6'} m={'1.5vmax auto'} alignItems={'center'} justifyContent={'flex-start'} direction={{ base: 'column', md: 'row', lg: 'row' }}>
              <Avatar w={'15vmax'} h={'15vmax'} src={SingleAstrologer.avatar?.url} name={SingleAstrologer?.name} >
              
              </Avatar>

              <VStack p={["0", "2"]} spacing={'1'} alignItems={'flex-start'} >
                <Heading letterSpacing={'4px'} fontSize={['1xl', '3xl']} textTransform={'capitalize'} children={SingleAstrologer?.name} />
                <Text children={SingleAstrologer?.expert} fontSize={['.9rem', '1rem']} />
                <HStack >
                
                  <Rating
                    emptySymbol={<FaStar color='gray' />}
                    fullSymbol={<FaStar color='tomato' />}
                    initialRating={SingleAstrologer.rating}
                    readonly
                  />
                  <Button size={'sm'} colorScheme={'whatsapp'} children={SingleAstrologer.rating} cursor={'default'} />
                </HStack>
                {
                  SingleAstrologer && SingleAstrologer.license===true?(

                    <Text children={`₹ ${SingleAstrologer.chargePerMin ? SingleAstrologer.chargePerMin : '00'}/Min`} />
                  ):(
                    <Text children={`License Pending `} />

                  )
                }

                <Text children={astrologer?.email} />

              </VStack>
            </Stack>

          {/* {
            SingleAstrologer && SingleAstrologer.license===true?( */}

            {/* tabs start */}
            
            <Tabs w={'80%'} m={'1vmax auto'} size='md' >
              <TabList p={["0", "4"]}>
                <Tab _selected={{ borderBottom: '3px solid green' }} mr={'2vmax'}>About</Tab>
                <Tab _selected={{ borderBottom: '3px solid green' }}>Review</Tab>
                <Tab _selected={{ borderBottom: '3px solid green' }}>Meeting</Tab>
              </TabList>

              <TabPanels >

                <TabPanel p={["0", "4"]}>
                  <VStack mb={"2vmax"} alignItems={"flex-start"} spacing={"0"}>
                    <Heading m={"1vmax 0"} fontSize={"xl"} children={"Education"} />
                    <List spacing={1}>
                      {SingleAstrologer?.education?.map((item, i) => (
                        <ListItem key={i}>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          {item.edu}
                        </ListItem>
                      ))}
                    </List>
                  </VStack>

                  <VStack mb={"2vmax"} alignItems={"flex-start"} spacing={"0"}>
                    <Heading m={"1vmax 0"} fontSize={"xl"} children={"Experiences"} />
                    <List spacing={1}>
                      {SingleAstrologer?.experience?.map((item, i) => (
                        <ListItem key={i}>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          {item.exp}
                        </ListItem>
                      ))}
                    </List>
                  </VStack>

                  <VStack alignItems={"flex-start"} spacing={"0"}>
                    <Heading m={"1vmax 0"} fontSize={"xl"} children={"About"} />
                    <Text children={SingleAstrologer?.about} />
                  </VStack>
                </TabPanel>



                <TabPanel p={["0", "4"]}>
                  <VStack justifyContent={'center'} alignItems={'center'} >

                    {
                      SingleAstrologer.review && SingleAstrologer.review.map((item) => (
                       
                        <Box w={'100%'} p={5} mb={5} spacing={5} alignItems={'center'} justifyContent={'center'} boxShadow='lg' mt={'10px'} rounded='md' bg='white'>
                          <Heading mb={5} fontSize={'1.3rem'} children={'Comments : '} />
                          <HStack w={'100%'}>
                            <Avatar name={item.avatar} src={item.avatar} size={'lg'} />
                            <VStack w={'100%'} alignItems={'flex-start'} ml={5}>
                              <Heading children={item.name} fontSize={'lg'} color={'#1f3b64'} textTransform={'capitalize'} />
                              <Text children={item.comment} fontSize={'md'} color={'grey'} />
                              <Rating
                                emptySymbol={<FaStar color='gray' />}
                                fullSymbol={<FaStar color='tomato' />}
                                initialRating={item.rating}
                                readonly
                              />
                             
                            </VStack>

                          </HStack>
                        </Box>
                      ))
                    }


                    <form style={{ width: '100%', marginTop: '20px' }} onSubmit={ReviewHandler} >
                      <Heading mb='8px' fontSize={['1rem', '1.5rem']} children={`Give Your Review`} />
                      <Rating
                        emptySymbol={<FaStar color='gray' fontSize={['1rem', '1.5rem']} />}
                        fullSymbol={<FaStar color='tomato' fontSize={['1rem', '1.5rem']} />}
                        initialRating={0}
                        onChange={(rate) => setNewRating(rate)}
                      />
                      <Textarea mt={'1vmax'} value={comment} required cols={'3'} rows={'8'} onChange={(e) => setComment(e.target.value)} />
                      <Button isLoading={loading} type='submit' colorScheme='whatsapp' mt='10px' size={['sm', 'md']} p={'2px 0px'} fontSize={'1.2rem'}>Post review</Button>
                    </form>
                  </VStack>
                </TabPanel>
                
                {
                  SingleAstrologer && SingleAstrologer?.license===true?(

                <TabPanel p={["0", "4"]}>
                  <UserAstrologersMeeting chargePerMin={SingleAstrologer.chargePerMin} SingleAstrologer={SingleAstrologer} />
                </TabPanel>
                  ):(
                    <Text color={'red'} children={'Astrologer License Pending wait for Admin Approval'} />
                  )
                }

              </TabPanels>
            </Tabs>
            
            {/* ):(
              <Text children={'wait for admin'} />
            )
          } */}
          </>
        ) : (
          navigate('/consult')
        )
      }
    </>

  );
};

export default UserAstrologersProfile;
