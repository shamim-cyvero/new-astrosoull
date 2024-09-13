import React from 'react'
import b from './AllCourses.png'
import { Box, HStack, Image } from '@chakra-ui/react'
import CourseCard from '../../../components/CourseCard/CourseCard'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AllCourses = () => {

const { loading, courses } = useSelector((state) => state.courseContainer);
const navigate=useNavigate() 


  return (
    <>
    {
      !loading && courses?(
        <>

        <Box  w={"100%"}  >
            <Image src={b} alt={'img'} w={'100%'}  objectFit={'cover'} />
        </Box>
        <HStack  justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}   >
        {
            courses && courses.map((item,i) => ( 
                <Box key={i} w={'400px'} >

                <CourseCard  courseId={item._id} offer={item.offer} image={item.banner?.url} name={item.name} category={item?.category} rating={item.rating} totalRating={item.rating} price={item.price}/>
                </Box>
            ))
        }
        </HStack>
        </>
      ):(
        navigate('/')
      )
    }
    </>
  )
}

export default AllCourses