import React from 'react'
import SideBar from '../AdminSideBar/AdminSideBar'
import Header from '../AdminHeader/AdminHeader'
import { MdDelete } from "react-icons/md"; 
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Box, Button, Grid, Heading, HStack, IconButton, Tab, Table, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'


const AdminTransaction = () => {

    const userDetails = [ 
        {
            s_Num: '01',
            name: 'Robin zudu',
            phone: '123456789',
            email: 'xyz@gmail.com',
            date: '11-11-11',
            tranId: '4234234c324',
        },
        {
            s_Num: '01',
            name: 'Robin zudu',
            phone: '123456789',
            email: 'xyz@gmail.com',
            date: '11-11-11',
            tranId: '4234234c324',
        },

        {
            s_Num: '01',
            name: 'Robin zudu',
            phone: '123456789',
            email: 'xyz@gmail.com',
            date: '11-11-11',
            tranId: '4234234c324',
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
            <Heading children={'All Transaction'} size={'lg'} m={5} textAlign={'center'} textTransform={'uppercase'} />

            <TableContainer p={5} w={'100%'}>
                <Table size='sm' w={'100%'} fontSize={['lg', 'md', 'sm']}>
                    <Thead w={'100%'} >
                        <Tr w={'100%'}>
                            <Th bg='#162536' color='white' p={3}>S.No</Th>
                            {/* <Th bg='#162536' color='white'>Profile</Th> */}
                            <Th bg='#162536' color='white'>Name</Th>
                            <Th bg='#162536' color='white'>Phone</Th>
                            <Th bg='#162536' color='white'>Email</Th>
                            <Th bg='#162536' color='white'>Date</Th>
                            <Th bg='#162536' color='white'>Tran Id</Th>
                            <Th bg='#162536' color='white'>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {userDetails && userDetails.map((item,i) => (
                            <Tr key={item._id} >
                                <Td>{i+1}</Td>                                   
                                <Td>{item.name}</Td>
                                <Td>{item.phone}</Td>
                                <Td>{item.email}</Td>
                                <Td>{item.date}</Td>
                                <Td>{item.tranId}</Td>
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

export default AdminTransaction