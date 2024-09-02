import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import top from '../../assets/ConsultWithAstrologersImg/banner.png'
import InstructorsProfile from '../../components/Profile/InstructorsProfile'
import AstrologersProfile from '../../components/Profile/AstrologersProfile'

const ConsultWithAstrologers = () => {
  return (
    <>
      <Box  w={"100%"} >
        <Image src={top} alt={'top'} w={'100%'} objectFit={'cover'} />

      </Box>
      <Tabs  size='md' variant='enclosed' w={'90%'} m={'1vmax auto'} mt={'40px'}>
        <TabList>
          <Tab _selected={{ color: 'white', bg: '#1f3b64' }} w={'50%'}>Astrologers</Tab>
          <Tab _selected={{ color: 'white', bg: '#1f3b64' }} w={'50%'}>Instructors</Tab>
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