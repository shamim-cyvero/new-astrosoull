import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, FormControl, FormLabel, HStack, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, Textarea, useDisclosure, VStack } from '@chakra-ui/react'
import { TbCloudDownload } from "react-icons/tb";
import React, { useEffect, useState } from 'react'
import { RiFunctionLine } from "react-icons/ri";
import { RiVidiconLine } from "react-icons/ri";
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AdminAddCourseLecture, AdminAddCourseLectureVideo, AdminDeleteCourseLecture, AdminDeleteCourseLectureVideo, GetSignleCourseDetails } from '../../../../redux/action/CourseActions';
const Content = ({ lectures,rating,courseId }) => {
    //  state define for modal
    const { isOpen, onOpen, onClose } = useDisclosure() 

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [showModal, setShowModal] = useState()
    const [title, setTitle] = useState('')
    const [video, setVideo] = useState(null)
    const [lectureId, setLectureId] = useState('')

    const navigate=useNavigate()
    const dispatch=useDispatch()  

const { loading } = useSelector((state) => state.courseContainer);



    const Accor_content = [
        {
            // Icon:RiFunctionLine,
            name: 'Introduction Class',
            ClassCount: '(01)',
            video: [{
                title: 'Introduction class and hhh Division of sky',
                vedioMb: '923.87 MB'
            },
            {
                title: 'Introduction class and Division of sky',
                vedioMb: '923.87 MB'
            }
            ],

        },
        {
            name: 'Class 2 29/04/2024',
            ClassCount: '(04)',
            video: [{
                title: 'Introduction class and Division of sky',
                vedioMb: '1.31 GB'
            },
            {
                title: 'Introduction class and Division of sky',
                vedioMb: '1.31 GB'
            }
            ],

        },
        {
            // Icon:RiFunctionLine,
            name: 'Class 3 29/04/2024',
            ClassCount: '(01)',
            video: [{
                title: 'Introduction class and Division of sky',
                vedioMb: '1,002.75 MB'
            },
            {
                title: 'Introduction class and Division of sky',
                vedioMb: '1,002.75 MB'
            }
            ],

        },
        {
            // Icon:RiFunctionLine,
            name: 'Class 4 29/04/2024',
            ClassCount: '(04)',
            video: [{
                title: 'Introduction class and Division of sky',
                vedioMb: '1.28 GB'
            },
            {
                title: 'Introduction class and Division of sky',
                vedioMb: '1.28 GB'
            },
            {
                title: 'Introduction class and Division of sky',
                vedioMb: '1.28 GB'
            },
            {
                title: 'Introduction class and Division of sky',
                vedioMb: '1.28 GB'
            },
            ],

        },
        {
            // Icon:RiFunctionLine,
            name: 'Class 5 29/04/2024',
            ClassCount: '(03)',
            video: [{
                title: 'Introduction class and Division of sky',
                vedioMb: '923.87 MB'
            },
            {
                title: 'Introduction class and Division of sky',
                vedioMb: '923.87 MB'
            }
            ],

        },
    ]

    const AddNewLactureHandler =async () => {
        dispatch(AdminAddCourseLecture(name,description,courseId))
        onClose()
    }

    const AddNewVideoHandler =async () => {
       await dispatch(AdminAddCourseLectureVideo(title, video,courseId,lectureId))
        onClose()
    }
    const DeleteLactureHandler =async (lectureId) => {
        await  dispatch(AdminDeleteCourseLecture(lectureId,courseId))
        await dispatch(GetSignleCourseDetails(courseId))  

    }
    const DeleteVideoHandler =async (videoId,lectureId) => {       
        await  dispatch(AdminDeleteCourseLectureVideo(lectureId,courseId,videoId))
        await dispatch(GetSignleCourseDetails(courseId))  

    }
    const ShowModalHandler = (i,id) => {
        setShowModal(i)
        setLectureId(id)
        onOpen()

    }

    const LectureVideoHandler = (e) => {
        const file = e.target.files[0];
        if (!file.type.startsWith('video/')) {
            alert('Please upload a valid video file.');
            return;
          }
        
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          if (reader.readyState === 2) {
            setVideo(reader.result);
          }
        };
    };

    
    return (

        <>
        {
            courseId && courseId?(

                <>
                    {
                         lectures && lectures.length>=1?(
                            <Accordion allowToggle w={'100%'}>
                        {
                            lectures && lectures.map((item) => (
                                <AccordionItem key={item._id} w={'100%'}>
                                    <HStack w={'100%'}>
                                        <AccordionButton w={'100%'}>
                                            <HStack as='span' w='100%' alignItems='center' justifyContent='space-between'>
                                                <HStack w='auto' pt={['0px', '10px']} pb={['0px', '10px']}>
                                                    <IconButton colorScheme='whatsapp' icon={<RiFunctionLine />} isRound={true} fontSize='25px' />
                                                    <Text children={item.name} fontSize={['1rem', '1.2rem']} fontWeight='600' />
                                                </HStack>
                                                {/* <Text children={item.ClassCount} mr={'5px'} fontWeight={'600'} /> */}
                                            </HStack>
                                            <AccordionIcon ml={'5px'} />
                                        </AccordionButton>
        
                                        <Button size={'xs'} ml={5} colorScheme='red' onClick={()=>DeleteLactureHandler(item._id)} >{<MdDelete fontSize={'1.2rem'} />}</Button>
                                    </HStack>
                                    <AccordionPanel pb={4}>
                                        <VStack w={'100%'} alignItems={'center'} justifyContent={'space-between'} spacing={5}>
                                            {
                                             item.video?.length>=1 && item.video?.map((Videoitem) => (
                                                    <>
        
                                                        <Stack key={Videoitem._id} w={'100%'} alignItems={'flex-start'} justifyContent={'space-between'} direction={{ base: 'column', md: 'column', lg: 'row' }}>
                                                            <HStack w={{ base: '100%', md: '100%', lg: '75%' }}>
                                                                <RiVidiconLine size={25} />
                                                                <Text fontSize={['.9rem', '1.1rem']} fontWeight='600' mr={['0px', '30px']} >{Videoitem.title} </Text>
                                                            </HStack>
        
                                                            <HStack w={['100%', '100%', '25%']}>
                                                                <TbCloudDownload />
                                                                {/* <span >{item.vedioMb}</span> */}
                                                            </HStack>
                                                            <HStack>
                                                                <Button size={'md'}>Play</Button>
                                                                <Button size={'sm'} colorScheme='red' onClick={()=>DeleteVideoHandler(Videoitem._id, item._id)}>Delete</Button>   
                                                            </HStack>
        
                                                        </Stack>
                                                    </>
        
                                                ))
                                            }
                                        </VStack>
                                        <HStack  w={'100%'} mt={5} alignItems={'center'} justifyContent={'center'}>
                                            <Button onClick={() => ShowModalHandler(2,item._id)} colorScheme='whatsapp' size={'md'} p={2} w={['100%', '50%', '20%']} fontSize={'md'}>
                                                Add Video
                                            </Button>
                                        </HStack>
        
                                    </AccordionPanel>
        
                                </AccordionItem>
        
                            ))
                        }
                            </Accordion>
                         ):(
                            <Text children={'add new lecture now'} />
                         )
                    }
        
                    <HStack w={'100%'} mt={5} alignItems={'center'} justifyContent={'center'}>
                        <Button  onClick={() => ShowModalHandler(1)} colorScheme='whatsapp' size={'md'} p={2} w={['100%', '50%', '20%']} fontSize={'md'}>
                            Add Lecture
                        </Button>
                    </HStack>
        
        
                    {/* model for add to new lacture */}
        
                    {
                        showModal && showModal === 1 ? (
        
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>ADD NEW LECTURE</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
        
                                        <FormControl mb={3}>
                                            <FormLabel fontSize={'lg'}>Name</FormLabel>
                                            <Input type='text' value={name} required onChange={(e) => setName(e.target.value)} />
                                        </FormControl>
        
                                        <FormControl mb={3}>
                                            <FormLabel fontSize={'lg'}>Description</FormLabel>
                                            <Textarea rows={4} cols={3} value={description} required onChange={(e) => setDescription(e.target.value)} />
                                        </FormControl>
        
        
        
                                    </ModalBody>
        
                                    <ModalFooter >
                                        <Button isLoading={loading}  colorScheme='whatsapp' onClick={() => AddNewLactureHandler()}>
                                            Add Now
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        ) : null
                    }
        
                    {/* model for add new lecture video */}
                    {
                        showModal && showModal === 2 ? (
        
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>ADD NEW VIDEO</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
        
                                        <FormControl mb={3}>
                                            <FormLabel fontSize={'lg'}>Title</FormLabel>
                                            <Input value={title} onChange={(e)=>setTitle(e.target.value)} type='name' required />
                                        </FormControl>
                                        <FormControl mb={3}>
                                            <FormLabel fontSize={'lg'}>Select Video</FormLabel>
                                            <Input  onChange={LectureVideoHandler} type="file" accept="video/*" required />
                                        </FormControl>
        
        
        
                                    </ModalBody>
        
                                    <ModalFooter >
                                        <Button isLoading={loading}  colorScheme='whatsapp' onClick={() => AddNewVideoHandler()} >
                                            Add Now
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        ) : null
                    }
                </>
            ):(
                navigate('/admin/course')
            )
        }
        
        </>
    )
}

export default Content