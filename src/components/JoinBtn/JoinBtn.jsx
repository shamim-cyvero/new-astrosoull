import { Button, Heading, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, VStack, } from "@chakra-ui/react";
import React, { useState } from "react";
import './JoinBtn.css'
import { FiPhoneIncoming } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { UserContactByEmail } from "../../redux/action/UserActions";

const JoinBtn = () => {
  const [email, setEmail] = useState("")
  const [loading, setloading] = useState(false)

  const dispatch=useDispatch()

//   const formSubmit =async () => {
//     if(email.length>5){
//       await dispatch(UserContactByEmail(email))
//     }else{
//       alert('enter email ')
//     }
// }

const formSubmit = async () => {
  // Email validation regex
  setloading(true)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if email is valid
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Check if email length is sufficient
  if (email.length > 5) {
    try {
      await dispatch(UserContactByEmail(email));
  setloading(false)
  setEmail('')

    } catch (error) {
      console.error('Error dispatching email contact:', error);
    }
  } else {
    alert('Email should be at least 6 characters long.');
  }
};


  return (
    <>
      <Stack w={'90%'}  m={'auto'} mt={'50px'} direction={{ base: 'column', md: 'row' }} alignItems={'center'} justifyContent={'space-around'}>
        <Stack w={'100%'}  className="joinBtn"  color={'white'} p={'20px 0'} rounded='xl' alignItems={'center'} justifyContent={'space-around'} direction={{ base: 'column', md: 'row' }}>
          <VStack w={['90%', '90%', '45%']} alignItems={'flex-start'}>
            <Heading children={"Join us today"} fontSize={['1.5rem','2rem']} />
            <Text children={
                "#We will send the best deals and offers to your email."} />
          </VStack>
        {/* <form style={{width:"60%"}} onSubmit={formSubmit} > */}

          <InputGroup w={['90%', '90%', '45%']} boxShadow='md' rounded='md' p={['5px', '10px']} borderRadius={'35px'} bg={'white'} color={'black'}>
            <Input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" fontSize={'18x'} w={'100%'} border={'none'} outline={'none'} />
            <Button isLoading={loading} onClick={()=>formSubmit()} colorScheme="whatsapp" size={['sm', 'md', 'lg']} w={'25%'} borderRadius={'35px'}>
              Join
            </Button>
          </InputGroup>
        {/* </form> */}
        </Stack>
      </Stack>
    </>
  );
};

export default JoinBtn;
