import React, { useState } from 'react'
import pic from '../../../assets/astrouser.png'
import { Box, Button, Checkbox, FormControl, FormLabel, Heading, HStack, Image, Input, Select, Stack, Text, VStack } from '@chakra-ui/react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { signupAstrologer } from '../../../redux/action/AstrologerActions'
import { useDispatch, useSelector } from 'react-redux'

const AstrologerSignup = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const {  loading } = useSelector(state => state.astrologerContainer	);



    const navigate=useNavigate()
  const dispatch=useDispatch()

    const formSubmit =async (e) => {
        e.preventDefault()
       await dispatch(signupAstrologer(name, phone, email, password))
        navigate('/astrologerprofile')
    }
  return (
    <>
    <Stack w={'90%'} m={'40px auto'} alignItems={'center'} justifyContent={'center'} direction={{ base: 'column', md: 'column', lg: 'row' }}>
        <Stack w={'100%'} alignItems={'center'} justifyContent={'center'} direction={{ base: 'column', md: 'column', lg: 'row' }}>
            <Box  w={{ base: '100%', md: '100%', lg: '50%' }} >
                <Image src={pic} alt='pic' w={'100%'} className='rotate-animation'/>
            </Box>

            <VStack w={{ base: '100%', md: '100%', lg: '50%' }} spacing={3}>
                <Heading children={'Astrologer SignUp'} fontSize={'2rem'} />

                <form style={{ width: '90%' }} onSubmit={formSubmit} >
                    <FormControl id="name" >
                        <FormLabel children={'Full Name:'} fontSize={['1.4rem','1.3rem','1.2rem','1rem']} fontWeight={'500'} />
                        <Input type="text" required onChange={(e) => setName(e.target.value)} />
                    </FormControl>

                    <HStack w={'100%'} mt={'10px'}>
                        <Box w={'50%'}>
                            <FormControl id="country"  >
                                <FormLabel fontSize={['1.4rem','1.3rem','1.2rem','1rem']} fontWeight={'500'}>Country:</FormLabel>
                                <Select fontSize={['1.4rem','1.3rem','1.2rem','1rem']} fontWeight={'500'}>
                                    <option value='option1'>India (+91)</option>
                                    {/* <option value='option2'>USA</option> */}
                                </Select>
                            </FormControl>
                        </Box>
                        <Box w={'50%'}>
                            <FormControl id="phone" >
                                <FormLabel fontSize={['1.4rem','1.3rem','1.2rem','1rem']} fontWeight={'500'}>Phone:</FormLabel>
                                <Input type="number" fontSize={['1.4rem','1.3rem','1.2rem','1rem']} fontWeight={'500'} required onChange={(e) => setPhone(e.target.value)}/>
                            </FormControl>
                        </Box>
                    </HStack>

                    <FormControl id="email" mt={'10px'}>
                        <FormLabel children={'Email:'} fontSize={['1.4rem','1.3rem','1.2rem','1rem']} fontWeight={'500'} />
                        <Input type="email" fontSize={['1.4rem','1.3rem','1.2rem','1rem']} fontWeight={'500'} required onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>

                    <FormControl id="password" mt={'10px'}>
                        <FormLabel children={'Password:'} fontSize={['1.4rem','1.3rem','1.2rem','1rem']} fontWeight={'500'} />
                        <Input type="password" fontSize={['1.4rem','1.3rem','1.2rem','1rem']} fontWeight={'500'} required onChange={(e) => setPassword(e.target.value)}/>
                    </FormControl>

                    {/* <FormControl id="retype " mt={'5px'}>
                        <FormLabel children={'Retype Password:'} fontSize={['1.4rem','1.3rem','1.2rem','1rem']} fontWeight={'500'} />
                        <Input type="password" fontSize={['1.4rem','1.3rem','1.2rem','1rem']} fontWeight={'500'} required onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </FormControl> */}

                    <Checkbox defaultChecked mt={'10px'}  size={{base:'md',md:'sm'}} fontSize={['1.4rem','1.3rem','1.2rem','1rem']}>I agree with <span style={{ fontWeight: "700", color: "#1f3b64" }}>terms & conditions</span></Checkbox>

                    <VStack w={'100%'}>
                        <Button isLoading={loading} colorScheme='whatsapp' type='submit' size={'md'} w={'100%'} mt={'20px'} p={'22px 0px'} fontSize={'1.2rem'}>SignUp</Button>
                    </VStack>

                    <Text textAlign={'center'} mt={'15px'} fontWeight={'500'} fontSize={['1.4rem','1.3rem','1.2rem','1rem']}>Already have an Astrologer account? <NavLink to={'/astrologerlogin'} color={'green'} fontWeight={'900'} fontSize={['1.4rem','1.3rem','1.2rem','1rem']}>Login</NavLink></Text>
                </form>
            </VStack>
        </Stack>

    </Stack>
    </>
  )
}

export default AstrologerSignup