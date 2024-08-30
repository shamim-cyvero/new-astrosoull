import React, { useState } from 'react'
import astro10 from "../../assets/astrologerImg/astro10.png";

import { Avatar, AvatarBadge, Button, Heading, HStack, Stack, Text, VStack,Tab, TabList, TabPanel, TabPanels, Tabs, ListItem, List, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from 'react-icons/md';
import Rating  from 'react-rating'
import { FaStar } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './UserInstructorsProfile.css'

const UserInstructorsProfile = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  
  

  const singleProfile = 
    {
      image: astro10,
      astroName: 'Dr.Rahull Verma',
      exp: 'Vedic,Relationship,Numerology Hindi,English Exp: 6+ Year',
      rating: 'star',
    totalRating: '4.5',
      appointment: 'Book a Consultation'    
    }
  
 
  return (
    <>
        <Stack bgColor={'white'} borderRadius={'10px'} boxShadow='lg' spacing={'10'}  w={'80%'} p={'6'} m={'1.5vmax auto'} alignItems={'center'} justifyContent={'flex-start'} direction={{base:'column',md:'row',lg:'row'}}>
            <Avatar  w={'15vmax'} h={'15vmax'} src={singleProfile.image} name={singleProfile.astroName} >
              {/* <AvatarBadge  bg='tomato' boxSize='.9em' /> */}
            </Avatar>

            <VStack p={2} spacing={'1'} alignItems={'flex-start'} >
                <Heading letterSpacing={'4px'}  fontSize={'3xl'} children={singleProfile.astroName} />
                <Text children={singleProfile.Specialist} />
                <HStack >
                    {/* <Rating
                      emptySymbol={<FaStar color='gray' />}
                      fullSymbol={<FaStar color='red' />}
                      /> */}
                    <Rating
                      emptySymbol={<FaStar color='gray' />}
                      fullSymbol={<FaStar color='tomato' />}
                      initialRating={singleProfile.totalRating}
                      readonly
                    />
                    <Button size={'sm'} colorScheme={'whatsapp'} children={singleProfile.totalRating} />
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
              <Heading m={'1vmax 0'} fontSize={'xl'} children={'Education'} />
              <List spacing={1}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                    Associate in Physical Therapy from University of British Columbia
                </ListItem>   
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Bachelor of Arts in Psychology from Duke University
                </ListItem>     
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Master of Public Health from Cornell University
                </ListItem>            
              </List>
            </VStack>

            <VStack mb={'2vmax'} alignItems={'flex-start'} spacing={'0'} >
              <Heading m={'1vmax 0'} fontSize={'xl'} children={'Experiences'} />
              <List spacing={1}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  10 years of experience working with astrolok
                </ListItem>             
              </List>
            </VStack>

            <VStack alignItems={'flex-start'} spacing={'0'} >
              <Heading m={'1vmax 0'} fontSize={'xl'} children={'About'} />
              <Text children={`
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
              <Text children={`
                  Instructor is not available for meetings...
                `} 
              />
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

            </VStack>
          </TabPanel>

        </TabPanels>
      </Tabs>
    </>
  )
}

export default UserInstructorsProfile