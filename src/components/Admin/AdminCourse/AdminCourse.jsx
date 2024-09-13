import {
  Box,
  Grid,
  HStack,
  Button,
  Heading, 
} from "@chakra-ui/react";
import React from "react";
import SideBar from "../AdminSideBar/AdminSideBar";
import { Link, useNavigate } from "react-router-dom";
import Header from "../AdminHeader/AdminHeader";
import { FaPlus, FaStar } from "react-icons/fa6";
import pic from '../../../assets/astrologerImg/astro1.png'
import medical from '../../../assets/astrologerImg/astro2.png'
import Coursecard from "./CourseCard";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AdminDeleteCourse, GetAllCourseDetails } from "../../../redux/action/CourseActions";
import { useEffect } from "react";
const AdminCourse = () => {
const { loading, courses } = useSelector((state) => state.courseContainer);

  const navigate = useNavigate();
	const dispatch=useDispatch()


  

useEffect(()=>{
  dispatch(GetAllCourseDetails())

},[])

  return (
    <>
      <Header />
      <Grid
        w={"100%"}
        height={"100vh"}
        bgColor={"rgb(247, 247, 247)"}
        gridTemplateColumns={{ base: "1fr", md: "1fr", lg: "1fr 4fr" }}
        gap={"2rem"}
      >
        <SideBar />
        <Box  overflowY={"auto"} p={3}>

        <Heading children={'Course Details'} size={'lg'} m={5} textAlign={'center'} textTransform={'uppercase'}/>
          <Link to={'/admin/course/addcourse'}>
            <Button rightIcon={<FaPlus />} colorScheme='red' variant='outline' ml={4}>
              Add New Course
            </Button></Link>

          <HStack w={'100%'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'}>
            {courses && courses.map((item) => (


              <Coursecard key={item._id} id={item._id} image={item.banner?.url} name={item.name} category={item.category} rating={item.rating} totalRating={item.rating} price={item.price}  />

            ))
            }

          </HStack>

        </Box>
      </Grid>
    </>

  );
};

export default AdminCourse;
