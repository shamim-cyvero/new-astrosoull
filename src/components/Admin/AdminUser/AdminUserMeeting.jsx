import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Box, Button, Grid, Heading, HStack, IconButton, Tab, Table, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'

const AdminUserMeeting = ({meeting}) => {
    
  return (
    <>
    {
        meeting && meeting.length>=1?(
            <TableContainer p={5} w={'100%'}>
            <Table size='sm' w={'100%'} fontSize={['lg', 'md', 'sm']}>
                <Thead w={'100%'} >
                    <Tr w={'100%'}>
                        <Th bg='#162536' color='white' p={3}>S.No</Th>
                        <Th bg='#162536' color='white'>Profile</Th>
                        <Th bg='#162536' color='white'>Name</Th>
                        <Th bg='#162536' color='white'>Phone</Th>
                        <Th bg='#162536' color='white'>Email</Th>
                        <Th bg='#162536' color='white'>Date</Th>
                        <Th bg='#162536' color='white'>Price</Th>
                        {/* <Th bg='#162536' color='white'>Action</Th> */}
                    </Tr>
                </Thead>
                <Tbody>
                    {meeting && meeting?.map((item) => (
                        <Tr>
                            <Td>{item.s_Num}</Td>
                            <Link to={'/admin/user/profile'}>
                                <Td>
                                    <Avatar name='Dan Abrahmov' src={item.avatar} />
                                </Td>
                            </Link>
                            <Td>{item.name}</Td>
                            <Td>{item.phone}</Td>
                            <Td>{item.email}</Td>
                            <Td>{item.course}</Td>
                            <Td>{item.meeting}</Td>
                            {/* <Td>
                                <HStack width={'100%'} alignItems={'center'} justifyContent={'center'}>
                                    <IconButton size={'xs'}
                                        variant='transparent'
                                        colorScheme='red'
                                        _hover={{ background: 'white', color: 'red' }}
                                        icon={<MdDelete size={'xs'} />}
                                    />
                                </HStack>
                            </Td> */}
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

export default AdminUserMeeting