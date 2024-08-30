import React from 'react'
import AdminHeader from '../AdminHeader/AdminHeader'
import AdminSideBar from '../AdminSideBar/AdminSideBar'
import { useSelector } from 'react-redux'
import AdminUserMeeting from './AdminUserMeeting'
import AdminUserCourse from './AdminUserCourse'
import { Avatar
	, AvatarBadge, Button, Heading, HStack, Stack, Text, VStack,Tab, TabList, TabPanel, TabPanels, Tabs, ListItem, List, ListIcon, 
  
  Box,
  Grid} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom'

const Admin_userProfile = () => {
  const {  loading, isAuthenticated,SingleUser } = useSelector(
		state => state.userContainer
	);
  const navigate=useNavigate() 


  return (
    <>
   
    {
      SingleUser?(
      <>

      <AdminHeader />  
        <Grid w={'100%'} height={'100vh'} bgColor={'rgb(247, 247, 247)'} gridTemplateColumns={{ base: '1fr', md: '1fr', lg: '1fr 4fr' }} gap={'2rem'} >
          <AdminSideBar/>
          <Box overflowY={'auto'} p={3} >
  
          {/* <Heading children={'User Details'} size={'lg'} m={5} textAlign={'center'} textTransform={'uppercase'}/> */}
  
          <Stack bgColor={'white'} borderRadius={'10px'} boxShadow='lg' spacing={'10'}  w={'80%'} p={'6'} m={'1.5vmax auto'} alignItems={'center'} justifyContent={'flex-start'} direction={{base:'column',md:'row',lg:'row'}}>
            
            {/* Avatar and change Model */}
            <VStack>
              <Avatar  w={'15vmax'} h={'15vmax'} src={SingleUser?.avatar?.url} name={SingleUser?.name} />
            </VStack>
    
            {/* User Details and change Model */}
            <VStack p={2} spacing={'1'} alignItems={'flex-start'} >
                <Heading letterSpacing={'4px'}  fontSize={'3xl'} children={SingleUser?.name} />
                <Text children={SingleUser?.email} />
                <Text children={SingleUser?.phone} />
                <Text children={SingleUser?.address} />
              
            </VStack>
        </Stack>
    
        {/* tabs start */}
        <Tabs w={'80%'} m={'1vmax auto'}  size='md' >
        <TabList p={'4'}>
          <Tab _selected={{borderBottom:'3px solid green' }} mr={'2vmax'}>Meeting</Tab>
          <Tab _selected={{borderBottom:'3px solid green' }}>Course</Tab>
        </TabList>
    
        <TabPanels >
    
          <TabPanel p={'4'}>
           <AdminUserMeeting meeting={SingleUser?.meeting} />
          </TabPanel>
    
          <TabPanel p={'4'}>
            <AdminUserCourse course={SingleUser?.course} />
          </TabPanel>
    
        </TabPanels>
      </Tabs>
          </Box>
        </Grid>
     </>
    ):(
      navigate('/admin/user')
    )
   }
  </>
  )
}

export default Admin_userProfile