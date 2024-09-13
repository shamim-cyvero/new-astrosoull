import React from 'react'
import b from './Numerology.png'
import { Box, HStack, Image } from '@chakra-ui/react'
import CourseCard from '../../../components/CourseCard/CourseCard'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Numerology = () => {
const { loading, coursesByCate } = useSelector((state) => state.courseContainer);

const navigate=useNavigate() 
  
  return (
    <>
  
      <>
        <Box  w={"100%"}  >
            <Image src={b} alt={'img'} w={'100%'}  objectFit={'cover'} />
        </Box>
        <HStack  justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}   >
        {
            coursesByCate && coursesByCate.map((item,i) => ( 
                <Box key={i} w={'400px'} >
                <CourseCard  courseId={item._id} offer={item.offer} image={item.banner?.url} name={item.name} category={item?.category} rating={item.rating} totalRating={item.rating} price={item.price}/>

                </Box>
            ))
        }
        </HStack>

      </>
     
    </>
  )
}

export default Numerology