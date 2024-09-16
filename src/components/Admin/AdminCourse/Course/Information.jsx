import { Box, Heading, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import React from 'react'

const Information = ({info,enrolledUsers}) => {
    return (
        <>
            <Box w={'100%'} alignItems={'flex-start'}>
                <VStack w={'100%'} alignItems={'flex-start'} spacing={7}>
                    <Heading fontSize={'1.4rem'} children={'About this course'} />
                    <Text fontSize={'1.1rem'} fontWeight={'400'} children={info} />

                    <Heading fontSize={'1.4rem'} children={`Enrolled Users in the course:`} />
                    <TableContainer p={5} w={'100%'}>
                        <Table size='sm' w={'100%'} fontSize={['lg', 'md', 'sm']}>
                            <Thead w={'100%'} >
                                <Tr w={'100%'}>
                                    <Th bg='#162536' color='white' p={3}>S.No</Th>
                                    <Th bg='#162536' color='white'>Name</Th>
                                    <Th bg='#162536' color='white'>Phone</Th>
                                    <Th bg='#162536' color='white'>Email</Th>
                                    <Th bg='#162536' color='white'>Date</Th>
                                    <Th bg='#162536' color='white'>Price</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {enrolledUsers && enrolledUsers.map((item,i) => (
                                    <Tr key={item._id} >
                                        <Td>{i+1}</Td>                                                                    
                                        <Td>{item.name}</Td>
                                        <Td>{item.phone}</Td>
                                        <Td>{item.email}</Td>
                                        <Td>{item.date}</Td>
                                        <Td>{item.price}</Td>
                                    </Tr>
                                ))}

                            </Tbody>
                        </Table>
                    </TableContainer>

                    
                </VStack >
            </Box>
        </>
    )
}

export default Information