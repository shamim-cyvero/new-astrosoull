import React from 'react'
import b from './Astrology.jpg'
import { Box, HStack, Image } from '@chakra-ui/react'
import slide1 from '../../../assets/HindiCourseImg/slide1.jpg'
import slide2 from '../../../assets/HindiCourseImg/slide2.jpg'
import slide3 from '../../../assets/HindiCourseImg/slide3.png'
import slide4 from '../../../assets/HindiCourseImg/slide4.jpg'
import slide5 from '../../../assets/HindiCourseImg//slide5.jpg'
import slide6 from '../../../assets/HindiCourseImg/slide6.jpg'
import CourseCard from '../../../components/CourseCard/CourseCard'
import teacher from '../../../assets/HindiCourseImg/rahul_verma.png'; 
import { useSelector } from 'react-redux'


const Astrology = () => {
const { loading, courses } = useSelector((state) => state.courseContainer);

    const courseDetails = [
        {
            offer: 25,
            image: slide1,
            name: 'Astrology',
            category: 'in Astrology',
            rating: 'rting',
            totalRating: '4.5',
            price: 14999,
            teacher: {
                avatar: teacher,
                name: 'Mr.Rahull Verma.'
            }
        },
        {
            offer: 25,
            image: slide2,
            name: 'Astrology Intermediate Level',
            category: 'in Astrology',
            rating: 'rting',
            totalRating: '4.5',
            price: 14999,
            teacher: {
                avatar: teacher,
                name: 'Mr.Rahull Verma.'
            }
        },
        {
            offer: 25,
            image: slide3,
            name: 'Astrology Advanced Level',
            category: 'in Astrology',
            rating: 'rting',
            totalRating: '4.5',
            price: 14999,
            teacher: {
                avatar: teacher,
                name: 'Mr.Rahull Verma.'
            }
        },
        {
            offer: 25,
            image: slide4,
            name: 'Marriage And Children Astrology',
            category: 'in Astrology',
            rating: 'rting',
            totalRating: '4.5',
            price: 14999,
            teacher: {
                avatar: teacher,
                name: 'Mr.Rahull Verma.'
            }
        },
      

    ]
  return (
    <>
        <Box  w={"100%"}  >
            <Image src={b} alt={'img'} w={'100%'}  objectFit={'contain'} />
        </Box>
        <HStack  justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}   >
        {
            courses && courses.map((item,i) => ( 
                <Box w={'400px'} >
                <CourseCard key={i} courseId={item._id} offer={item.offer} image={item.banner?.url} name={item.name} category={item?.category} rating={item.rating} totalRating={item.rating} price={item.price}/>

                </Box>
            ))
        }
        </HStack>
    </>
  )
}

export default Astrology