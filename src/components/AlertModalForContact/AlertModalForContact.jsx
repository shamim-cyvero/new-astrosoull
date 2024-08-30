import {
  Button,
  HStack,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';
// import { server } from '../..';
import teacher from '../../assets/HindiCourseImg/rahul_verma.png';
import slide1 from '../../assets/EnglishCourseImg/e1.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { GetSignleCourseDetails } from '../../redux/action/CourseActions';

const AlertModalForContact = ({ isOpen, onOpen, onClose }) => {

  const toast = useToast()

  const [name,setName]=useState('')
  const [phone,setPhone]=useState()
  // const [loading, setloading] = useState(false);

	const dispatch=useDispatch()
const { loading, course } = useSelector((state) => state.courseContainer);





  // const contactHandler=async ()=>{
  //   try {
      
  //     if(!name||!phone){
  //        return alert('both value required')
  //     }
  //     if(phone.length===10){
  //       setloading(true);
      
  //      const {data}= await axios.post(`${server}/contact/email`,
  //         {phone,name},
  //         {
  //           headers:{
  //             "Content-Type":"Application/json"
  //           },
  //           withCredentials:true

  //         }
  //       )
  //         setPhone('')
  //         setName('')
  //         setloading(false);
  //         onClose()
        
  //         toast({
  //           title: data.message,
  //           description: "Agent Reach out Soon",
  //           status: 'success',
  //           duration: 6000,
  //           isClosable: true,
  //         })
  //     }else{
  //       setloading(false);
  //       return alert('Enter Valid Phone Number')
  //     }
 
  //   } catch (error) {
  //     return console.log(error)
  //   }
     
  // }
  const OverlayTwo = () => (
    <ModalOverlay
    //   bg="none"
    //   backdropFilter="auto"
    //   backdropInvert="80%"
    //   backdropBlur="2px"
           bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  );

  const courseDetails = 
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
    }

  
    // const ViewCourseFromLocalStorage = localStorage.getItem('ViewCourse'); 
    // const usercartItems=JSON.parse(ViewCourseFromLocalStorage)
// useEffect(()=>{

//   dispatch(GetSignleCourseDetails(usercartItems.id))
// },[])



  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)'/>
        <ModalContent>
          <ModalHeader>
            <Heading fontWeight={'500'} letterSpacing={'5px'}  textAlign={'center'} children={'New Course '} />
          </ModalHeader>
          <ModalCloseButton color={'green'} />

          <ModalBody>
            <CourseCard  courseId={course._id} offer={course.offer} image={course.banner?.url} name={course.name} category={course?.category} rating={course.rating} totalRating={course.rating} price={course.price} />
            {/* <CourseCard offer={courseDetails.offer} image={courseDetails.image} name={courseDetails.name} category={courseDetails.category} rating={courseDetails.rating} totalRating={courseDetails.totalRating} price={courseDetails.price} teacherName={courseDetails.teacher.name} teacherImg={courseDetails.teacher.avatar} /> */}
          </ModalBody>

          {/* <ModalFooter>
            <HStack w={'100%'} justifyContent={'center'}>
                <Button letterSpacing={'2px'} colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                </Button>
          
          <Button isLoading={loading} letterSpacing={'2px'} _hover={{bgColor:'#00B66E'}} bgColor={'#00B98E'} color={'white'}  onClick={()=>contactHandler()}>Contact Now</Button>
            </HStack>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AlertModalForContact;
