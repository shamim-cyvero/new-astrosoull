import React from "react";
import './Blog.css'
import blog1 from "../../assets/blogImg/blog1.jpg";
import blog2 from "../../assets/blogImg/blog2.webp";
import blog3 from "../../assets/blogImg/blog3.webp";
import blog4 from "../../assets/blogImg/blog4.webp";
import { FiUser } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { Box, Button, Card, CardBody, CardFooter, Divider, Heading, HStack, IconButton, Image, Stack, Text, VStack, } from "@chakra-ui/react";
import { MdDateRange } from "react-icons/md";
import BlogData from "./BlogData";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const navigate=useNavigate()


  return (
    <>
      <HStack m={"20px auto"} spacing={4} w={"90%"}  alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"}>
        <Stack w={'100%'} alignItems={'center'} justifyContent={'space-between'} direction={{ base: 'column', md: 'row' }} spacing={2}>
          <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'} direction={{ base: 'column', md: 'row' }} flexWrap={'wrap'} spacing={2}>
            <VStack alignItems={'flex-start'}>
              <Heading children={'Blog'} color={'#1f3b64'} fontSize={{ base: '1.8rem', md: '1.7rem', lg: '1.5rem' }} />
              <Text children={'#Explore latest news and articles'} fontSize={{ base: '1.1rem', md: '1rem', lg: '.9rem' }} fontWeight={'350'} />
            </VStack>
            <Button onClick={()=>navigate('/blog')} colorScheme='black' variant='outline' size={{ base: 'sm', md: 'md' }}>Blogs Post</Button>
          </HStack>
        </Stack>

        <BlogData image={blog1} title={'the impact of star monements on your horoscope'} des={'Astrology is a fascinating field that connects the movements of celestial bodies to our everyday lives. For many Indians, horoscopes are not just a curiosity'} />
        <BlogData image={blog2} title={'जानिए आयुर्वेद के अनुसार पंचकर्म क्या है ?'} des={'स्वस्थ शरीर के लिए आयुर्वेद में बहुत सारे नियम-सिद्धांत व'} />
        <BlogData image={blog3} title={'which is the best zodic sign?'} des={'In astrology, a Zodiac Sign corresponds to one of the 12 zodiac constellations through which the sun travels. A Zodiac or Sun sign is as per the position of the'} />
        <BlogData image={blog4} title={'what do squares mean in astrology?'} des={'A square is a special angle when a diurnal arc enters 90 degrees of any sign in the Zodiac circle. Through this angle that can only be formed with the aid of a'} />

      </HStack>
    </>
  );
};

export default Blog;
