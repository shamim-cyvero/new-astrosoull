import React, { lazy, Suspense } from "react";

const HomeSlider = lazy(() => import("../../components/HomeSlider/HomeSlider"));

const MediaSlHomeSlideride = lazy(() =>
  import("../../components/MediaSlide/MediaSlide")
);

const SimpleCard = lazy(() => import("../../components/SimpleCard/SimpleCard"));

const HindiCourse = lazy(() =>
  import("../../components/HindiCourse/HindiCourse")
);


const EnglishCourse = lazy(() =>
  import("../../components/EnglishCourse/EnglishCourse")
);


const AstroProfile = lazy(() =>
  import("../../components/AstroProfile/AstroProfile")
);


const AstroVedio = lazy(() => import("../../components/AstroVedio/AstroVedio"));

const Testimonial = lazy(() =>
  import("../../components/Testimonial/Testimonial")
);


const Blog = lazy(() => import("../../components/Blog/Blog"));

const RecentCoursePopUp = lazy(() => import("../../components/AlertModalForContact/RecentCoursePopUp"));

const MediaSlide = lazy(() => import("../../components/MediaSlide/MediaSlide"));


import course from "../../assets/courseCardImg/Online.jpg";
import consult from "../../assets/courseCardImg/Consultation.jpg";
import per from "../../assets/courseCardImg/per.jpg";
import { CircularProgress, Stack, useDisclosure } from "@chakra-ui/react";


import axios from "axios";
import {
  GetAllCourseDetails,
  GetSignleCourseDetails,
} from "../../redux/action/CourseActions";
const Home = () => {
 

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
