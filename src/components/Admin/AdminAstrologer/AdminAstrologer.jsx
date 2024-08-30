import { Avatar, AvatarBadge, Box, Button, Grid, Heading, HStack, IconButton, Tab, Table, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../AdminSideBar/AdminSideBar'
import Header from '../AdminHeader/AdminHeader'
import { MdDelete } from 'react-icons/md'
// import user1 from '../../../assets/team-1.jpg'
// import user2 from '../../../assets/team-2.jpg'
// import user3 from '../../../assets/team-3.jpg'
import user1 from '../../../assets/astrologerImg/astro1.png'
import user2 from '../../../assets/astrologerImg/astro2.png'
import user3 from '../../../assets/astrologerImg/astro3.png'
import { useDispatch, useSelector } from 'react-redux'
import { AdminDeleteAstrologer, AdminLoadAllAstrologer, LoadSingleAstrologerDetails } from '../../../redux/action/AstrologerActions'
import { useNavigate } from 'react-router-dom'

const AdminAstrologer = () => { 
      
  const {  isAstrologerAuthenticated ,allastrologer } = useSelector(
    state => state.astrologerContainer
  );

  const dispatch=useDispatch()
  const navigate=useNavigate() 


  const deleteAstrologerHandler =async (astrologerId) => {
      await dispatch(AdminDeleteAstrologer(astrologerId))
       dispatch(AdminLoadAllAstrologer())  
   
   }
 
   const ShowSingleAstrologerDetails=async (id)=>{
       await dispatch(LoadSingleAstrologerDetails(id))
       navigate('/admin/astrologer/profile')  
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
                    <Heading children={'Astrologer Details'} size={'lg'} m={5} textAlign={'center'} textTransform={'uppercase'} />
                    <TableContainer p={5} w={'100%'}>
                        <Table size='sm' w={'100%'} fontSize={['lg', 'md', 'sm']}>
                            <Thead w={'100%'} >
                                <Tr w={'100%'}>
                                    <Th bg='#162536' color='white' p={3}>S.No</Th>
                                    <Th bg='#162536' color='white'>Profile</Th>
                                    <Th bg='#162536' color='white'>Name</Th>
                                    <Th bg='#162536' color='white'>Phone</Th>
                                    <Th bg='#162536' color='white'>Email</Th>
                                    <Th bg='#162536' color='white'>Rating</Th>
                                    <Th bg='#162536' color='white'>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {allastrologer && allastrologer.map((item,i) => (
                                    <Tr>
                                        <Td>{i+1}</Td>
                                        <Td cursor={'pointer'} onClick={()=>ShowSingleAstrologerDetails(item._id)} >
                                            <Avatar src={item.avatar?.url}>
                                                {/* <AvatarBadge boxSize='1em' bg='red.500' /> */}
                                            </Avatar>
                                        </Td>
                                        <Td>{item.name}</Td>
                                        <Td>{item.phone}</Td>
                                        <Td>{item.email}</Td>
                                        <Td>{item.rating}</Td>
                                        <Td>
                                            <HStack width={'100%'} alignItems={'center'} justifyContent={'center'}>
                                                <IconButton size={'xs'}
                                                    variant='transparent'
                                                    colorScheme='red'
                                                    _hover={{ background: 'white', color: 'red' }}
                                                    icon={<MdDelete size={'xs'} />}
                                                    onClick={()=>deleteAstrologerHandler(item._id)}
                                                />
                                                {/* <Button  size={'sm'}  colorScheme='red' >Active</Button> */}
                                            </HStack>
                                        </Td>
                                    </Tr>
                                ))}

                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Grid>
        </>
    )
}

export default AdminAstrologer