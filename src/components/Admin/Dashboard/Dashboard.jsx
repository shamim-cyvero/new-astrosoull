import { Avatar, Box, Card, CardBody, Grid, HStack, Heading, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import SideBar from "../AdminSideBar/AdminSideBar";
import Header from "../AdminHeader/AdminHeader";
import { FaUserCircle } from "react-icons/fa";
import { IoIosPeople } from 'react-icons/io'
import { RiShoppingBag3Fill } from 'react-icons/ri'


import './Dashboard.css'
import { BarChart, DoughnutChart } from "../Charts/Chart";
import { BiMaleFemale } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { GrTransaction } from "react-icons/gr";
import { AdminLoadAllPayment } from "../../../redux/action/PaymentActions";
import { AdminLoadUserAndEnrolledUser } from "../../../redux/action/UserActions";
// import DashboardTableTransaction from "../DashboardTable/DashboardTableTransaction";
// import data from '../../../assets/data.json'

  
 

const Dashboard = () => {

  const { allUser,statsData, usersCount,enrolledUsersCount,usersPercentage,enrolledUsersPercentage,usersProfit, enrolledUsersProfit} = useSelector(
		state => state.userContainer
	);
  const {  totalEarnings } = useSelector( state => state.paymentContainer);
  
  const {  isAstrologerAuthenticated ,allastrologer } = useSelector(
    state => state.astrologerContainer
  );
const {  courses } = useSelector((state) => state.courseContainer);
const dispatch=useDispatch()

console.log(statsData)
const data_2 = statsData?.map((item) => item.users);
const data_1 = statsData?.map((item) => item.enrolledUsers);

useEffect(()=>{
  dispatch(AdminLoadAllPayment())
  dispatch(AdminLoadUserAndEnrolledUser())
},[])
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
                  <Heading children={'Total Revenue'} fontSize={'1.5rem'} color={'white'} opacity={'.5'} textTransform={'capitalize'} />
                  <GrTransaction fontSize={'3rem'} color={'white'} opacity={'.3'} />
                </HStack>
                <Text children={totalEarnings?totalEarnings:'000'} fontSize={'2rem'} fontWeight={'700'} color={'white'} />
              </CardBody>
            </Card>

          </HStack>


          <Stack w={'95%'} m={'auto'} spacing={10} alignItems={'center'} justifyContent={'center'} mt={10} mb={5} direction={{ base: 'column', md: 'row' }}>
            {/* Grapgh here */}

            <Box w={{ base: '100%', md: '50%' }} boxShadow='lg' p='6' rounded='md' bg='white'>
              <Heading children={'User chart'} mb={10} fontSize={'2rem'} textTransform={'uppercase'} letterSpacing={'2px'} />
              <BarChart
                data_1={data_1}
                data_2={data_2}
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
           

            <Box w={{base:'100%',md:'100%',lg:'100%'}}>
              <Heading children={'Recent Course'} fontSize={'1.5rem'} mb={5}/>

              <TableContainer rounded='md' boxShadow='lg' bg={'white'} p={5} w={'100%'}>
                <Table size='sm' w={'100%'} fontSize={['lg', 'md', 'sm']}>
                    <Thead w={'100%'} >
                        <Tr  w={'100%'}>
                            <Th p={4} bg='#162536' color='white'>Name</Th>
                            <Th p={4} bg='#162536' color='white'>Category</Th>
                            <Th p={4} bg='#162536' color='white'>Lectures</Th>
                            <Th p={4} bg='#162536' color='white'>Rating</Th>
                            <Th p={4} bg='#162536' color='white'>Price</Th>
                            <Th p={4} bg='#162536' color='white'>Enrolled Users</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {courses && courses.slice(-10).reverse().map((item,i) => (
                            <Tr key={i} >
                                <Td>{item?.name}</Td>
                                <Td>{item?.category}</Td>
                                <Td>{item?.lectures.length}</Td>
                                <Td>{item?.rating}</Td>
                                <Td>{item?.price}</Td>
                                <Td>{item?.enrolledUsers?.length}</Td>
                          
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
