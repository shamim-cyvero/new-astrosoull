import {
  Box,
  Icon,
  Img,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Input,
  Textarea,
  Button,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import img from "../../assets/contactUsImg/contact.png";
// import img from "../../assets/contactUsImg/img.jpg";
import SimpleCard from "../../components/SimpleCard/SimpleCard";

import course from "../../assets/courseCardImg/Online.jpg";
import consult from "../../assets/courseCardImg/Consultation.jpg";
import per from "../../assets/courseCardImg/per.jpg";

import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { UserContact } from "../../redux/action/UserActions";
import { useDispatch, useSelector } from "react-redux";

const ContactUs = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [subject, setSubject] = useState("")

  const dispatch=useDispatch()
  const {  loading } = useSelector(  state => state.userContainer);



  const cousreCardData = [
    {
      icon: CiLocationOn,
      title: "Address",
      bgGradient: "linear(135deg, #3C8CE7 10%, #00EAFF 100%)",
      details:
        "35, 1st floor Bharat Nagar Ashok Vihar Ph. 4 Delhi – 110052",
    },
    {
      icon: IoCallOutline,
      title: "Phone",
      bgGradient: "linear(135deg, #11c99c, #00e31d)",
      details: "+91 (9910444896)",
    },
    {
      icon: AiOutlineMail,
      title: "Email",
      bgGradient: "linear(135deg, #ff0844 0%, #ffb199 100%)",
      details: "soullastro@gmail.com",
    },
  ];

  const ContactHandler=async(e)=>{
    e.preventDefault()
  
   await dispatch(UserContact(name, email, phone,message,subject))

   setName('')
   setPhone('')
   setEmail('') 
   setMessage('')
   setSubject('')

}

  return (
    <>
      <Box  w={"100%"}  >
        {/* <Img src={img} alt="img" w={"90%"} h={'50%'} objectFit={"cover"} /> */}
        <Image src={img} alt={'img'} w={'100%'} h={{ base: '20vh', md: '40vh', lg: '65vh' }} objectFit={'cover'} />

      </Box>

      {/* <SimpleCard cousreCardData={cousreCardData} /> */}
      <HStack
        w={"90%"}
        m={"40px auto"}
        // border={"1px solid red"}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        spacing={8}
      >
        {cousreCardData &&
          cousreCardData.map((item,i) => (
            <Box
            key={i}
              w={{ base: "700px", md: "350px" }}
              h={{ base: "220px", md: "200px" }}
              borderRadius={"15px"}
              p={"20px 0"}
              // border={"1px solid blackAlpha.200"}
              boxShadow={"0 3px 10px rgb(0 0 0 / 0.4)"}
              cursor={"pointer"}
              //  boxShadow='lg' rounded='md' bg='white'
              // transition="transform all 0.5s"
              //  transition="transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out"
              transition="all 0.3s "
              _hover={{
                transform: "translateY(-15px)",
                bgColor: "#213b63",
                color: "white",
              }}
            >
              <VStack
                w={"100%"}
                h={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <HStack
                  rounded={"20%"}
                  bgGradient={item.bgGradient}
                  justifyContent={"center"}
                  alignItems={"center"}
                  p={5}
                >
                  <Icon as={item.icon} boxSize={"3vmax"} color={"white"} />
                </HStack>
                <Text
                  children={item.title}
                  //   w={["100%", "35%"]}
                  textAlign={"center"}
                  fontSize={["1.5rem", "1.2rem"]}
                  fontWeight={"700"}
                />
                <Text
                  children={item.details}
                  //   w={["100%", "35%"]}
                  textAlign={"center"}
                  fontSize={["1rem", ".9rem"]}
                  fontWeight={"400"}
                  p={1}
                />
              </VStack>
            </Box>
          ))}
      </HStack>

      {/* conatac from */}
      <VStack   w={'90%'} m={'1vmax auto'} mt={'20px'} alignItems={'flex-start'} >
        <Heading children={'Send your message directly'} color={'#1f3b64'} fontSize={['1.2rem','1.8rem']}/>
        <form style={{width:"100%"}} onSubmit={ContactHandler} >
          <Stack mb={'2vmax'} spacing={8} direction={{base:'column',md:'column',lg:'row'}} w={'100%'}  justifyContent={'space-between'}>
            <VStack alignItems={'flex-start'}  w={{base:'100%',md:'100%',lg:'45%'}}>
                <Text children={'Your name*'} fontSize={['.9rem','1rem']} fontWeight={'500'}/>
                <Input required value={name} border={'1px solid #D3D4D8'} onChange={(e) => setName(e.target.value)} focusBorderColor='green.400' type="text"  />              
            </VStack>
            <VStack  alignItems={'flex-start'}  w={{base:'100%',md:'100%',lg:'45%'}}>
                <Text children={'Email*'} fontSize={['.9rem','1rem']} fontWeight={'500'}/>
                <Input required value={email} onChange={(e) => setEmail(e.target.value)} focusBorderColor='green.400' border={'1px solid #D3D4D8'} type="email"  />              
            </VStack>
          </Stack>

          <Stack mb={'1.5vmax'} spacing={6} direction={{base:'column',md:'column',lg:'row'}} w={'100%'}  justifyContent={'space-between'}>
            <VStack alignItems={'flex-start'}  w={{base:'100%',md:'100%',lg:'45%'}}>
                <Text children={'Phone**'} fontSize={['.9rem','1rem']} fontWeight={'500'}/>
                <Input required value={phone} onChange={(e) => setPhone(e.target.value)}  focusBorderColor='green.400' border={'1px solid #D3D4D8'} type="number"  />              
            </VStack>
            <VStack  alignItems={'flex-start'}  w={{base:'100%',md:'100%',lg:'45%'}}>
                <Text children={'Subject*'} fontSize={['.9rem','1rem']} fontWeight={'500'}/>
                <Input required value={subject} onChange={(e) => setSubject(e.target.value)}  focusBorderColor='green.400' border={'1px solid #D3D4D8'} type="text"  />              
            </VStack>
          </Stack>

          <VStack   alignItems={'flex-start'} >
            <Text children={'Message'} fontSize={['.9rem','1rem']} fontWeight={'500'}/>
            <Textarea value={message} onChange={(e) => setMessage(e.target.value)} focusBorderColor='green.400' border={'1px solid #D3D4D8'} />
          </VStack>

          <Button isLoading={loading} m={'1vmax 0'} type={'submit'} size={['sm','md']}   p={'2px 0px'} fontSize={'1.2rem'}children={'Send Message'} colorScheme={'whatsapp'} />
        </form>
      </VStack>
    </>
  );
};

export default ContactUs;
