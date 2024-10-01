import React from 'react'
import { Button, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import {  useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { GetSignleCourseDetails } from '../../../redux/action/CourseActions'

const UserCourse = ({course}) => {
   
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const ShowSingleCourseDetails=async (courseId)=>{
        await dispatch(GetSignleCourseDetails(courseId))   
        navigate('/course')  
     } 
  return (
    <>
    {
         course && course.length>=1?(
            <TableContainer p={5} w={'100%'}>
            <Table size='sm' w={'100%'} fontSize={['lg', 'md', 'sm']}>
                <Thead w={'100%'} >
                    <Tr w={'100%'}>
                        <Th bg='#162536' color='white' p={3}>S.No</Th>
                        <Th bg='#162536' color='white'>Name</Th>
                        <Th bg='#162536' color='white'>Date</Th>
                        <Th bg='#162536' color='white'>Price</Th>
                        <Th bg='#162536' color='white'>Payment_id</Th>
                        <Th bg='#162536' color='white'>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {course && course.map((item,i) => (
                        <Tr key={item._id}>
                            <Td>{i+1}</Td>  
                            <Td>{item?.name}</Td>
                            <Td>{item?.date.split("T")[0]}</Td>
                            <Td>{item?.price}</Td>
                            <Td>{item?.payment_id}</Td>
                            <Td>
                                <Button onClick={()=>ShowSingleCourseDetails(item?.courseId)} children={'View'} colorScheme={'whatsapp'} />
                            </Td>
                          
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