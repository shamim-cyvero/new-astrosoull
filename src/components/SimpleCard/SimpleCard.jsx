import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const SimpleCard = ({ cousreCardData }) => {
  const navigate=useNavigate()

  return (
    <>
      <HStack
        w={"90%"}
        m={"40px auto"}
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
              boxShadow={"0 3px 10px rgb(0 0 0 / 0.4)"}
              cursor={"pointer"}
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
