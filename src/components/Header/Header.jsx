import {
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Button,
  InputGroup,
  Input,
  InputRightElement,
  Image,
  IconButton,
  Text,
  Icon,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  VStack,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { IoCallOutline, IoMenu } from "react-icons/io5";
import logo from '../../assets/logo-n.png'
import c1 from '../../assets/courseItemImg/c1.png'
import c2 from '../../assets/courseItemImg/c2.png'
import c3 from '../../assets/courseItemImg/c3.png'
import c4 from '../../assets/courseItemImg/c4.png'
import c5 from '../../assets/courseItemImg/c5.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../../redux/action/UserActions";
import { LogoutAstrologer } from "../../redux/action/AstrologerActions";
import { GetAllCourseDetailsByCategory } from "../../redux/action/CourseActions";

const Header = ({ isAuthenticated }) => {
  const [currency, setCurrency] = useState('INR')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const location = useLocation()


  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { loading, isAstrologerAuthenticated } = useSelector(
    state => state.astrologerContainer
  );

  const LogoutHandler = async () => {
    onClose()
    navigate('/')
    await dispatch(LogoutUser())

  }
  const LogoutAstrologerHandler = async () => {
    onClose()
    navigate('/')
    await dispatch(LogoutAstrologer())

  }
  const GetCoureByCategoryHandler = async (key) => {
    await dispatch(GetAllCourseDetailsByCategory(key))
    onClose()
    navigate(`/${key}`)

  }
  const closeMenuOnClick = (url) => {
    navigate(url)
    onClose()

  }

  return (
    <>
      {
        location.pathname.includes('/admin') ? (
          null
        ) : (
          <>

            {/* nav one */}
            <HStack boxShadow={'lg'} p={'2'} w={{ base: '100%', md: '95%', lg: '80%' }} m={'0 auto'} justifyContent={'space-between'} >
              <HStack w={{ base: '60%', md: '40%', lg: '30%' }} justifyContent={'space-between'} >
                <HStack display={{ base: 'none', md: 'none', lg: 'flex' }} justifyContent={'space-between'}  >
                  <Menu w={'50%'}>
                    <MenuButton fontWeight={'400'} fontSize={'1vmax'} as={Button} variant={'Link'} rightIcon={<IoIosArrowDown />}>
                      {currency && currency === 'INR' ? `₹ ${currency}` : `$ ${currency}`}
                    </MenuButton>
                    <MenuList zIndex={'20'}>
                      <MenuItem onClick={() => setCurrency('INR')} borderLeft={currency === 'INR' ? '2px solid green' : ''} >₹  India Rupee</MenuItem>
                      {/* <MenuItem onClick={()=>setCurrency('USD')} borderLeft={currency==='USD'?'2px solid green':''} >$ United States Dollar</MenuItem> */}
                    </MenuList>
                  </Menu>

                  <InputGroup w={'70%'}>
                    <Input placeholder="Search..." />
                    <InputRightElement>
                      <BiSearch fontSize={'1.7vmax'} />
                    </InputRightElement>
                  </InputGroup>
                </HStack>

                <IconButton
                  variant='solid'
                  colorScheme='white'
                  color={'black'}
                  icon={<IoMenu />}
                  display={{ base: 'flex', md: 'flex', lg: 'none' }}
                  onClick={onOpen}
                  fontSize={{ base: '4.5vmax', md: '3.5vmax', lg: '1.5vmax' }}
                />
                <Box display={{ base: 'block', md: 'block', lg: 'none' }} >
                  <Image cursor={'pointer'} onClick={() => navigate('/')} w={{ base: '70%', md: '60%', lg: '10%' }} src={logo} alt="logo" />
                </Box>
              </HStack>

              <HStack w={{ base: '35%', md: '30%', lg: '20%' }} justifyContent={{ base: 'flex-end', md: 'space-between' }} alignItems={'center'}  >
                <Box >
                  <Icon as={BsCart2} boxSize={{ base: 6, md: 7, lg: 5 }} />
                </Box>

                <Box    >
                  <Icon as={FaRegBell} boxSize={{ base: 6, md: 7, lg: 5 }} />
                </Box>
                {/* {
            isAuthenticated && isAuthenticated===true?(
              <>
                <Button onClick={()=>navigate('/userprofile')}  display={{base:'none',md:'none',lg:'block'}} textDecorationStyle={'none'} color={'black'} textDecorationLine={'none'} variant={"link"} children={"Profile"} />
                <Button onClick={()=>LogoutHandler()}  display={{base:'none',md:'none',lg:'block'}} textDecorationStyle={'none'} color={'black'} textDecorationLine={'none'} variant={"link"} children={"Logout"} />             
              </>
            ):(
              <>
                <Button onClick={()=>navigate('/login')}  display={{base:'none',md:'none',lg:'block'}} textDecorationStyle={'none'} color={'black'} textDecorationLine={'none'} variant={"link"} children={"Login"} />
                <Button onClick={()=>navigate('/signup')}  display={{base:'none',md:'none',lg:'block'}} textDecorationStyle={'none'} color={'black'} textDecorationLine={'none'} variant={"link"} children={"Register"} />
              </>
            )
          } */}
                {
                  isAuthenticated ? (
                    <>
                      <Button onClick={() => navigate('/userprofile')} display={{ base: 'none', md: 'none', lg: 'block' }} textDecorationStyle={'none'} color={'black'} textDecorationLine={'none'} variant={"link"} children={"Profile"} />
                      <Button onClick={() => LogoutHandler()} display={{ base: 'none', md: 'none', lg: 'block' }} textDecorationStyle={'none'} color={'black'} textDecorationLine={'none'} variant={"link"} children={"Logout"} />
                    </>
                  ) : isAstrologerAuthenticated ? (
                    <>
                      <Button onClick={() => navigate('/astrologerprofile')} display={{ base: 'none', md: 'none', lg: 'block' }} textDecorationStyle={'none'} color={'black'} textDecorationLine={'none'} variant={"link"} children={"Profile"} />
                      <Button onClick={() => LogoutAstrologerHandler()} display={{ base: 'none', md: 'none', lg: 'block' }} textDecorationStyle={'none'} color={'black'} textDecorationLine={'none'} variant={"link"} children={"Logout"} />
                    </>
                  ) : (
                    <>
                      <Button onClick={() => navigate('/login')} display={{ base: 'none', md: 'none', lg: 'block' }} textDecorationStyle={'none'} color={'black'} textDecorationLine={'none'} variant={"link"} children={"Login"} />
                      <Button onClick={() => navigate('/signup')} display={{ base: 'none', md: 'none', lg: 'block' }} textDecorationStyle={'none'} color={'black'} textDecorationLine={'none'} variant={"link"} children={"Register"} />
                    </>
                  )
                }


                <IconButton
                  isRound={true}
                  variant='solid'
                  colorScheme='whatsapp'
                  icon={<IoCallOutline />}
                  display={{ base: 'none', md: 'flex', lg: 'none' }}
                />

              </HStack>
            </HStack>

            {/* nav two */}
            <Box display={{ base: 'none', md: 'none', lg: 'flex' }} boxShadow={'lg'} bgColor={'#edf8f4'} w={'100%'} pos={'sticky'} top={'0'} zIndex={'10'} p={'1vmax'} >
              <HStack bgColor={'#edf8f4'} p={'2'} w={'90%'} m={'0 auto'} justifyContent={'space-between'} >
                <Box w={'20%'}  >
                  <Image cursor={'pointer'} onClick={() => navigate('/')} w={'100%'} src={logo} alt="logo" />
                </Box>
                <HStack justifyContent={'space-evenly'} alignItems={'center'} w={{ lg: '80%', xl: '60%' }}>
                  <Text cursor={'pointer'} onClick={() => navigate('/')} fontSize={'1.3vmax'} fontWeight={'600'} children={'Home'} />
                  <Text cursor={'pointer'} onClick={() => navigate('/consult')} fontSize={'1.3vmax'} fontWeight={'600'} children={`Consult with Astrologer's`} />
                  <Menu border={'1px solid red'}>
                    <MenuButton fontSize={'1.3vmax'} fontWeight={'600'} as={Button} variant={'Link'} rightIcon={<IoIosArrowDown />}>
                      Courses
                    </MenuButton>
                    <MenuList w={'50%'} >
                      <MenuItem>
                        <HStack onClick={() => GetCoureByCategoryHandler('astrology')} justifyContent={'space-evenly'} alignItems={'center'} >
                          <Box  >
                            <Image w={'50%'} src={c1} alt="c1" />
                          </Box>
                          <Text children={'Astrology '} />

                        </HStack>
                      </MenuItem>

                      <MenuItem>
                        <HStack onClick={() => GetCoureByCategoryHandler('ayurveda')} justifyContent={'space-evenly'} alignItems={'center'}>
                          <Box >
                            <Image w={'50%'} src={c2} alt="c2" />
                          </Box>
                          <Text children={'Ayurveda '} />
                        </HStack>
                      </MenuItem>

                      <MenuItem>
                        <HStack onClick={() => GetCoureByCategoryHandler('numerology')} justifyContent={'space-evenly'} alignItems={'center'}>
                          <Box >
                            <Image w={'50%'} src={c3} alt="c3" />
                          </Box>
                          <Text children={'Numerology'} />

                        </HStack>
                      </MenuItem>

                      <MenuItem>
                        <HStack onClick={() => GetCoureByCategoryHandler('palmistry')} justifyContent={'space-evenly'} alignItems={'center'}>
                          <Box >
                            <Image w={'50%'} src={c4} alt="c4" />
                          </Box>
                          <Text children={'Palmistry'} />

                        </HStack>
                      </MenuItem>

                      <MenuItem>
                        <HStack onClick={() => GetCoureByCategoryHandler('vastu')} justifyContent={'space-evenly'} alignItems={'center'}>
                          <Box >
                            <Image w={'50%'} src={c5} alt="c5" />
                          </Box>
                          <Text children={'Vastu'} />

                        </HStack>
                      </MenuItem>

                    </MenuList>
                  </Menu>
                  <Text cursor={'pointer'} onClick={() => navigate('/blog')} fontSize={'1.3vmax'} fontWeight={'600'} children={'Blog'} />
                  <Text cursor={'pointer'} onClick={() => navigate('/contactus')} fontSize={'1.3vmax'} fontWeight={'600'} children={'Contact Us'} />
                </HStack>
                <Link to={'https://api.whatsapp.com/send?phone=919910464896'} target="_blank">
                  <IconButton isRound={true} variant='solid' colorScheme='whatsapp' fontSize='20px' icon={<IoCallOutline />} />
                </Link>
              </HStack>
            </Box>
          </>
        )
      }


      {/* menu or drawer */}
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Welcome to astrosoull</DrawerHeader>

          <DrawerBody>

            <VStack w={'100%'} spacing={3} justifyContent={'space-evenly'} alignItems={'flex-start'}  >
              <Text w={'100%'} p={1} cursor={'pointer'} onClick={() => closeMenuOnClick('/')} fontSize={'2vmax'} fontWeight={'600'} children={'Home'} />
              <Text w={'100%'} p={1} cursor={'pointer'} onClick={() => closeMenuOnClick('/consult')} fontSize={'2vmax'} fontWeight={'600'} children={`Consult with Astrologer's`} />


              <Accordion w={'100%'} allowToggle>
                <AccordionItem>
                  <AccordionButton borderTop={'none'} m={'1vmax 0'}   >
                    <HStack justifyContent={'space-evenly'} alignItems={'center'} >
                      <Text fontSize={'2vmax'} fontWeight={'500'} children={'Select Course'} />
                      <AccordionIcon fontSize={'3vmax'} />
                    </HStack>
                  </AccordionButton>

                  <AccordionPanel >
                    <VStack w={'100%'} alignItems={'flex-start'} >
                      <HStack onClick={() => GetCoureByCategoryHandler('astrology')} justifyContent={'space-evenly'} alignItems={'center'} >
                        <Box  >
                          <Image w={'35%'} src={c1} alt="c1" />
                        </Box>
                        <Text children={'Astrology'} fontSize={'1rem'} />
                      </HStack>
                      <HStack onClick={() => GetCoureByCategoryHandler('ayurveda')} justifyContent={'space-evenly'} alignItems={'center'}>
                        <Box >
                          <Image w={'35%'} src={c2} alt="c2" />
                        </Box>
                        <Text children={'Ayurveda'} fontSize={'1rem'} />
                      </HStack>
                      <HStack onClick={() => GetCoureByCategoryHandler('numerology')} justifyContent={'space-evenly'} alignItems={'center'}>
                        <Box >
                          <Image w={'35%'} src={c3} alt="c3" />
                        </Box>
                        <Text children={'Numerology'} fontSize={'1rem'} />
                      </HStack>
                      <HStack onClick={() => GetCoureByCategoryHandler('palmistry')} justifyContent={'space-evenly'} alignItems={'center'}>
                        <Box >
                          <Image w={'35%'} src={c4} alt="c4" />
                        </Box>
                        <Text children={'Palmistry'} fontSize={'1rem'} />
                      </HStack>
                      <HStack onClick={() => GetCoureByCategoryHandler('vastu')} justifyContent={'space-evenly'} alignItems={'center'}>
                        <Box >
                          <Image w={'35%'} src={c5} alt="c5" />
                        </Box>
                        <Text children={'Vastu'} fontSize={'1rem'} />
                      </HStack>
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <Text w={'100%'} p={1} cursor={'pointer'} onClick={() => closeMenuOnClick('/blog')} fontSize={'2vmax'} fontWeight={'600'} children={'Blog'} />
              <Text w={'100%'} p={1} cursor={'pointer'} onClick={() => closeMenuOnClick('/contactus')} fontSize={'2vmax'} fontWeight={'600'} children={'Contact Us'} />
            </VStack>

          </DrawerBody>

          <DrawerFooter m={'10vmax 0'} >
            <HStack w={'100%'} justifyContent={'space-evenly'} alignItems={'center'} >
             
              {
                isAuthenticated ? (
                  <>
                    <Button onClick={() => closeMenuOnClick('/userprofile')} textDecorationStyle={'none'} color={'white'} textDecorationLine={'none'} colorScheme="whatsapp" children={"Profile"} />
                    <Button onClick={() => LogoutHandler()} textDecorationStyle={'none'} textDecorationLine={'none'} colorScheme='orange' variant={'outline'} children={"Logout"} />
                  </>
                ) : isAstrologerAuthenticated ? (
                  <>
                    <Button onClick={() => closeMenuOnClick('/astrologerprofile')} textDecorationStyle={'white'} color={'white'} textDecorationLine={'none'} colorScheme="whatsapp" children={"Profile"} />
                    <Button onClick={() => LogoutAstrologerHandler()} textDecorationStyle={'white'} textDecorationLine={'none'} colorScheme='whatsapp' variant={'outline'} children={"Logout"} />
                  </>
                ) : (
                  <>
                    <Button onClick={() => closeMenuOnClick('/login')} textDecorationStyle={'none'} color={'white'} textDecorationLine={'none'} colorScheme="whatsapp" children={"Login"} />
                    <Button onClick={() => closeMenuOnClick('/signup')} textDecorationStyle={'none'} textDecorationLine={'none'} colorScheme='whatsapp' variant={'outline'} children={"Register"} />
                  </>
                )
              }
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};



export default Header;
