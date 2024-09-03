import React, { useEffect, useState } from 'react'
import SideBar from '../AdminSideBar/AdminSideBar'
import Header from '../AdminHeader/AdminHeader'
import { MdDelete } from "react-icons/md"; 
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Box, Button, Grid, Heading, HStack, IconButton, Tab, Table, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios';
import { server } from '../../../main';
import { AdminLoadAllPayment } from '../../../redux/action/PaymentActions';


const AdminTransaction = () => {
//   const [transaction, setTransaction] = useState({}) 
  const {  loading,payment,totalEarnings } = useSelector(
    state => state.paymentContainer
);
console.log(totalEarnings)
const navigate=useNavigate()
const dispatch=useDispatch()

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
    // "_id": "66d6e1f9307f80153b226683",
    // "razorpay_payment_id": "pay_OsecVT5xcS9GOR",
    // "razorpay_order_id": "order_Osebw8Q0bbCzgI",
    // "razorpay_signature": "8bae1d13f88d170221f16da67c984c6e5d1c6285e039bcf7f2ba7e15048eb122",
    // "price": 999,
    // "courseId": "66c7175282713ff44e767ad9",
    // "courseName": "master",
    // "user": "66bee114719dad994f9c1647",
    // "userName": "66bee114719dad994f9c1647",
    // "email": "oo@gmail.com",
    // "phone": 1234567890,
    // "date": "2024-09-03T10:16:25.000Z",
    // "createdAt": "2024-09-03T10:16:25.440Z",
    // "updatedAt": "2024-09-03T10:16:25.440Z",
useEffect(()=>{
    dispatch(AdminLoadAllPayment())
},[])

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
                            <Th bg='#162536' color='white'>price</Th>
                            <Th bg='#162536' color='white'>courseName</Th>
                            <Th bg='#162536' color='white'>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {payment && payment.map((item,i) => (
                            <Tr key={item._id} >
                                <Td>{i+1}</Td>                                   
                                <Td>{item?.userName}</Td>
                                <Td>{item?.phone}</Td>
                                <Td>{item?.email}</Td>
                                <Td>{item?.createdAt.split("T")[0]}</Td>
                                <Td>{item?.razorpay_payment_id}</Td>
                                <Td>{item?.price}</Td>
                                <Td>{item?.courseName}</Td>
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