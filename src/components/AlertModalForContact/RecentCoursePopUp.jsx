import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import CourseCard from '../CourseCard/CourseCard';
import { useDispatch, useSelector } from 'react-redux';
import { GetSignleCourseDetails } from '../../redux/action/CourseActions';

const RecentCoursePopUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { loading, course } = useSelector((state) => state.courseContainer);

  const ViewCourseFromLocalStorage = localStorage.getItem('ViewCourse'); 
  const usercartItems = JSON.parse(ViewCourseFromLocalStorage);
//   alert(usercartItems?.id)

  useEffect(() => {
    if (usercartItems?.id) {
      dispatch(GetSignleCourseDetails(usercartItems.id));
    }
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      const timeout = setTimeout(() => {
        onOpen(); // Open the modal when the timer expires
        localStorage.setItem('hasSeenPopup', 'true'); // Set the flag in localStorage
      }, 5000); // Set the timer duration in milliseconds (e.g., 5000ms = 5 seconds)

      return () => clearTimeout(timeout); // Clear the timeout if the component unmounts
    }
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)'/>
        <ModalContent>
          <ModalHeader>Most View Course </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!loading && course ? (
              <CourseCard 
                courseId={course?._id}  
                image={course.banner?.url} 
                name={course?.name} 
                category={course?.category} 
                rating={course?.rating} 
                totalRating={course?.totalRating} 
                price={course?.price} 
              />
            ) : (
              <p>Loading course details...</p>
            )}
          </ModalBody>
          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default RecentCoursePopUp;
