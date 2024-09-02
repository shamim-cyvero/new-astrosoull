import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiFillFileText } from 'react-icons/ai'
import { FaBasketShopping, FaUser } from 'react-icons/fa6'
import { FaRegUserCircle } from "react-icons/fa";
import { HiMenuAlt4 } from 'react-icons/hi'
import { IoIosPeople } from 'react-icons/io'
import { RiDashboardFill, RiShoppingBag3Fill } from 'react-icons/ri'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoSettings, IoNotifications } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { IoMdHome } from "react-icons/io";
import { FaBlogger } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import logo from '../../../assets/logo-n.png'

import './style.css'
import { LogoutAstrologer } from '../../../redux/action/AstrologerActions';
import { useDispatch } from 'react-redux';

const AdminSideBar = () => {
  const location = useLocation()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const LogoutAstrologerHandler=async()=>{
    await dispatch(LogoutAstrologer())
    navigate('/')
   }
  return (
    <>

      <Box bg={'white'}  boxShadow={'lg'} borderRight={'1px solid gray'} className='scrollBar' display={{ base: 'none', md: 'none', lg: 'block' }} w={'100%'}  p={'1rem'} zIndex={'10'} overflowY={'auto'} __css={{ WebkitScrollSnapType: 'none' }} >
        {/* <Heading size={'lg'} as={'h2'} children={'Dashboard'} /> */}
        <img src={logo} alt="logo" width={'150px'} />
        <Box boxShadow={'lg'} bg={'white'} w={'100%'} m={'1rem 0'} >
          {/* <Heading fontWeight={'500'} letterSpacing={'5px'} border={'1px solid red'} m={'1rem 0'} size={'md'}  as={'h5'} children={'Dashboard'} /> */}
          <VStack bg={'white'} w={'100%'}  alignItems={'flex-start'} >
            <SideBarItem url={'/'} Icon={IoMdHome} location={location} text={'Home'} />
            <SideBarItem url={'/admin/dashboard'} Icon={RiDashboardFill} location={location} text={'Dashboard'} />
            <SideBarItem url={'/admin/course'} Icon={RiShoppingBag3Fill} location={location} text={'Course'} />
            <SideBarItem url={'/admin/astrologer'} Icon={IoIosPeople} location={location} text={'Astrologer'} />
            <SideBarItem url={'/admin/user'} Icon={FaUser} location={location} text={'User'} />
            <SideBarItem url={'/astrologerprofile'} Icon={FaRegUserCircle} location={location} text={'Admin Profile'} />
            <SideBarItem url={'/admin/blog'} Icon={FaBlogger} location={location} text={'Admin Blog'} />
            <SideBarItem url={'/admin/transaction'} Icon={GrTransaction } location={location} text={'All Transaction'} />
            {/* <SideBarItem url={'/admin/notification'} Icon={IoNotifications} location={location} text={'Notification'} /> */}

          </VStack>
          {/* <div className="logoutWrapper"> 
            <div className="logoutBox"> */}
              <Button onClick={() => LogoutAstrologerHandler()} w={'100%'} rightIcon={<IoLogOut />} children={'Logout'} color={'white'} colorScheme='blue' fontSize={'1.2rem'} mt={'8rem'} borderRadius={'none'} />
            {/*  c */}
        </Box>

      </Box>
    </>
  )
}

export default AdminSideBar

const SideBarItem = ({ url, Icon, location, text }) => {
  return (
    <Link style={{ width: '100%' }} placeSelf={'stretch'} to={url} >
      <Button style={{ width: '100%', alignContent: 'flex-start', justifyContent: 'flex-start' }} w={'100%'} size={'lg'} variant='ghost' colorScheme={location.pathname.includes(url) ? 'green' : 'blue'} leftIcon={<Icon />} children={text} />
    </Link>
  )
}