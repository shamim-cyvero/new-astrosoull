import React from 'react'
import AdminHeader from '../AdminHeader/AdminHeader'
import { Box, Button, Grid, Heading, Image, Stack, Text, Textarea, VStack } from '@chakra-ui/react'
import AdminSideBar from '../AdminSideBar/AdminSideBar'
import { Link } from 'react-router-dom'
import pic from '../../../assets/blogImg/blog1.jpg'
const NewBlog = () => {
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
                <Heading children={'New blog'} size={'lg'} m={5} textAlign={'center'} textTransform={'uppercase'} />
                    <Box w={'100%'} mb={'20px'}>
                        <Image src={pic} alt={pic} w={'100%'} h={{ base: '20vh', md: '40vh', lg: '65vh' }} objectFit={'cover'} />
                    </Box>
                    <Stack w={'90%'} m={'40px auto'} spacing={4} direction={{ base: 'column', md: 'row', lg: 'row' }}>
                        <VStack spacing={4} alignItems={'flex-start'} w={ '100%'} >
                            {/* <Image src={pic} alt='pic' /> */}
                            <Text mt={8} fontSize={'1.1rem'} fontWeight={'400'} children={`Astrology has always fascinated humanity, offering a celestial roadmap to 
                        understanding our personalities, behaviors, and even destinies. Among the most intriguing 
                        aspects of astrology are the zodiac signs, each carrying its own unique set of traits. 
                        Whether you're a curious novice or a seasoned enthusiast, exploring these characteristics
                         can offer profound insights into yourself and others. Let’s delve into the twelve zodiac
                          signs and uncover the distinct qualities that define each one.`} />
                            <Link>Get the best consultation from experienced astrologers at Asttrolok</Link>

                            <Heading fontSize={'1.5rem'} children={'Aries: The Fearless Leader '} />
                            <Text fontSize={'1.1rem'} fontWeight={'400'} children={`Aries, the first sign of the zodiac, is known for 
                    its fiery enthusiasm and pioneering spirit. Those born under
                     this sign are natural leaders, brimming with confidence and 
                     a zest for life. They approach challenges head-on and thrive
                      in competitive environments. However, their impulsiveness and
                       impatience can sometimes lead to hasty decisions. Aries' energy
                        is infectious, inspiring those around them to embrace life's
                         adventures with the same fervor.`} />

                            <Heading fontSize={'1.5rem'} children={'Taurus: The Reliable Builder  '} />
                            <Text fontSize={'1.1rem'} fontWeight={'400'} children={`Taurus individuals are grounded, practical, and immensely reliable. Known for their determination and strong will, they are the builders of the zodiac, creating stability and security in their lives. Their love for comfort and luxury often makes them connoisseurs of fine living. However, their stubbornness can sometimes make them resistant to change. Taurus values loyalty and persistence, making them steadfast friends and partners.`} />
                            <Heading fontSize={'1.5rem'} children={'Gemini: The Curious Communicator  '} />
                            <Text fontSize={'1.1rem'} fontWeight={'400'} children={`Geminis are the social butterflies of the zodiac, driven by an insatiable curiosity and a love for communication. They are versatile, quick-witted, and always eager to learn something new. This sign thrives on variety and intellectual stimulation. However, their dual nature can sometimes make them appear inconsistent or indecisive. Geminis bring a vibrant and dynamic energy to any interaction, making them captivating companions.`} />
                            <Heading fontSize={'1.5rem'} children={'Cancer: The Nurturing Protector   '} />
                            <Text fontSize={'1.1rem'} fontWeight={'400'} children={`Cancer, the emotional nurturer, is deeply connected to home and family. Those born under this sign are compassionate, intuitive, and protective of their loved ones. They possess a remarkable ability to empathize with others, often putting others' needs before their own. However, their sensitivity can make them prone to mood swings and self-protection. Cancer's nurturing nature fosters strong bonds and a comforting presence.`} />

                            <form style={{ width: '100%' }}>
                                <Heading mb='8px' fontSize={'1.5rem'} children={'Comment:'} />
                                <Textarea cols={'3'} rows={'5'} />
                                <Button colorScheme='whatsapp' mt='10px' size={'md'} w={'20%'}>Post</Button>
                            </form>
                        </VStack>
                    </Stack>
                </Box>
            </Grid>
        </>
    )
}

export default NewBlog