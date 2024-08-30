import React from 'react'
import './AdminBlog.css'
import AdminHeader from '../AdminHeader/AdminHeader'
import { Box, Button, Grid, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import AdminSideBar from '../AdminSideBar/AdminSideBar'
import AdminBlogData from './AdminBlogData'
import blog1 from '../../../assets/blogImg/blog1.jpg'
import blog2 from '../../../assets/blogImg/blog2.webp'
import blog3 from '../../../assets/blogImg/blog3.webp'
import blog4 from '../../../assets/blogImg/blog4.webp'
import { FaPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const AdminBlog = () => { 
    return (
        <>
            <AdminHeader />
            <Grid
                w={"100%"}
                height={"100vh"}
                bgColor={"rgb(247, 247, 247)"}
                gridTemplateColumns={{ base: "1fr", md: "1fr", lg: "1fr 4fr" }}
                gap={"2rem"}
            >
                <AdminSideBar />
                <Box border={"1px solid red"} overflowY={"auto"} p={3}>
                    <Heading children={'Blog'} size={'lg'} m={5} textAlign={'center'} textTransform={'uppercase'} />
                    <Link to={'/admin/blog/addblog'}>
                        <Button rightIcon={<FaPlus />} colorScheme='red' variant='outline' ml={4}>
                            Add New Blog
                        </Button>
                    </Link>

                    <HStack mt={5} w={'100%'} alignItems={'center'} justifyContent={'center'} direction={{ base: 'column', md: 'row' }} flexWrap={'wrap'} spacing={5}>
                        <AdminBlogData img={blog1} title={'the impact of star monements on your horoscope'} des={'Astrology is a fascinating field that connects the movements of celestial bodies to our everyday lives. For many Indians, horoscopes are not just a curiosity'} />
                        <AdminBlogData img={blog2} title={'जानिए आयुर्वेद के अनुसार पंचकर्म क्या है ?'} des={'स्वस्थ शरीर के लिए आयुर्वेद में बहुत सारे नियम-सिद्धांत व'} />
                        <AdminBlogData img={blog3} title={'which is the best zodic sign?'} des={'In astrology, a Zodiac Sign corresponds to one of the 12 zodiac constellations through which the sun travels. A Zodiac or Sun sign is as per the position of the'} />
                        <AdminBlogData img={blog4} title={'what do squares mean in astrology?'} des={'A square is a special angle when a diurnal arc enters 90 degrees of any sign in the Zodiac circle. Through this angle that can only be formed with the aid of a'} />
                        {/* <AdminBlogData img={blog4} title={'what do squares mean in astrology?'} des={'A square is a special angle when a diurnal arc enters 90 degrees of any sign in the Zodiac circle. Through this angle that can only be formed with the aid of a'} /> */}
                        {/* <AdminBlogData img={blog4} title={'what do squares mean in astrology?'} des={'A square is a special angle when a diurnal arc enters 90 degrees of any sign in the Zodiac circle. Through this angle that can only be formed with the aid of a'} /> */}

                    </HStack>

                </Box>
            </Grid>
        </>
    )
}

export default AdminBlog