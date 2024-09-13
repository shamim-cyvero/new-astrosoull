import { Button, Heading, Input, InputGroup, Stack, Text, VStack, } from "@chakra-ui/react";
import React, { useState } from "react";
import './JoinBtn.css'
import { useDispatch } from "react-redux";
import { UserContactByEmail } from "../../redux/action/UserActions";

const JoinBtn = () => {
  const [email, setEmail] = useState("")

  const dispatch=useDispatch()

  const formSubmit =async () => {
    // e.preventDefault()
    if(email.length>5){
      await dispatch(UserContactByEmail(email))
    }else{
      alert('enter email ')
    }

}

  return (
    <>
      <Stack w={'90%'}  m={'auto'} mt={'50px'} direction={{ base: 'column', md: 'row' }} alignItems={'center'} justifyContent={'space-around'}>
        <Stack w={'100%'}  className="joinBtn"  color={'white'} p={'20px 0'} rounded='xl' alignItems={'center'} justifyContent={'space-around'} direction={{ base: 'column', md: 'row' }}>
          <VStack w={['90%', '90%', '45%']} alignItems={'flex-start'}>
            <Heading children={"Join us today"} fontSize={['1.5rem','2rem']} />
            <Text children={
                "#We will send the best deals and offers to your email."} />
          </VStack>

          <InputGroup w={['90%', '90%', '45%']} boxShadow='md' rounded='md' p={['5px', '10px']} borderRadius={'35px'} bg={'white'} color={'black'}>
            <Input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" fontSize={'18x'} w={'100%'} border={'none'} outline={'none'} />
            <Button onClick={()=>formSubmit()} colorScheme="whatsapp" size={['sm', 'md', 'lg']} w={'25%'} borderRadius={'35px'}>
              Join
            </Button>
          </InputGroup>
        </Stack>
      </Stack>
    </>
  );
};

export default JoinBtn;
