import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import top from '../../assets/ConsultWithAstrologersImg/top.jpg'
import InstructorsProfile from '../../components/Profile/InstructorsProfile'
import AstrologersProfile from '../../components/Profile/AstrologersProfile'

const ConsultWithAstrologers = () => {
  return (
    <>
      <Box  w={"100%"} >
        <Image src={top} alt={'top'} w={'100%'} h={{ base: '20vh', md: '40vh', lg: '65vh' }} objectFit={'cover'} />

      </Box>
      <Tabs  size='md' variant='enclosed' w={'90%'} m={'1vmax auto'}>
        <TabList>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }} w={'50%'}>Astrologers</Tab>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }} w={'50%'}>Instructors</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
          <AstrologersProfile />
          </TabPanel>
          <TabPanel>
           <InstructorsProfile /> 
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default ConsultWithAstrologers