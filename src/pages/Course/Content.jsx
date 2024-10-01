import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, HStack, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { RiFunctionLine } from "react-icons/ri";
import { RiVidiconLine } from "react-icons/ri";
const Content = ({ lectures,rating,courseId }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
   
    return (
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
                                      
                                    </HStack>
                                    <AccordionIcon ml={'5px'} />
                                </AccordionButton>

                            </HStack>
                            <AccordionPanel pb={4}>
                                <VStack w={'100%'} alignItems={'center'} justifyContent={'space-between'} spacing={5}>
                                    {
                                     item.video?.length>=1 && item.video?.map((item) => (
                                            <>

                                                <Stack key={item._id} w={'100%'} alignItems={'flex-start'} justifyContent={'space-between'} direction={{ base: 'column', md: 'column', lg: 'row' }}>
                                                    <HStack w={{ base: '100%', md: '100%', lg: '75%' }}>
                                                        <RiVidiconLine size={25} />
                                                        <Text fontSize={['.9rem', '1.1rem']} fontWeight='600' mr={['0px', '30px']} >{item.title} </Text>
                                                    </HStack>

                                                    <HStack w={['100%', '100%', '25%']}>
                                                      
                                                    </HStack>
                                                    <HStack>
                                                        <Button onClick={onOpen} size={'lg'}>Play</Button> 
                                                    </HStack>
                                                  
                                                    <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
                                                        <ModalOverlay />
                                                            <ModalContent>
                                                            <ModalHeader>
                                                                <Text textAlign={'center'} fontSize={['.9rem', '1.1rem']} fontWeight='600' mr={['0px', '30px']} >{item.title} </Text>
                                                            </ModalHeader>
                                                            <ModalCloseButton />
                                                            <ModalBody>
                                                            <video onContextMenu={(e) => e.preventDefault()} controls autoPlay  src={item.url}></video>
                                                            </ModalBody>
                                                           
                                                        </ModalContent>
                                                    </Modal>
                                                </Stack>

                                            </>

                                        ))
                                    }
                                </VStack>
                               

                            </AccordionPanel>

                        </AccordionItem>

                    ))
                }
                    </Accordion>
                 ):(
                    <Text children={'lectures did not update yet'} />
                 )
            }
        </>
    )
}

export default Content