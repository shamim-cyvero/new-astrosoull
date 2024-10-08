import React from 'react'
import { Avatar, Box, Button, Grid, Heading, HStack, IconButton, Tab, Table, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import user1 from '../../../assets/astrologerImg/astro1.png'
import user2 from '../../../assets/astrologerImg/astro2.png'
import user3 from '../../../assets/astrologerImg/astro3.png'
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const UserMeeting = ({meeting}) => {

    // console.log(meeting)
  const navigate=useNavigate()
  const {  astrologer } = useSelector(
    state => state.astrologerContainer
);

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
                        <Th bg='#162536' color='white'>Duration</Th>
                        <Th bg='#162536' color='white'>Date</Th>
                        <Th bg='#162536' color='white'>Time</Th>
                        <Th bg='#162536' color='white'>Price</Th>
                        <Th bg='#162536' color='white'>Status</Th>
                        <Th bg='#162536' color='white'>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {meeting && meeting?.map((item,i) => (
                        <Tr key={item._id} >
                            <Td>{i+1}</Td>
                            <Link >
                                <Td>
                                    <Avatar name={item?.astrologerName} src={item?.astrologerAvatar} />
                                </Td>
                            </Link>
                            <Td>{item.astrologerName}</Td>
                            <Td>{item.duration}</Td>
                            <Td>{new Date(item.date).toDateString()}</Td>  
                            <Td>{item.time}</Td>
                            <Td>{item.price}</Td>
                            <Td>
                                {                              
                                item.live === 'Upcoming' ? 'Upcoming' 
                                :item.live === 'live' ? 'Live'
                                :item.live === 'completed'?'Completed':'No status'
                                }
                                {/* {
                                new Date(item.date) > new Date() ? 'Upcoming' 
                                : (new Date(item.date) < new Date() && item.live === 'Completed') ? 'Completed' 
                                : item.live === 'live' ? "Live"
                                : 'Completed'
                                } */}
                                
                            </Td>
                                {/* in dataBase i roomId===astrologer._id */}
                            <Td>

                            {                              
                                item.live === 'Upcoming' ? 'Upcoming' 
                                :item.live === 'live' && item?.attempt===false ? <Button onClick={() => navigate(`/usermeetingjoin/${item?.astrologer}`)} children="Join Meeting" />
                                :item.live === 'completed'?'Completed'
                                :'No status'
                                }
                                 {/* {                              
                                item.attempt===true?'Upcoming' 
                                :item.live === 'live' && item?.attempt===false ? <Button onClick={() => navigate(`/usermeetingjoin/${item?.astrologer}`)} children="Join Meeting" />
                                :item.live === 'completed'?'Completed'
                                :'No status'
                                } */}
                                {/* {item.live === 'live'?(
                                  <Button onClick={() => navigate(`/usermeetingjoin/${item?.astrologer}`)} children="Join Meeting" />
                                ):'wait for astro'
                                } */}


                                {/* {
                                new Date(item.date) > new Date() ? 'Upcoming' 
                                : (new Date(item.date) < new Date() && item.live === 'Completed') ? 'Completed' 
                                : item.live === 'live' ? 
                                  <Button onClick={() => navigate(`/room/${item?._id}`)} children={'Join Meeting'} />
                                  : 'Completed'
                                } */}
                            </Td>
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

export default UserMeeting