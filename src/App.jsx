import { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = lazy(() => import('./pages/Home/Home'));
// import Home from "./pages/Home/Home";

const Header = lazy(() => import('./components/Header/Header'));
// import Header from "./components/Header/Header";

// import Footer from "./components/Footer/Footer";
const Footer = lazy(() => import('./components/Footer/Footer'));

const ContactUs = lazy(() => import('./pages/ContactUs/ContactUs'));
// import ContactUs from "./pages/ContactUs/ContactUs";

const Blog = lazy(() => import('./pages/Blog/Blog'));
// import Blog from "./pages/Blog/Blog";

const ConsultWithAstrologers = lazy(() => import('./pages/ConsultWithAstrologers/ConsultWithAstrologers'));
// import ConsultWithAstrologers from "./pages/ConsultWithAstrologers/ConsultWithAstrologers";

const Login = lazy(() => import('./pages/User/Login/Login'));
// import Login from "./pages/User/Login/Login";

const SignUp = lazy(() => import('./pages/User/SignUp/SignUp'));
// import SignUp from "./pages/User/SignUp/SignUp";

const UserAstrologersProfile = lazy(() => import('./pages/ConsultWithAstrologers/UserAstrologersProfile'));
// import UserAstrologersProfile from "./pages/ConsultWithAstrologers/UserAstrologersProfile";

const UserInstructorsProfile = lazy(() => import('./pages/ConsultWithAstrologers/UserInstructorsProfile'));
// import UserInstructorsProfile from "./pages/ConsultWithAstrologers/UserInstructorsProfile";

const AstrologerLogin = lazy(() => import('./pages/Astrologer/AstrologerLogin/AstrologerLogin'));
// import AstrologerLogin from "./pages/Astrologer/AstrologerLogin/AstrologerLogin";

const AstrologerSignup = lazy(() => import('./pages/Astrologer/AstrologerSignUp/AstrologerSignup'));
// import AstrologerSignup from "./pages/Astrologer/AstrologerSignUp/AstrologerSignup";

const SingleCourse = lazy(() => import('./pages/Course/SingleCourse'));
// import SingleCourse from "./pages/Course/SingleCourse";

const Astrology = lazy(() => import('./pages/Course/Category/Astrology'));
// import Astrology from "./pages/Course/Category/Astrology";

const Ayurveda = lazy(() => import('./pages/Course/Category/Ayurveda'));
// import Ayurveda from "./pages/Course/Category/Ayurveda";

const Numerology = lazy(() => import('./pages/Course/Category/Numerology'));
// import Numerology from "./pages/Course/Category/Numerology";

const Palmistry = lazy(() => import('./pages/Course/Category/Palmistry'));
// import Palmistry from "./pages/Course/Category/Palmistry";

const Vastu = lazy(() => import('./pages/Course/Category/Vastu'));
// import Vastu from "./pages/Course/Category/Vastu";

const Dashboard = lazy(() => import('./components/Admin/Dashboard/Dashboard'));
// import Dashboard from "./components/Admin/Dashboard/Dashboard";

const AdminCourse = lazy(() => import('./components/Admin/AdminCourse/AdminCourse'));
// import AdminCourse from "./components/Admin/AdminCourse/AdminCourse";

const AddCourse = lazy(() => import('./components/Admin/AdminCourse/AddCourse'));
// import AddCourse from "./components/Admin/AdminCourse/AddCourse";

const NewCourse = lazy(() => import('./components/Admin/AdminCourse/NewCourse'));
// import NewCourse from "./components/Admin/AdminCourse/NewCourse";

const AdminAstrologer = lazy(() => import('./components/Admin/AdminAstrologer/AdminAstrologer'));
// import AdminAstrologer from "./components/Admin/AdminAstrologer/AdminAstrologer";

const AdminUser = lazy(() => import('./components/Admin/AdminUser/AdminUser'));
// import AdminUser from "./components/Admin/AdminUser/AdminUser";

const Admin_userProfile = lazy(() => import('./components/Admin/AdminUser/Admin_userProfile'));
// import Admin_userProfile from "./components/Admin/AdminUser/Admin_userProfile";

const AdminProfile = lazy(() => import('./components/Admin/AdminProfile/AdminProfile'));
// import AdminProfile from "./components/Admin/AdminProfile/AdminProfile";

const AdminBlog = lazy(() => import('./components/Admin/AdminBlog/AdminBlog'));
// import AdminBlog from "./components/Admin/AdminBlog/AdminBlog";

const AddBlog = lazy(() => import('./components/Admin/AdminBlog/AddBlog'));
// import AddBlog from "./components/Admin/AdminBlog/AddBlog";

const NewBlog = lazy(() => import('./components/Admin/AdminBlog/NewBlog'));
// import NewBlog from "./components/Admin/AdminBlog/NewBlog";

const AdminNotification = lazy(() => import('./components/Admin/AdminNotification/AdminNotification'));
// import AdminNotification from "./components/Admin/AdminNotification/AdminNotification";

const AdminSetting = lazy(() => import('./components/Admin/AdminSetting/AdminSetting'));
// import AdminSetting from "./components/Admin/AdminSetting/AdminSetting";

const UserProfile = lazy(() => import('./pages/User/Profile/UserProfile'));
// import UserProfile from "./pages/User/Profile/UserProfile";

const AstrologerProfile = lazy(() => import('./pages/Astrologer/AstrologerProfile/AstrologerProfile'));
// import AstrologerProfile from "./pages/Astrologer/AstrologerProfile/AstrologerProfile";

const AllCourses = lazy(() => import('./pages/Course/Category/AllCourses'));
// import AllCourses from "./pages/Course/Category/AllCourses";

const AdminAstrologerProfile = lazy(() => import('./components/Admin/AdminAstrologer/AdminAstrologerProfile'));
// import AdminAstrologerProfile from "./components/Admin/AdminAstrologer/AdminAstrologerProfile";

const PaymentSuccess = lazy(() => import('./components/Payment/PaymentSuccess/PaymentSuccess'));
// import PaymentSuccess from "./components/Payment/PaymentSuccess/PaymentSuccess";

const AdminTransaction = lazy(() => import('./components/Admin/AdminTransaction/AdminTransaction'));
// import AdminTransaction from "./components/Admin/AdminTransaction/AdminTransaction";

import { useDispatch, useSelector } from "react-redux";
import { AdminLoadAllUser, LoadUser } from "./redux/action/UserActions";
import { CircularProgress, Stack, Text } from "@chakra-ui/react";
import { Toaster } from 'react-hot-toast';
import { AdminLoadAllAstrologer, LoadAstrologer } from "./redux/action/AstrologerActions";
import { GetAllCourseDetails } from "./redux/action/CourseActions";


function App() {


  const {  loading, isAuthenticated } = useSelector(
		state => state.userContainer
	);
  
  const {  isAstrologerAuthenticated ,allastrologer } = useSelector(
    state => state.astrologerContainer
  );

  // const navigate=useNavigate()


	const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(LoadUser())
    dispatch(AdminLoadAllUser())
    dispatch(LoadAstrologer())
    dispatch(GetAllCourseDetails())
    dispatch(AdminLoadAllAstrologer())
  //    const ViewCourseFromLocalStorage = localStorage.getItem('ViewCourse'); 
  // const usercartItems=JSON.parse(ViewCourseFromLocalStorage)
  
  },[])

  return (
    <>
      <BrowserRouter>
      <Header isAuthenticated={isAuthenticated}/>
      <Suspense fallback={
          		<Stack w={'100%'} h={'100vh'} justifyContent={'center'} alignItems={'center'} >
          		  <CircularProgress thickness="4px" size={'20vmax'} isIndeterminate color="#e7a717" />
          		</Stack>
        		}
      >
          
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"contactus"} element={<ContactUs />} />
          <Route path={"blog"} element={<Blog />} />
          <Route path={"consult"} element={<ConsultWithAstrologers />} />

          <Route path={"login"} element={<Login />} />
          <Route path={"signup"} element={<SignUp />} />
          <Route path={"userprofile"} element={<UserProfile />} />
          {/* <Route path={"userprofile"} element={isAuthenticated?<UserProfile />:<Navigate to={'/login'} />} /> */}

          <Route path={"astrologerlogin"} element={<AstrologerLogin />} />
          <Route path={"astrologersignup"} element={<AstrologerSignup />} />
          <Route path={"astrologerprofile"} element={<AstrologerProfile />} />
          {/* <Route path={"astrologerprofile"} element={isAstrologerAuthenticated?<AstrologerProfile />:<Navigate to={'/astrologerlogin'} /> } /> */}

          <Route path='/paymentsuccess' element={<PaymentSuccess />} />


          <Route
            path={"user/astrologers/profile"}
            element={<UserAstrologersProfile />}
          />
          <Route
            path={"user/instructors/profile"}
            element={<UserInstructorsProfile />}
          />

          <Route path={"/course"} element={<SingleCourse />} />

          <Route path={"/astrology"} element={<Astrology />} />
          <Route path={"/ayurveda"} element={<Ayurveda />} />
          <Route path={"/numerology"} element={<Numerology />} />
          <Route path={"/palmistry"} element={<Palmistry />} />
          <Route path={"/vastu"} element={<Vastu />} />
          <Route path={"/all/courses"} element={<AllCourses />} />

          <Route path="/admin/dashboard" element={<Dashboard />} />

          <Route path="/admin/course" element={<AdminCourse />} />
          <Route path="/admin/course/addcourse" element={<AddCourse />} />
          {/* <Route path={"/admin/course/single/course"} element={<SingleCourse />} /> */}
          <Route
            path="/admin/course/addcourse/newcourse"
            element={<NewCourse />}
          />

          <Route path="/admin/astrologer" element={<AdminAstrologer />} />
          <Route path="/admin/astrologer/profile" element={<AdminAstrologerProfile />} />
          <Route path="/admin/user" element={<AdminUser />} />
          <Route path="/admin/user/profile" element={<Admin_userProfile />} />
          <Route path="/admin/adminprofile" element={<AdminProfile />} />

          <Route path="/admin/blog" element={<AdminBlog />} />
          <Route path="/admin/blog/addblog" element={<AddBlog />} />
          <Route path="/admin/blog/addblog/newblog" element={<NewBlog />} />

          <Route path="/admin/transaction" element={<AdminTransaction />} />
          <Route path="/admin/notification" element={<AdminNotification />} />
          <Route path="/admin/setting" element={<AdminSetting />} />
        </Routes>      
        
     </Suspense>
        <Footer />

			<Toaster />

        
      </BrowserRouter>
    </>
  );
}

export default App;
