import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Box, Button, Grid, Heading, HStack, IconButton, Tab, Table, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'

const AdminAstrologerMeeting = ({meetings}) => {
  return (
    <>
    {
        meetings && meetings.length>=1?(
            <TableContainer p={5} w={'100%'}>
            <Table size='sm' w={'100%'} fontSize={['lg', 'md', 'sm']}>
                <Thead w={'100%'} >
                    <Tr w={'100%'}>
                        <Th bg='#162536' color='white' p={3}>S.No</Th>
                        <Th bg='#162536' color='white'>Profile</Th>
                        <Th bg='#162536' color='white'>Name</Th>
                        <Th bg='#162536' color='white'>Duration</Th>
                        <Th bg='#162536' color='white'>Date</Th>
                        <Th bg='#162536' color='white'>Time</Th>
                        <Th bg='#162536' color='white'>Price</Th>
                        <Th bg='#162536' color='white'>Payment_id</Th>
                        <Th bg='#162536' color='white'>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {meetings && meetings?.map((item,i) => (
                        <Tr key={item._id} >
                            <Td>{i+1}</Td>
                            <Link to={'/admin/user/profile'}>
                                <Td>
                                    <Avatar name={item?.userName} src={item?.userAvatar} />
                                </Td>
                            </Link>
                            <Td>{item.userName}</Td>
                            <Td>{item.duration}</Td>
                            <Td>{new Date(item.date).toDateString()}</Td>
                            <Td>{item.time}</Td>
                            <Td>{item.price}</Td>
                            <Td>{item.razorpay_payment_id}</Td>
                            <Td>Complete</Td>
                        </Tr>
                    ))}
    
                </Tbody>
            </Table>
        </TableContainer>
        ):(
        <Text textAlign={'center'} children={' not meeting'} />

        )
    }
    
 
    </>
  )
}

export default AdminAstrologerMeeting