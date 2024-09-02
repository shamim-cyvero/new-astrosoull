import { Avatar, Box, Button, Card, CardBody, Grid, HStack, Heading, Image, Input, InputGroup, InputLeftElement, Progress, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import React from "react";
import SideBar from "../AdminSideBar/AdminSideBar";
import Header from "../AdminHeader/AdminHeader";
import { IoIosTrendingUp } from "react-icons/io";
import { IoMdTrendingDown } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoIosPeople } from 'react-icons/io'
import { RiShoppingBag3Fill } from 'react-icons/ri'
// import pic1 from '../../../assets/team-1.jpg'
// import pic2 from '../../../assets/team-2.jpg'
// import pic3 from '../../../assets/team-3.jpg'
// import pic from '../../../assets/pic.jpg'
import pic1 from '../../../assets/astrologerImg/astro1.png'
import pic2 from '../../../assets/astrologerImg/astro2.png'
import pic3 from '../../../assets/astrologerImg/astro3.png'

import './Dashboard.css'
import { BarChart, DoughnutChart } from "../Charts/Chart";
import { BiMaleFemale } from "react-icons/bi";
import { useSelector } from "react-redux";
import { GrTransaction } from "react-icons/gr";
// import DashboardTableTransaction from "../DashboardTable/DashboardTableTransaction";
// import data from '../../../assets/data.json'

  
 

const Dashboard = () => {

  const {   isAuthenticated ,user,allUser} = useSelector(
		state => state.userContainer
	);
  
  const {  isAstrologerAuthenticated ,allastrologer } = useSelector(
    state => state.astrologerContainer
  );
const {  courses } = useSelector((state) => state.courseContainer);


//   const recentUser = [
//     {
//       avatar: pic1,
//       name: 'Dr rahul kumar',
//       des: 'Astrology has always fascinated humanity, offering a celestial'
//     },
//     {
//       avatar: pic2,
//       name: 'Dr rahul kumar',
//       des: 'Astrology has always fascinated humanity, offering a celestial'
//     },
//     {
//       avatar: pic3,
//       name: 'Dr rahul kumar',
//       des: 'roadmap to understanding our personalities, behaviors, and even destinies. celestial'
//     },
//   ]
//   const userDetails = [ 
//     {
        
//         name: 'Robin zudu',
//         category: 'vastu',
//         date: '2024-08-13',
//         lectures: 34,
//     },
//     {
        
//       name: 'Robin zudu',
//       category: 'vastu',
//       date: '2024-08-13',
//       lectures: 34,
//   },
//   {
        
//     name: 'Robin zudu',
//     category: 'vastu',
//     date: '2024-08-13',
//     lectures: 34,
// },
// {
        
//   name: 'Robin zudu',
//   category: 'vastu',
//   date: '2024-08-13',
//   lectures: 34,
// },
// {
        
//   name: 'Robin zudu',
//   category: 'vastu',
//   date: '2024-08-13',
//   lectures: 34,
// },
// {
        
//   name: 'Robin zudu',
//   category: 'vastu',
//   date: '2024-08-13',
//   lectures: 34,
// },

// {
        
//   name: 'Robin zudu',
//   category: 'vastu',
//   date: '2024-08-13',
//   lectures: 34,
// },

// ]

  return (
    <>
      <Header />
      <Grid w={'100%'} height={'100vh'} gridTemplateColumns={{ base: '1fr', md: '1fr', lg: '1fr 4fr' }} gap={'2rem'} >
        <SideBar />
        <Box bgColor={'rgb(247, 247, 247)'}  overflowY={'auto'} p={3} >

          <Heading children={'Dashboard'} size={'lg'} m={5} textAlign={'center'} textTransform={'uppercase'} />
          <HStack w={'100%'} alignItems={'center'} justifyContent={'center'} spacing={8} flexWrap={'wrap'}>
            <Card boxShadow={'lg'} maxW='400px' w={'100%'} bg={'#3ac475'} >
              <CardBody w={'100%'}>
                <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                  <Heading children={'total users'} fontSize={'1.5rem'} color={'white'} opacity={'.5'} textTransform={'capitalize'} />
                  <FaUserCircle fontSize={'3rem'} color={'white'} opacity={'.3'} />
                </HStack>
                <Text children={allUser?allUser.length:'250'} fontSize={'2rem'} fontWeight={'700'} color={'white'} />
              </CardBody>
            </Card>
            <Card boxShadow={'lg'} maxW='400px' w={'100%'} bg={'#4896ee'} >
              <CardBody w={'100%'}>
                <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                  <Heading children={'Astrologer'} fontSize={'1.5rem'} color={'white'} opacity={'.5'} textTransform={'capitalize'} />
                  <IoIosPeople fontSize={'3rem'} color={'white'} opacity={'.3'} />
                </HStack>
                <Text children={allastrologer?allastrologer.length:'250'} fontSize={'2rem'} fontWeight={'700'} color={'white'} />
              </CardBody>
            </Card>
            <Card boxShadow={'lg'} maxW='400px' w={'100%'} bg={'#e7a717'} >
              <CardBody w={'100%'}>
                <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                  <Heading children={'Course'} fontSize={'1.5rem'} color={'white'} opacity={'.5'} textTransform={'capitalize'} />
                  <RiShoppingBag3Fill fontSize={'3rem'} color={'white'} opacity={'.3'} />
                </HStack>
                <Text children={courses?courses.length:'250'} fontSize={'2rem'} fontWeight={'700'} color={'white'} />
              </CardBody>
            </Card>
            <Card boxShadow={'lg'} maxW='400px' w={'100%'} bg={'#bf2938'} >
              <CardBody w={'100%'}>
                <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                  <Heading children={'Total Amount'} fontSize={'1.5rem'} color={'white'} opacity={'.5'} textTransform={'capitalize'} />
                  <GrTransaction fontSize={'3rem'} color={'white'} opacity={'.3'} />
                </HStack>
                <Text children={courses?courses.length:'250'} fontSize={'2rem'} fontWeight={'700'} color={'white'} />
              </CardBody>
            </Card>

          </HStack>


          <Stack w={'95%'} m={'auto'} spacing={10} alignItems={'center'} justifyContent={'center'} mt={10} mb={5} direction={{ base: 'column', md: 'row' }}>
            {/* Grapgh here */}

            <Box w={{ base: '100%', md: '50%' }} boxShadow='lg' p='6' rounded='md' bg='white'>
              <Heading children={'User chart'} mb={10} fontSize={'2rem'} textTransform={'uppercase'} letterSpacing={'2px'} />
              <BarChart
                data_1={[50, 100, 150, 200, 250, 300]}
                data_2={[350, 400, 450, 500, 550, 600]}
                title_1={'Users enrolled'}
                title_2={'Users'}
                bgColor_1={'#3ac475'}
                bgColor_2={'#4896ee'}
              />
            </Box>

            {/* Recent Astrologer */}
            <Box  w={{ base: '100%', md: '40%' }} >
              <Heading children={'Recent Astrologer'} fontSize={'1.5rem'} />

              {
                allastrologer && allastrologer.slice(-3).reverse().map((item) => (
                    <HStack bg={'white'} boxShadow='lg' w={'100%'}  p={3} alignItems={'center'} mt={5} mb={5}  rounded='md' key={item._id}>
                        <Avatar name={item.name} size={'lg'} src={item.avatar?.url} />
                        <VStack alignItems={'flex-start'} ml={3}>
                            <Heading children={item.name} fontSize={'1rem'} />
                            <Text children={item.email} />
                        </VStack>
                    </HStack>
                ))
              }

            </Box>
          </Stack>



          <Stack w={{base:'90%',md:'95%'}}  spacing={10} justifyContent={'center'} alignItems={'center'}  mt={8} mb={5} direction={{ base: 'column', md: 'row'}}>
            {/* <VStack justifyContent={'center'} alignItems={'center'} w={{base:'80%',md:'60%',lg:'40%'}} border={'1px solid red'} boxShadow='lg' p='2' rounded='lg' bg='white'   >

              <Heading textAlign={'center'} mb={3} fontSize={'2rem'} textTransform={'uppercase'} letterSpacing={'2px'} children={'User Ratio'} />

              <DoughnutChart
                labels={["Female", "Male"]}
                data={[12, 19]}
                backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}

              cutout={{base:'90%',md:'40%',lg:'40%'}}
              />
              <Text fontSize={'2rem'} pos={'absolute'} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'} >
                <BiMaleFemale />
              </Text>
            </VStack> */}

            <Box w={{base:'100%',md:'100%',lg:'100%'}}>
              <Heading children={'Resent Course'} fontSize={'1.5rem'} mb={5}/>

              <TableContainer rounded='md' boxShadow='lg' bg={'white'} p={5} w={'100%'}>
                <Table size='sm' w={'100%'} fontSize={['lg', 'md', 'sm']}>
                    <Thead w={'100%'} >
                        <Tr  w={'100%'}>
                            <Th p={4} bg='#162536' color='white'>Name</Th>
                            <Th p={4} bg='#162536' color='white'>Category</Th>
                            <Th p={4} bg='#162536' color='white'>Lectures</Th>
                            <Th p={4} bg='#162536' color='white'>Rating</Th>
                            <Th p={4} bg='#162536' color='white'>Price</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {courses && courses.slice(-10).reverse().map((item) => (
                            <Tr>
                                <Td>{item?.name}</Td>
                                <Td>{item?.category}</Td>
                                <Td>{item?.lectures.length}</Td>
                                <Td>{item?.rating}</Td>
                                <Td>{item?.price}</Td>
                          
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Stack>
        </Box>
      </Grid>
    </>
  );
};


export default Dashboard;
