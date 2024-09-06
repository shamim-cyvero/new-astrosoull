import { Box, Button, Heading, HStack, Stack, Table, TableContainer, Tbody, Td, Text, Textarea, Th, Thead, Tr, VStack } from '@chakra-ui/react'
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

                    {/* <HStack w={'100%'} flexWrap={{ base: 'wrap', md: 'nowrap' }} spacing={{ base: 0, md: 4 }} alignItems={{ base: 'flex-start', md: 'center' }}>
                        <Heading w={{ base: '100%', md: '30%' }} fontSize={'1.2rem'} children={'Recorded Videos:'} />
                        <Text w={{ base: '100%', md: '70%' }} fontSize={'1.1rem'} children={'East to follow videos to learn at your own pace.'} />
                    </HStack>
                    <HStack w={'100%'} flexWrap={{ base: 'wrap', md: 'nowrap' }} spacing={{ base: 0, md: 4 }} alignItems={{ base: 'flex-start', md: 'center' }}>
                        <Heading w={{ base: '100%', md: '30%' }} fontSize={'1.2rem'} children={'PPTs/PDFs:'} />
                        <Text w={{ base: '100%', md: '70%' }} fontSize={'1.1rem'} children={'Visual slides and materials for better understanding'} />
                    </HStack>
                    <HStack w={'100%'} flexWrap={{ base: 'wrap', md: 'nowrap' }} spacing={{ base: 0, md: 4 }} alignItems={{ base: 'flex-start', md: 'center' }}>
                        <Heading w={{ base: '100%', md: '30%' }} fontSize={'1.2rem'} children={'WhatsApp Group:'} />
                        <Text w={{ base: '100%', md: '70%' }} fontSize={'1.1rem'} children={'Connect with other,ask questions,and discuss.'} />
                    </HStack>
                    <HStack w={'100%'} flexWrap={{ base: 'wrap', md: 'nowrap' }} spacing={{ base: 0, md: 4 }} alignItems={{ base: 'flex-start', md: 'center' }}>
                        <Heading w={{ base: '100%', md: '30%' }} fontSize={'1.2rem'} children={'Quiz/Assignment:'} />
                        <Text w={{ base: '100%', md: '70%' }} fontSize={'1.1rem'} children={`Test your knowledge and practice what you've learned.`} />
                    </HStack>
                    <HStack w={'100%'} flexWrap={{ base: 'wrap', md: 'nowrap' }} spacing={{ base: 0, md: 4 }} alignItems={{ base: 'flex-start', md: 'center' }}>
                        <Heading w={{ base: '100%', md: '30%' }} fontSize={'1.2rem'} children={'Certifiacte:'} />
                        <Text w={{ base: '100%', md: '70%' }} fontSize={'1.1rem'} children={'Receive a certificate upon completion.'} />
                    </HStack>
                    <Text fontSize={'1.1rem'} mt={'5px'} children={'Join us and start your astrology journey today!'} /> */}
                </VStack >
            </Box>
           
            {/* <form style={{ width: '100%', marginTop: '20px' }}>
                <Heading mb='8px' fontSize={'1.5rem'} children={'Comment:'} />
                <Textarea cols={'3'} rows={'5'} />
                <Button colorScheme='whatsapp' mt='10px' size={'md'} w={['50%','50%','25%']}>Post</Button>
            </form> */}


        </>
    )
}

export default Information