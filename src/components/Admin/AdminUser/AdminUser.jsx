import { Avatar, Box, Button, Grid, Heading, HStack, IconButton, Tab, Table, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import './AdminUser.css'
import SideBar from '../AdminSideBar/AdminSideBar'
import Header from '../AdminHeader/AdminHeader'
// import user1 from '../../../assets/team-1.jpg'
// import user2 from '../../../assets/team-2.jpg'
// import user3 from '../../../assets/team-3.jpg'
import user1 from '../../../assets/astrologerImg/astro1.png'
import user2 from '../../../assets/astrologerImg/astro2.png'
import user3 from '../../../assets/astrologerImg/astro3.png'

import { MdDelete } from "react-icons/md"; 
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AdminDeleteUser, AdminLoadAllUser, AdminLoadSingleUser } from '../../../redux/action/UserActions'

const AdminUser = () => {
    const {   isAuthenticated ,user,allUser} = useSelector(
		state => state.userContainer
	);
    const dispatch=useDispatch()
    const navigate=useNavigate() 

    const deleteUserHandler =async (userId) => {
        await dispatch(AdminDeleteUser(userId))
         dispatch(AdminLoadAllUser())  
     
     }
     const ShowSingleUserDetails=async (userId)=>{
           await dispatch(AdminLoadSingleUser(userId))
           navigate('/admin/user/profile')  
        } 
  
    const userDetails = [ 
        {
            s_Num: '01',
            name: 'Robin zudu',
            phone: '123456789',
            email: 'xyz@gmail.com',
            avatar: user1,
            meeting: 'hgdjfhcvds',
            course: 'astrologer',
            active: 'jds'
        },
        {
            s_Num: '02',
            name: 'Jennifer wiz',
            phone: '123456789',
            email: 'xyz@gmail.com',
            avatar: user2,
            meeting: 'hgdjfhcvds',
            course: 'astrologer',
            active: 'jds'
        },
        {
            s_Num: '03',
            name: 'swai vivekanad',
            phone: '123456789',
            email: 'xyz@gmail.com',
            avatar: user3,
            meeting: 'hgdjfhcvds',
            course: 'numerlogy course',
            active: 'jds'
        },

    ]

    return (
        <>
            <Header />
            <Grid
                w={"100%"}
                height={"100vh"}
                bgColor={"rgb(247, 247, 247)"}
                gridTemplateColumns={{ base: "1fr", md: "1fr", lg: "1fr 4fr" }}
                gap={"2rem"}
            >
                <SideBar />
                <Box overflowY={"auto"} p={3} w={'100%'}>
                    <Heading children={'User Details'} size={'lg'} m={5} textAlign={'center'} textTransform={'uppercase'} />

                    <TableContainer p={5} w={'100%'}>
                        <Table size='sm' w={'100%'} fontSize={['lg', 'md', 'sm']}>
                            <Thead w={'100%'} >
                                <Tr w={'100%'}>
                                    <Th bg='#162536' color='white' p={3}>S.No</Th>
                                    <Th bg='#162536' color='white'>Profile</Th>
                                    <Th bg='#162536' color='white'>Name</Th>
                                    <Th bg='#162536' color='white'>Phone</Th>
                                    <Th bg='#162536' color='white'>Email</Th>
                                    {/* <Th bg='#162536' color='white'>Course</Th> */}
                                    {/* <Th bg='#162536' color='white'>Meeting</Th> */}
                                    <Th bg='#162536' color='white'>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {allUser && allUser.map((item,i) => (
                                    <Tr key={item._id} >
                                        <Td>{i+1}</Td>                                   
                                        <Td cursor={'pointer'} onClick={()=>ShowSingleUserDetails(item._id)} >
                                            <Avatar name={item.name} src={item.avatar?.url} />
                                        </Td>                                    
                                        <Td>{item.name}</Td>
                                        <Td>{item.phone}</Td>
                                        <Td>{item.email}</Td>
                                        {/* <Td>{item.course}</Td> */}
                                        {/* <Td>{item.meeting}</Td> */}
                                        <Td>
                                            <HStack width={'100%'} alignItems={'center'} justifyContent={'center'}>
                                                <IconButton size={'xs'}
                                                    variant='transparent'
                                                    colorScheme='red'
                                                    _hover={{ background: 'white', color: 'red' }}
                                                    icon={<MdDelete size={'xs'} />}
                                                    onClick={()=>deleteUserHandler(item._id)}
                                                />
                                            </HStack>
                                        </Td>
                                    </Tr>
                                ))}

                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Grid></>
    )
}

export default AdminUser