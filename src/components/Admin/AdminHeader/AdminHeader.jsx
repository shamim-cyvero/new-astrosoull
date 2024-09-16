import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading, HStack, Input, useDisclosure, VStack } from '@chakra-ui/react'
import React  from 'react'
import './style.css'
import { FaBlogger } from 'react-icons/fa6'
import { IoIosPeople, IoMdHome } from 'react-icons/io'
import { FaRegUserCircle, FaUser } from "react-icons/fa";
import { RiDashboardFill, RiShoppingBag3Fill } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../../../assets/logo-n.png'

const AdminHeader = () => {

    const location = useLocation()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <HStack bg={'white'} w={'100%'} color={'green'} p={4} alignItems={'center'} justifyContent={{ base: 'space-between', md: 'space-between' }} display={{ base: 'flex', md: 'flex', lg: 'none' }}>

            <Button colorScheme='teal' variant='outline' onClick={onOpen}>
                <RxHamburgerMenu size={'xs'} />
            </Button>
            <Box >
                <img src={logo} alt="logo" width={'200px'} />
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton color={'red'} />
                    <DrawerHeader>Welcome Astrologer</DrawerHeader> 

                    <DrawerBody>
                        <VStack w={'100%'} border={'1px solid red'} alignItems={'flex-start'}>
                            <SideBarItem url={'/'} Icon={IoMdHome} location={location} text={'Home'} />
                            <SideBarItem url={'/admin/dashboard'} Icon={RiDashboardFill} location={location} text={'Dashboard'} />
                            <SideBarItem url={'/admin/course'} Icon={RiShoppingBag3Fill} location={location} text={'Course'} />
                            <SideBarItem url={'/admin/astrologer'} Icon={IoIosPeople} location={location} text={'Astrologer'} />
                            <SideBarItem url={'/admin/user'} Icon={FaUser} location={location} text={'User'} />
                            <SideBarItem url={'/astrologerprofile'} Icon={FaRegUserCircle} location={location} text={'Admin Profile'} />
                            <SideBarItem url={'/admin/blog'} Icon={FaBlogger} location={location} text={'Admin Blog'} />
                        
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            <Box className='scrollBar' display={{ base: 'none', md: 'none', lg: 'block' }} border={'1px solid gold'} w={'100%'} bgColor={'white'} p={'1rem'} zIndex={'10'} overflowY={'auto'} __css={{ WebkitScrollSnapType: 'none' }}>
                <Heading size={'lg'} as={'h2'} children={'Dashboard'} />
                <Box w={'100%'} m={'1rem 0'} border={'1px solid blue'}>
                  
                    <VStack w={'100%'} border={'1px solid red'} alignItems={'flex-start'} >
                        <SideBarItem url={'/admin/dashboard'} Icon={RiDashboardFill} location={location} text={'Dashboard'} />
                        <SideBarItem url={'/admin/course'} Icon={RiShoppingBag3Fill} location={location} text={'Course'} />
                        <SideBarItem url={'/admin/astrologer'} Icon={IoIosPeople} location={location} text={'Astrologer'} />
                        <SideBarItem url={'/admin/user'} Icon={FaUser} location={location} text={'User'} />
                        <SideBarItem url={'/admin/adminprofile'} Icon={FaRegUserCircle} location={location} text={'Admin Profile'} />
                        <SideBarItem url={'/admin/blog'} Icon={FaBlogger} location={location} text={'Admin Blog'} />
                       
                    </VStack>
                    <Button w={'100%'} children={'Logout'} color={'white'} colorScheme='blue' fontSize={'1.2rem'} mt={'8rem'} borderRadius={'none'} />
                </Box>

            </Box>
        </HStack>
    )
}

export default AdminHeader

const SideBarItem = ({ url, Icon, location, text }) => {
    return (
        <Link style={{ width: '100%' }} placeSelf={'stretch'} to={url} >
            <Button style={{ width: '100%', alignContent: 'flex-start', justifyContent: 'flex-start' }} w={'100%'} size={'lg'} variant='ghost' colorScheme={location.pathname.includes(url) ? 'green' : 'blue'} leftIcon={<Icon />} children={text} />
        </Link>
    )
}