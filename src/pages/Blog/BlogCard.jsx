import React from 'react'
import { FiUser } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { Box, Button, Card, CardBody,CardFooter,Divider, Heading,HStack,Image, Text,} from "@chakra-ui/react";

const BlogCard = ({ image, title, des }) => {
  return (
  <>
   <Card className="card" maxW={{ base: "300px",md:"310px" }}   h={{ base: "400px", md: "400px"}}   borderRadius="lg"  boxShadow='lg' bg='white' >
        <Box w={"100%"}>
          <Image src={image}alt="blog1"w={"100%"}h={'150px'}objectFit={"cover"}borderRadius="lg" />
        </Box>
        <CardBody w={'100%'}>
          <Heading children={title} fontSize={"1rem"} fontWeight={"700"} mb={"20px"} textTransform={"capitalize"} />
          <Text className="para" children={des} fontSize={".9rem"} color={"grey"}  />
        </CardBody>

        <Divider w="90%" m="0 auto" borderColor="gray.300" />
        <CardFooter  w="100%" alignItems="center" justifyContent="space-between" p={0}>
          <HStack  w="100%" alignItems="center" justifyContent="space-between" p={0} >
            <Button variant="ghost" leftIcon={<FiUser />}>
            astrosoull
            </Button>
            <Button variant="ghost" leftIcon={<FaRegCommentAlt />}>
              0
            </Button>
          </HStack>
          
        </CardFooter>
      </Card>
  </>
  )
}

export default BlogCard