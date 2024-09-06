import React, { lazy, Suspense, useEffect } from "react";
// import HomeSlider from "../../components/HomeSlider/HomeSlider";
const HomeSlider = lazy(() => import("../../components/HomeSlider/HomeSlider"));

// import MediaSlHomeSlideride from "../../components/MediaSlide/MediaSlide";
const MediaSlHomeSlideride = lazy(() =>
  import("../../components/MediaSlide/MediaSlide")
);

// import SimpleCard from "../../components/SimpleCard/SimpleCard";
const SimpleCard = lazy(() => import("../../components/SimpleCard/SimpleCard"));

const HindiCourse = lazy(() =>
  import("../../components/HindiCourse/HindiCourse")
);
// import HindiCourse from "../../components/HindiCourse/HindiCourse";

const EnglishCourse = lazy(() =>
  import("../../components/EnglishCourse/EnglishCourse")
);
// import EnglishCourse from "../../components/EnglishCourse/EnglishCourse";

const AstroProfile = lazy(() =>
  import("../../components/AstroProfile/AstroProfile")
);
// import AstroProfile from "../../components/AstroProfile/AstroProfile";

const AstroVedio = lazy(() => import("../../components/AstroVedio/AstroVedio"));
// import AstroVedio from "../../components/AstroVedio/AstroVedio";

const Testimonial = lazy(() =>
  import("../../components/Testimonial/Testimonial")
);
// import Testimonial from "../../components/Testimonial/Testimonial";

const Blog = lazy(() => import("../../components/Blog/Blog"));
// import Blog from "../../components/Blog/Blog";

// import RecentCoursePopUp from "../../components/AlertModalForContact/RecentCoursePopUp";
const RecentCoursePopUp = lazy(() => import("../../components/AlertModalForContact/RecentCoursePopUp"));

const MediaSlide = lazy(() => import("../../components/MediaSlide/MediaSlide"));
// import MediaSlide from "../../components/MediaSlide/MediaSlide";

import course from "../../assets/courseCardImg/Online.jpg";
import consult from "../../assets/courseCardImg/Consultation.jpg";
import per from "../../assets/courseCardImg/per.jpg";
import { CircularProgress, Stack, useDisclosure } from "@chakra-ui/react";
// import AlertModalForContact from "../../components/AlertModalForContact/AlertModalForContact";

import axios from "axios";
import {
  GetAllCourseDetails,
  GetSignleCourseDetails,
} from "../../redux/action/CourseActions";
const Home = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const cousreCardData = [
    {
      img: course,
      title: "Online Courses",
      url: "/all/courses",
    },
    {
      img: consult,
      title: "Online Consultation",
      url: "/consult",
    },
    {
      img: per,
      title: "Personalized Reports",
      url: "",
    },
  ];
  let timeout;
  // function myFunction() {
  //   timeout = setTimeout(alertFunc, 5000);
  // }
  // function alertFunc() {
  //   onOpen()
  // }
  // window.onload = async () => {
  //   timeout = setTimeout(() => onOpen(), 5000);

  // };

  // useEffect(()=>{
  //   dispatch(GetAllCourseDetails())

  // },[])
  // const ViewCourseFromLocalStorage = localStorage.getItem('ViewCourse');
  // const usercartItems=JSON.parse(ViewCourseFromLocalStorage)
  // useEffect(()=>{

  //   dispatch(GetSignleCourseDetails(usercartItems.id))
  // },[])
  return (
    <>
      <Suspense
        fallback={
          <Stack
            w={"100%"}
            h={"100vh"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CircularProgress
              thickness="4px"
              size={"20vmax"}
              isIndeterminate
              color="#e7a717"
            />
          </Stack>
        }
      >
        <>
          <HomeSlider />
          {/* <AlertModalForContact isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
          <RecentCoursePopUp />
          <SimpleCard cousreCardData={cousreCardData} />
          <HindiCourse />
          <EnglishCourse />
          <AstroProfile />
          <MediaSlide />
          <Testimonial />
          <AstroVedio />
          <Blog />
        </>
      </Suspense>
    </>
  );
};

export default Home;
