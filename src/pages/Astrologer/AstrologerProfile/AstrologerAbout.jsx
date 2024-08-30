import React, { useState, useEffect } from "react";
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
import { MdCheckCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AstrologerAddNewExpAndEdu,
  AstrologerDeleteEdu,
  AstrologerDeleteExp,
  LoadAstrologer,
} from "../../../redux/action/AstrologerActions";
import { FiDelete } from "react-icons/fi";

const AstrologerAbout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [about, SetAbout] = useState("");
  const [ShowAbout, SetShowAbout] = useState(false);
  const [education, SetEducationData] = useState("");
  const [experience, SetExperienceData] = useState("");

  const { loading, isAuthenticated, astrologer } = useSelector(
    (state) => state.astrologerContainer
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleExpAndEdu = async () => {
    await dispatch(AstrologerAddNewExpAndEdu(education, experience));
    await dispatch(LoadAstrologer());
  };

  const deleteExpHandler = async (expId) => {
    await dispatch(AstrologerDeleteExp(expId));
    await dispatch(LoadAstrologer());
  };
  const deleteEduHandler = async (eduId) => {
    alert(eduId)
    await dispatch(AstrologerDeleteEdu(eduId));
    await dispatch(LoadAstrologer());
  };

  return (
    <>
      <Button
        variant={"link"}
        onClick={onOpen}
        children={"Add New Experience & Education"}
        colorScheme={"whatsapp"}
      />
      <Button
        ml={"1vmax"}
        variant={"link"}
        onClick={() => SetShowAbout(!ShowAbout)}
        children={ShowAbout?'save About':`Update About`}
        colorScheme={ShowAbout?"red":"whatsapp"}
      />

      {/* about update modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>New Experience & Education</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <VStack p={"5"} alignItems={"flex-start"} spacing={"1"}>
                    <Heading
                      m={"1vmax 0"}
                      fontSize={"xl"}
                      children={"Experience"}
                    />
                    <Input
                      value={experience}
                      onChange={(e) => SetExperienceData(e.target.value)}
                      placeholder={"Experiences"}
                    />
                    <Heading
                      m={"1vmax 0"}
                      fontSize={"xl"}
                      children={"Education"}
                    />
                    <Input
                      value={education}
                      onChange={(e) => SetEducationData(e.target.value)}
                      placeholder={"Education"}
                    />
                  </VStack>
                </ModalBody>

                <ModalFooter>
                  <Button
                    children={"submit"}
                    mr={3}
                    variant={"solid"}
                    colorScheme={"orange"}
                    onClick={() => HandleExpAndEdu()}
                  />
                  <Button
                    children={"Close"}
                    colorScheme="blue"
                    onClick={onClose}
                  />
                </ModalFooter>
              </ModalContent>
            </Modal>
          </ModalBody>
        </ModalContent>
      </Modal>

      {ShowAbout && ShowAbout === true ? (
        <>
          <VStack mb={"2vmax"} alignItems={"flex-start"} spacing={"0"}>
            <Heading m={"1vmax 0"} fontSize={"xl"} children={"Education"} />
            <List spacing={1}>
              {astrologer?.education?.map((item, i) => (
                <ListItem key={i}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  {item.edu}
                  <IconButton onClick={()=>deleteEduHandler(item._id)} ml={'1vmax'} size='sm' icon={<FiDelete />} colorScheme={'whatsapp'}  />
                </ListItem>
              ))}
            </List>
          </VStack>

          <VStack mb={"2vmax"} alignItems={"flex-start"} spacing={"0"}>
            <Heading m={"1vmax 0"} fontSize={"xl"} children={"Experiences"} />
            <List spacing={1}>
              {astrologer?.experience?.map((item, i) => (
                <ListItem key={i}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  {item.exp}
                  <IconButton onClick={()=>deleteExpHandler(item._id)} ml={'1vmax'} size='sm' icon={<FiDelete />} colorScheme={'whatsapp'}  />
                </ListItem>
              ))}
            </List>
          </VStack>

          {/* <VStack alignItems={"flex-start"} spacing={"0"}>
            <Heading m={"1vmax 0"} fontSize={"xl"} children={"About"} />
            <Textarea
              value={astrologer?.about}
              onChange={(e) => SetAbout(e.target.value)}
            />
          </VStack> */}

          <Button
            colorScheme={"whatsapp"}
            children={"save"}
            onClick={() => HandleUpateExpAndEdu()}
          />
        </>
      ) : (
        <>
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
            <List spacing={1}>
              {astrologer?.experience?.map((item, i) => (
                <ListItem key={i}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  {item.exp}
                </ListItem>
              ))}
            </List>
          </VStack>

          <VStack alignItems={"flex-start"} spacing={"0"}>
            <Heading m={"1vmax 0"} fontSize={"xl"} children={"About"} />
            <Text children={astrologer?.about} />
          </VStack>
        </>
      )}
    </>
  );
};

export default AstrologerAbout;
