import React from 'react'
import { Avatar, Box, Button, Grid, Heading, HStack, IconButton, Tab, Table, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import user1 from '../../../assets/astrologerImg/astro1.png'
import user2 from '../../../assets/astrologerImg/astro2.png'
import user3 from '../../../assets/astrologerImg/astro3.png'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom'

const UserCourse = ({course}) => {
    const userDetails = [ 
        {
            name: 'Robin zudu',
            Date: 'date',
            Price: 3434
        },
        {
            name: 'Robin zudu',
            Date: 'date',
            Price: 3434
        },
        {
            name: 'Robin zudu',
            Date: 'date',
            Price: 3434
        },


    ]
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
                    </Tr>
                </Thead>
                <Tbody>
                    {course && course.map((item,i) => (
                        <Tr key={i}>
                            <Td>{i+1}</Td>
    
                            <Td>{item.name}</Td>
                            <Td>{item.course}</Td>
                            <Td>{item.meeting}</Td>
                          
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

export default UserCourse