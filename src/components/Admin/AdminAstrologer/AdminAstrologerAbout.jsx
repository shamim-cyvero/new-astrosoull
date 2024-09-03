import React from 'react'
import {
    Avatar,
    Button,
    Heading,
    HStack,
    IconButton,
    Input,
    List,
    ListIcon,
    ListItem,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    Textarea,
    useDisclosure,
    VStack,
  } from "@chakra-ui/react";
import { useSelector } from 'react-redux';
import { MdCheckCircle } from 'react-icons/md';

const AdminAstrologerAbout = () => {
    const { loading, isAuthenticated, astrologer } = useSelector(
        (state) => state.astrologerContainer
      );
      

  return (
    <>
    {/* <Button
      variant={"link"}
      children={"Add New Experience & Education"}
      colorScheme={"whatsapp"}
    />
    <Button
      ml={"1vmax"}
      variant={"link"}
      children={ShowAbout?'save About':`Update About`}
      colorScheme={ShowAbout?"red":"whatsapp"}
    /> */}


      
        <VStack mb={"2vmax"} alignItems={"flex-start"} spacing={"0"}>
          <Heading m={"1vmax 0"} fontSize={"xl"} children={"Education"} />
          <List spacing={1}>
            {astrologer?.education?.map((item, i) => (
              <ListItem key={i}>
                <ListIcon as={MdCheckCircle} color="green.500" />
                {item.edu}
              </ListItem>
            ))}
          </List>
        </VStack>

        <VStack mb={"2vmax"} alignItems={"flex-start"} spacing={"0"}>
          <Heading m={"1vmax 0"} fontSize={"xl"} children={"Experiences"} />
          <List spacing={1} >
            {astrologer?.experience?.map((item, i) => (
              <ListItem key={i} fontSize={['.9rem','1rem']}>
                <ListIcon as={MdCheckCircle} color="green.500" />
                {item.exp}
              </ListItem>
            ))}
          </List>
        </VStack>

        <VStack alignItems={"flex-start"} spacing={"0"}>
          <Heading m={"1vmax 0"} fontSize={"xl"} children={"About"} />
          <Text children={astrologer?.about} fontSize={['.9rem','1rem']}/>
        </VStack>
      
    
  </>
  )
}

export default AdminAstrologerAbout