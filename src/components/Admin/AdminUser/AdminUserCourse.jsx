import React from 'react'
import { Avatar, Box, Button, Grid, Heading, HStack, IconButton, Tab, Table, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const AdminUserCourse = ({course}) => {
    
  return (
    <>
    {
         course && course.length>=1?(
            <TableContainer p={5} w={'100%'}>
            <Table size='sm' w={'100%'} fontSize={['lg', 'md', 'sm']}>
                <Thead w={'100%'} >
                    <Tr w={'100%'}>
                        <Th bg='#162536' color='white' p={3}>S.No</Th>
                        {/* <Th bg='#162536' color='white'>Profile</Th> */}
                        <Th bg='#162536' color='white'>Name</Th>
                        <Th bg='#162536' color='white'>Date</Th>
                        <Th bg='#162536' color='white'>Price</Th>
                        <Th bg='#162536' color='white'>Payment_id</Th>
                        {/* <Th bg='#162536' color='white'>Action</Th> */}
                    </Tr>
                </Thead>
                <Tbody>
                    {course && course.map((item,i) => (
                        <Tr key={i}>
                            <Td>{i+1}</Td>
                            <Td>{item?.name}</Td>
                            <Td>{item?.date.split("T")[0]}</Td>
                            <Td>{item?.price}</Td>
                            <Td>{item?.payment_id}</Td>
                          
                        </Tr>
                    ))}
    
                </Tbody>
            </Table>
        </TableContainer>
         ):
         (
            <Text textAlign={'center'} children={' not course'} />

         )
    }

    </>
  )
}

export default AdminUserCourse