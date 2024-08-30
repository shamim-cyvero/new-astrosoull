import React from 'react'
import AdminHeader from '../AdminHeader/AdminHeader'
import { Box, Button, Card, CardBody, CardFooter, Divider, Grid, Heading, HStack, Image, Text } from '@chakra-ui/react'
import AdminSideBar from '../AdminSideBar/AdminSideBar'
import { FaRegCommentAlt } from 'react-icons/fa'
import { RiFileUserFill } from 'react-icons/ri'
import { MdDateRange, MdOutlineDateRange } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom'

const AdminBlogData = ({ img, title, des }) => {
    const navigate = useNavigate()

    const DeleteBlogHandler = (title) => {
        alert(title) 
    }
    return (
        <>
            <Card className="card" maxW={"240px"} h={{ base: "430px", md: "400px" }} borderRadius="lg" flexWrap={"wrap"} spacing={4} boxShadow='lg' bg='white'>
                <Box w={"100%"} position={"relative"}>
                    <Image src={img} alt="image" w={"100%"} h={'140px'} objectFit={"cover"} borderRadius="lg" />
                    <Button className="btn" position={"absolute"} left={"45%"} bottom={"-7%"} leftIcon={<MdOutlineDateRange />} colorScheme="whatsapp" variant="solid" rounded={"20"} size={"sm"} >
                        30 Aug 2024
                    </Button>
                </Box>
                <CardBody onClick={() => navigate('/admin/blog/addblog/newblog')} cursor={'pointer'} w={'100%'}>
                    <Heading children={title} fontSize={"1rem"} fontWeight={"700"} mb={"20px"} textTransform={"capitalize"} />
                    <Text className="para" children={des} fontSize={".9rem"} color={"grey"} />
                </CardBody>

                <Divider w="90%" m="0 auto" borderColor="gray.300" />
                <CardFooter w="100%" alignItems="center" justifyContent="space-between" p={4}>
                    <Button size={'sm'} colorScheme='red' onClick={() => DeleteBlogHandler(title)}>Delete</Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default AdminBlogData