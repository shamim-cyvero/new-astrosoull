import { Box, Button, Checkbox, FormControl, FormLabel, Heading, HStack, Image, Input,Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import pic from '../../../assets/signup-img.png'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser } from '../../../redux/action/UserActions'
 

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("") 

  const {  loading } = useSelector(  state => state.userContainer);
  
    const navigate=useNavigate()
    const dispatch=useDispatch()


  const formSubmit =async (e) => {
    e.preventDefault()
   await dispatch(LoginUser(email,password))
    navigate('/userprofile')

}
  return (
   <>
    <Stack w={'90%'} m={'40px auto'}  alignItems={'center'} justifyContent={'center'} direction={{base:'column',md:'column',lg:'row'}}>
                <Stack w={'100%'} alignItems={'center'} justifyContent={'center'} direction={{base:'column',md:'column',lg:'row'}}>
                    <Box w={{base:'100%',md:'100%',lg:'50%'}} >
                        <Image src={pic} alt='pic' w={'90%'} />
                    </Box>

                    <VStack  w={{base:'100%',md:'100%',lg:'50%'}}  spacing={3}>
                        <Heading children={'Login in to your account'} fontSize={'2rem'} />

                        <form style={{ width: '90%' ,marginTop:'10px'}} onSubmit={formSubmit}>
                            <FormControl id="email" mt={'10px'}>
                                <FormLabel children={'Email:'} fontSize={['1.4rem','1.3rem','1.2rem','1rem']} fontWeight={'500'} />
                                <Input type="email" fontSize={['1.4rem','1.3rem','1.2rem','1rem']} fontWeight={'500'} value={email} required onChange={(e)=>setEmail(e.target.value)}/>
                            </FormControl>

                            <FormControl id="password"  mt={'10px'}>
                                <FormLabel children={'Password:'} fontSize={['1.4rem','1.3rem','1.2rem','1rem']} fontWeight={'500'} />
                                <Input type="password" fontSize={['1.4rem','1.3rem','1.2rem','1rem']} fontWeight={'500'} value={password} required onChange={(e)=>setPassword(e.target.value)}/>
                            </FormControl>

                            <VStack w={'100%'}>
                                <Button isLoading={loading} colorScheme='whatsapp' type='submit' size={'md'} w={'100%'} mt={'20px'} p={'22px 0px'} fontSize={'1.2rem'}>Login</Button>
                            </VStack>

                            <Text textAlign={'center'} mt={'15px'} fontWeight={'500'} fontSize={['1.4rem','1.3rem','1.2rem','1rem']}>Forgot your password? </Text>
                            <Text textAlign={'center'} mt={'15px'} fontWeight={'500'} fontSize={['1.4rem','1.3rem','1.2rem','1rem']}> Don't have an account? <Link  to={'/signup'} color={'#1f3b64'} fontWeight={'700'} fontSize={['1.4rem','1.3rem','1.2rem','1rem']}>SignUp</Link></Text>
                            <HStack m={'1vmax 0'} w={'100%'} justifyContent={'center'} alignItems={'center'}>
                                <Button  onClick={()=>navigate('/astrologerlogin')} alignSelf={'center'} children={'Astrologer Login'} _hover={{ bg: "#1f3b64", cursor: "pointer",color:'white' }}  />
                            </HStack>
                        </form>
                    </VStack>
                </Stack>

            </Stack>
   </>
  )
}

export default Login