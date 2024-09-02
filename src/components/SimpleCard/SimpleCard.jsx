import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import course from "../../assets/courseCardImg/Online.jpg";
import consult from "../../assets/courseCardImg/Consultation.jpg";
import per from "../../assets/courseCardImg/per.jpg";
import { useNavigate } from "react-router-dom";

const SimpleCard = ({ cousreCardData }) => {
  const navigate=useNavigate()

  // const cousreCardData = [
  //   {
  //     img: course,
  //     title: "Online Courses",
  //   },
  //   {
  //     img: consult,
  //     title: "Online Consultation",
  //   },
  //   {
  //     img: per,
  //     title: "Personalized Reports",
  //   },
  // ];
 
  return (
    <>
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
          cousreCardData.map((item, i) => (
            <Box  mt={'40px'}
              key={i}
              w={{ base: "700px", md: "350px" }}
              h={{ base: "200px", md: "200px" }}
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
              onClick={()=>navigate(item?.url)}
            >
              <VStack w={"100%"} h={"100%"} justifyContent={"center"}>
                <Image
                  borderRadius={"15px"}
                  src={item.img}
                  alt="course"
                  w={"70px"}
                />
                <Text
                  children={item.title}
                  w={["100%", "35%"]}
                  textAlign={"center"}
                  fontSize={["1.5rem", "1.2rem"]}
                  fontWeight={"700"}
                />
              </VStack>
            </Box>
          ))}
      </HStack>
    </>
  );
};

export default SimpleCard;
