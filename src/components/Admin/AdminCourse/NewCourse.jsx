import React, { useEffect } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import { Box, Grid } from "@chakra-ui/react";
import SingleCourse from "./Course/SingleCourse";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetSignleCourseDetails } from "../../../redux/action/CourseActions";
const NewCourse = () => {


const { loading, course } = useSelector((state) => state.courseContainer);


  const navigate=useNavigate()
  const dispatch=useDispatch()



  return (
    <>
      <AdminHeader />
      <Grid
        w={"100%"}
        height={"100vh"}
        bgColor={"rgb(247, 247, 247)"}
        gridTemplateColumns={{ base: "1fr", md: "1fr", lg: "1fr 4fr" }}
        gap={"2rem"}
      >
        <AdminSideBar />
        <Box  overflowY={"auto"} p={3}> 
          <SingleCourse />
        </Box>
      </Grid>
    </>
  );
};

export default NewCourse;
