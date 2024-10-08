import React, { useState } from 'react'
import './AstrologerLogin.css'
import { Box, Button, Checkbox, FormControl, FormLabel, Heading, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import pic from '../../../assets/astrouser.png'
import { useDispatch, useSelector } from 'react-redux'
import { LoginAstrologer } from '../../../redux/action/AstrologerActions'


const AstrologerLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")  
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {  loading ,isAstrologerAuthenticated} = useSelector(state => state.astrologerContainer	);
    // const {  isAstrologerAuthenticated ,allastrologer } = useSelector(
    //     state => state.astrologerContainer
    //   );

    const formSubmit = async (e) => {
        e.preventDefault()
        await dispatch(LoginAstrologer(email, password))
        navigate('/astrologerprofile')
    }
    return (
        <>
        {
            isAstrologerAuthenticated===false?(
        <>
            <Stack w={'90%'} m={'40px auto'} alignItems={'center'} justifyContent={'center'} direction={{ base: 'column', md: 'column', lg: 'row' }}>
                <Stack w={'100%'} alignItems={'center'} justifyContent={'center'} direction={{ base: 'column', md: 'column', lg: 'row' }}>
                    <Box w={{ base: '100%', md: '100%', lg: '50%' }} >
                        <Image src={pic} alt='pic' w={'100%'} className='rotate-animation' />
                    </Box>

                    <VStack w={{ base: '100%', md: '100%', lg: '50%' }} spacing={3}>
                        <Heading children={' Astrologer Login '} fontSize={['1.2rem', '1.8rem']} />

                        <form style={{ width: '90%' }} onSubmit={formSubmit}>
                            <FormControl id="email" mt={'10px'}>
                                <FormLabel children={'Email:'} fontSize={['.9rem', '1rem']} fontWeight={'500'} />
                                <Input type="email" fontSize={['.9rem', '1rem']} fontWeight={'500'} required onChange={(e) => setEmail(e.target.value)} />
                            </FormControl>

                            <FormControl id="password" mt={'10px'}>
                                <FormLabel children={'Password:'} fontSize={['.9rem', '1rem']} fontWeight={'500'} />
                                <Input type="password" fontSize={['.9rem', '1rem']} fontWeight={'500'} required onChange={(e) => setPassword(e.target.value)} />
                            </FormControl>

                            <VStack w={'100%'}>
                                <Button isLoading={loading} colorScheme='whatsapp' type='submit' size={['sm', 'md']} w={'100%'} mt={'20px'} p={'2px 0px'}  fontSize={'1.2rem'}>Login</Button>
                            </VStack>

                            <Text textAlign={'center'} mt={'15px'} fontWeight={'500'} fontSize={['.9rem', '1rem']}>Forgot your password? </Text>
                            <Text textAlign={'center'} mt={'15px'} fontWeight={'500'} fontSize={['.9rem', '1rem']}> Don't have an Astrologer account? <Link to={'/astrologersignup'} color={'#1f3b64'} fontWeight={'700'} fontSize={['.9rem', '1rem']}>SignUp</Link></Text>
                            <HStack m={'1vmax 0'} w={'100%'} justifyContent={'center'} alignItems={'center'}>
                                <Button  onClick={() => navigate('/login')} alignSelf={'center'} children={'User Login'} size={['sm', 'md']} p={'2px 0px'} fontSize={'1.2rem'} _hover={{ bg: "#1f3b64", cursor: "pointer", color: 'white' }} />
                            </HStack>

                        </form>
                    </VStack>
                </Stack>

            </Stack>
        </>

            ):(
                navigate('/astrologerprofile')
            )
        }
        </>
    )
}

export default AstrologerLogin