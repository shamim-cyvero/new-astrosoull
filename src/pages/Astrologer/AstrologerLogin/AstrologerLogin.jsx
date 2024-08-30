import React, { useState } from 'react'
import { Box, Button, Checkbox, FormControl, FormLabel, Heading, HStack, Image, Input,Stack, Text, VStack } from '@chakra-ui/react'
import {Link, useNavigate} from 'react-router-dom'
import pic from '../../../assets/signUpImg.png'
import { useDispatch } from 'react-redux'
import { LoginAstrologer } from '../../../redux/action/AstrologerActions'


const AstrologerLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const formSubmit =async (e) => {
        e.preventDefault()
        await dispatch(LoginAstrologer(email,password))
        navigate('/astrologerprofile')
    }
  return (
    <>
          <Stack w={'90%'} m={'40px auto'}  alignItems={'center'} justifyContent={'center'} direction={{base:'column',md:'column',lg:'row'}}>
                <Stack w={'100%'} alignItems={'center'} justifyContent={'center'} direction={{base:'column',md:'column',lg:'row'}}>
                    <Box w={{base:'100%',md:'100%',lg:'50%'}} >
                        <Image src={pic} alt='pic' w={'100%'} />
                    </Box>

                    <VStack  w={{base:'100%',md:'100%',lg:'50%'}}  spacing={3}>
                        <Heading children={' Astrologer Login '} fontSize={'2rem'} />

                        <form style={{ width: '90%' }} onSubmit={formSubmit}>
                            <FormControl id="email" mt={'5px'}>
                                <FormLabel children={'Email:'} fontSize={['1.2rem','1.1rem','.9rem']} fontWeight={'400'} />
                                <Input type="email" fontSize={['1.2rem','1.1rem','.9rem']} fontWeight={'400'} required onChange={(e)=>setEmail(e.target.value)}/>
                            </FormControl>

                            <FormControl id="password"  mt={'5px'}>
                                <FormLabel children={'Password:'} fontSize={['1.2rem','1.1rem','.9rem']} fontWeight={'400'} />
                                <Input type="password" fontSize={['1.2rem','1.1rem','.9rem']} fontWeight={'400'} required onChange={(e)=>setPassword(e.target.value)}/>
                            </FormControl>

                            <VStack w={'100%'}>
                                <Button colorScheme='whatsapp' type='submit' size={'sm'} w={'100%'} mt={'20px'} p={'22px 0px'}>Login</Button>
                            </VStack>

                            <Text textAlign={'center'} mt={'15px'} fontWeight={'400'} fontSize={['1.2rem','1.1rem','.9rem']}>Forgot your password? </Text>
                            <Text textAlign={'center'} mt={'15px'} fontWeight={'400'} fontSize={['1.2rem','1.1rem','.9rem']}> Don't have an Astrologer account? <Link  to={'/astrologersignup'} color={'#1f3b64'} fontWeight={'700'} fontSize={['1.2rem','1.1rem','.9rem']}>SignUp</Link></Text>
                        </form>
                    </VStack>
                </Stack>

            </Stack>
    </>
  )
}

export default AstrologerLogin