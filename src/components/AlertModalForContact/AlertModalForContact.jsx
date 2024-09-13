import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import teacher from '../../assets/HindiCourseImg/rahul_verma.png';
import slide1 from '../../assets/EnglishCourseImg/e1.jpg'
import { useDispatch, useSelector } from 'react-redux';


const AlertModalForContact = ({ isOpen, onOpen, onClose }) => {

  const toast = useToast()

  const [name,setName]=useState('')
  const [phone,setPhone]=useState()

	const dispatch=useDispatch()
const { loading, course } = useSelector((state) => state.courseContainer);


  const OverlayTwo = () => (
    <ModalOverlay
   
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
          
          </ModalBody>

        
        </ModalContent>
      </Modal>
    </>
  );
};

export default AlertModalForContact;
