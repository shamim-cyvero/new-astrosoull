import React from "react";
import logo from "../../assets/logo-n.png";
import {
  Box,
  HStack,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import fb from "../../assets/FooterImg/FB.png";
import instagram from "../../assets/FooterImg/Instagram.png";
import Twitter from "../../assets/FooterImg/Twitter.png";
import Whatsapp from "../../assets/FooterImg/Whatsapp.png";

import call from "../../assets/FooterImg/call.png";
import locationimg from "../../assets/FooterImg/location.png";
import mail from "../../assets/FooterImg/email.png";
import youtube from "../../assets/FooterImg/youtube.png";
import JoinBtn from "../JoinBtn/JoinBtn";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation()


  return (

    <>


      {
        location.pathname.includes('/admin') ? (
          null
        ) : (
          <>

            <JoinBtn />
            <Stack
              bgColor={"#1f3b64"}
              color={"white"}
              w={"100%"}
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={6}
          
            >
              <Stack
                w={"90%"}
                p={"30px 0"}
                alignItems={"center"}
                justifyContent={{ base: "center", md: "center", lg: "space-between" }}
                direction={{ base: "column", md: "column", lg: "row" }}
                spacing={6}
             
              >
                <VStack
                  w={{ base: "90%", md: "90%", lg: "33%" }}
                  alignItems={"flex-start"}
                  alignSelf={"flex-start"}
                >
                  <Image src={logo} alt="logo" w={["70%", "210px"]} />
                  <Text
                    fontSize={["1rem", "1.1rem", "1rem"]}
                    mt={"10px"}
                    children={`Welcome to AstroSoull, proudly recognized as one of the leading astrology institutes in India. We provide comprehensive courses in astrology, numerology, palmistry, Vastu, and Ayurveda. Our purpose is to illuminate your path and spread our knowledge across the globe.`}
                  />
                  <HStack mt={"10px"} spacing={4}>
                    <Link to={'https://www.facebook.com/astrosoullrahulverma'} target="_blank">
                      <Image
                        src={fb}
                        alt="fb"
                        w={"30px"}
                        aspectRatio={"2/2"}
                      />
                    </Link>

                    <Link to={'https://www.instagram.com/astro_soull12/'} target="_blank">
                      <Image
                        src={instagram}
                        alt="instagram"
                        w={"30px"}
                        aspectRatio={"2/2"}
                      />
                    </Link>
                    <Link to={'https://x.com/i/flow/login?redirect_after_login=%2Fsoullastro'} target="_blank">

                      <Image
                        src={Twitter}
                        alt="Twitter"
                        w={"30px"}
                        aspectRatio={"2/2"}
                      />
                    </Link>
                    <Link to={'https://api.whatsapp.com/send?phone=919910464896'} target="_blank">
                      <Image
                        src={Whatsapp}
                        alt="Whatsapp"
                        w={"30px"}
                        aspectRatio={"2/2"}
                      />
                    </Link>
                    <Link to={'https://www.youtube.com/watch?v=DU4wz6FM60I'} target="_blank">
                      <Image
                        src={youtube}
                        alt="youtube"
                        w={"40px"}
                        aspectRatio={"2/2"}
                      />
                    </Link>
                  </HStack>
                </VStack>

                <VStack
                  w={{ base: "90%", md: "90%", lg: "17%" }}
                  alignItems={"flex-start"}
                  alignSelf={"flex-start"}
                >
                  <Heading
                    children={"Quick Links"}
                    fontSize={["1.2rem", "1.4rem", "1.5rem"]}
                  />
                  <UnorderedList mt={"10px"}>
                    <ListItem cursor={'pointer'} fontSize={["1rem", "1.1rem", "1rem"]}>
                      Kundli Reports
                    </ListItem>
                    <ListItem cursor={'pointer'} onClick={() => navigate('/consult')} fontSize={["1rem", "1.1rem", "1rem"]}>
                      Astrologers
                    </ListItem>
                    <ListItem cursor={'pointer'} onClick={() => navigate('/all/courses')} fontSize={["1rem", "1.1rem", "1rem"]}>
                      Courses
                    </ListItem>
                    <ListItem cursor={'pointer'} onClick={() => navigate('/blog')} fontSize={["1rem", "1.1rem", "1rem"]}>Blog</ListItem>
                  </UnorderedList>
                </VStack>

                <VStack
                  w={{ base: "90%", md: "90%", lg: "22%" }}
                  alignItems={"flex-start"}
                  alignSelf={"flex-start"}
                >
                  <Heading
                    children={"Get In Touch"}
                    fontSize={["1.2rem", "1.4rem", "1.5rem"]}
                  />
                  <HStack mt={"10px"}>
                    <Image src={call} alt="call" w={"20px"} />
                    <Text
                      children={"9910444896"}
                      fontSize={["1rem", "1.1rem", "1rem"]}
                    />
                  </HStack>

                  <HStack>
                    <Image src={mail} alt="mail" w={"20px"} />
                    <Text
                      children={"soullastro@gmail.com"}
                      fontSize={["1rem", "1.1rem", "1rem"]}
                    />
                  </HStack>

                  <HStack>
                    <Image src={locationimg} alt="location" w={"20px"} />
                    <Text
                      fontSize={["1rem", "1.1rem", "1rem"]}
                      children={
                        "35, 1st floor Bharat Nagar Ashok Vihar Ph. 4 Delhi – 110052"}
                    />
                  </HStack>
                </VStack>

                <VStack
                  w={{ base: "90%", md: "90%", lg: "18%" }}
                  alignItems={"flex-start"}
                  alignSelf={"flex-start"}
                >
                  <Heading
                    children={"Subscribe Now"}
                    fontSize={["1.2rem", "1.4rem", "1.5rem"]}
                  />
                  <Text
                    fontSize={["1rem", "1.1rem", "1rem"]}
                    mt={"10px"}
                    children={
                      "Be a part of our global astrology network, which has 1.21K subscribers"
                    }
                  />
                  <Link to={'https://www.youtube.com/watch?v=DU4wz6FM60I'} target="_blank">
                    <Image src={youtube} alt="youtube" w={"20%"} />
                  </Link>
                </VStack>

              </Stack>

              <Box w={"90%"}>
                <Text borderTop={"1px solid #718096"} />


                <Text p={'20px 0px'}
                  fontSize={["1rem", "1.1rem", "1rem"]}
                  fontWeight={"600"}
                >© All copyrights reserved 2023 astrosoull.com <span style={{ cursor: 'pointer' }} onClick={() => navigate('/privacy-policy')}>| Privacy Policy </span><span style={{ cursor: 'pointer' }} onClick={() => navigate('/terms-conditons')}>| Terms & Conditions </span><span style={{ cursor: 'pointer' }} onClick={() => navigate('/')}> | Cancellation & Refund Policy</span></Text>

              </Box>
            </Stack>
          </>
        )
      }

    </>
  );
};

export default Footer;
