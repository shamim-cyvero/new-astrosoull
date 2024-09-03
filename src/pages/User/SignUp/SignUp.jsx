import React, { useState } from 'react'
import pic from '../../../assets/signup-img.png'
import { Box, Button, Checkbox, FormControl, FormLabel, Heading, HStack, Image, Input, Select, Stack, Text, VStack } from '@chakra-ui/react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../../../redux/action/UserActions'

const SignUp = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
  const {  loading } = useSelector(  state => state.userContainer);


  const navigate=useNavigate()
  const dispatch=useDispatch()



    const formSubmit =async (e) => {
        e.preventDefault()
    
        await dispatch(signup(name, phone, email, password))
        navigate('/userprofile')
    }

    return (
        <>
            <Stack w={'90%'} m={'40px auto'} alignItems={'center'} justifyContent={'center'} direction={{ base: 'column', md: 'column', lg: 'row' }}>
                <Stack w={'100%'} alignItems={'center'} justifyContent={'center'} direction={{ base: 'column', md: 'column', lg: 'row' }}>
                    <Box w={{ base: '100%', md: '100%', lg: '50%' }} >
                        <Image src={pic} alt='pic' w={'90%'} />
                    </Box>

                    <VStack w={{ base: '100%', md: '100%', lg: '50%' }} spacing={5}>
                        <Heading children={'SignUp'} fontSize={['1.2rem','1.8rem']}  />

                        <form style={{ width: '90%' }} onSubmit={formSubmit} >
                            <FormControl id="name" >
                                <FormLabel children={'Full Name:'} fontSize={['.9rem','1rem']} fontWeight={'500'} />
                                <Input type="text" required onChange={(e) => setName(e.target.value)} />
                            </FormControl>

                            <HStack w={'100%'} mt={'10px'}>
                                <Box w={'50%'}>
                                    <FormControl id="country"  >
                                        <FormLabel fontSize={['.9rem','1rem']} fontWeight={'500'}>Country:</FormLabel>
                                        <Select fontSize={['.9rem','1rem']} fontWeight={'500'}>
                                            <option value='option1'>India (+91)</option>
                                            {/* <option value='option2'>USA</option> */}
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box w={'50%'}>
                                    <FormControl id="phone" >
                                        <FormLabel fontSize={['.9rem','1rem']} fontWeight={'500'}>Phone:</FormLabel>
                                        <Input type="number" fontSize={['.9rem','1rem']} fontWeight={'500'} required onChange={(e) => setPhone(e.target.value)}/>
                                    </FormControl>
                                </Box>
                            </HStack>

                            <FormControl id="email" mt={'10px'}>
                                <FormLabel children={'Email:'} fontSize={['.9rem','1rem']} fontWeight={'500'} />
                                <Input type="email" fontSize={['.9rem','1rem']} fontWeight={'500'} required onChange={(e) => setEmail(e.target.value)} />
                            </FormControl>

                            <FormControl id="password" mt={'10px'}>
                                <FormLabel children={'Password:'} fontSize={['.9rem','1rem']} fontWeight={'500'} />
                                <Input type="password" fontSize={['.9rem','1rem']} fontWeight={'500'} required onChange={(e) => setPassword(e.target.value)}/>
                            </FormControl>

                            {/* <FormControl id="retype " mt={'5px'}>
                                <FormLabel children={'Retype Password:'} fontSize={['.9rem','1rem']} fontWeight={'500'} />
                                <Input type="password" fontSize={['.9rem','1rem']} fontWeight={'500'} required onChange={(e) => setConfirmPassword(e.target.value)}/>
                            </FormControl> */}

                            {/* <Checkbox defaultChecked mt={'10px'}  size={{base:'md',md:'sm'}} fontSize={['1.4rem','1.3rem','1.2rem','1.1rem']}>I agree with <span style={{ fontWeight: "700", color: "#1f3b64" }}>terms & conditions</span></Checkbox> */}

                            <VStack w={'100%'}>
                                <Button isLoading={loading} colorScheme='whatsapp' type='submit' size={['sm','md']} w={'100%'} mt={'20px'} p={'2px 0px'} fontSize={'1.2rem'}>SignUp</Button>
                            </VStack>

                            <Text textAlign={'center'} mt={'15px'} fontWeight={'500'} fontSize={['.9rem','1rem']}>Already have an account? <NavLink to={'/login'} color={'green'} fontWeight={'900'} fontSize={['.9rem','1rem']}>Login</NavLink></Text>
                            <HStack m={'1vmax 0'} w={'100%'} justifyContent={'center'} alignItems={'center'}>
                                <Button onClick={()=>navigate('/astrologersignup')} alignSelf={'center'} children={'Astrologer SignUp'}  size={['sm','md']} p={'2px 0px'} _hover={{ bg: "#1f3b64", cursor: "pointer",color:'white' }} />
                            </HStack>
                        </form>
                    </VStack>
                </Stack>

            </Stack>
        </>
    )
}

export default SignUp