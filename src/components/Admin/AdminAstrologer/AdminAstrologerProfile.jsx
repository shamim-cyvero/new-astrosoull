import React from "react";
import {
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  AvatarBadge,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  ListItem,
  List,
  ListIcon,
  useDisclosure,
  Input,
  Textarea,
  Grid,
  Box,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import AdminAstrologerAbout from "./AdminAstrologerAbout";
import AdminAstrologerReviews from "./AdminAstrologerReviews";
import AdminAstrologerMeeting from "./AdminAstrologerMeeting";
import { useNavigate } from "react-router-dom";
import { LoadSingleAstrologerDetails } from "../../../redux/action/AstrologerActions";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa6";
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminSideBar from "../AdminSideBar/AdminSideBar";
 
const AdminAstrologerProfile = () => {
    const {  loading, isAuthenticated,SingleAstrologer } = useSelector(
		state => state.astrologerContainer
	);
    const dispatch=useDispatch()
    const navigate=useNavigate() 

  return ( 
    <>
    
    {
      SingleAstrologer?(

    <>
        <AdminHeader />  
        <Grid w={'100%'} height={'100vh'} bgColor={'rgb(247, 247, 247)'} gridTemplateColumns={{ base: '1fr', md: '1fr', lg: '1fr 4fr' }} gap={'2rem'} >
          <AdminSideBar/>
          <Box overflowY={'auto'} p={3} >
            <Stack
          bgColor={"white"}
          borderRadius={"10px"}
          boxShadow="lg"
          spacing={"10"}
          w={"80%"}
          p={"6"}
          m={"1.5vmax auto"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          direction={{ base: "column", md: "row", lg: "row" }}
        >
          {/* Avatar and change Model */}
          <VStack>
            <Avatar
              w={"15vmax"}
              h={"15vmax"}
              src={SingleAstrologer?.avatar?.url}
              name={SingleAstrologer?.name}
            />

      
          </VStack>

          {/* astrologer Details and change Model */}
          <VStack p={2} spacing={"1"} alignItems={"flex-start"}>
            <Heading
              letterSpacing={"4px"}
              fontSize={"3xl"}
              children={SingleAstrologer?.name}
            />
            <HStack>
              <Rating
                emptySymbol={<FaStar color="gray" />} 
                fullSymbol={<FaStar color="tomato" />}
                initialRating={SingleAstrologer?.rating}
                readonly
              />
              <Button
                size={"sm"}
                colorScheme={"whatsapp"}
                children={SingleAstrologer?.rating}
                cursor={'default'}
              />
			        <Text children={`₹ ${SingleAstrologer.chargePerMin?SingleAstrologer.chargePerMin:'00'}/Min`} />

            </HStack>
            <Text children={`${SingleAstrologer.expert?SingleAstrologer.expert:'no update'}} | ${SingleAstrologer.language?SingleAstrologer.language:'no update'}`} />
            <Text children={SingleAstrologer?.email} />
            <Text children={SingleAstrologer?.phone} />
            <Text children={SingleAstrologer?.address} />

          </VStack>

          {/* go to deshboard btn */}
            </Stack>

            {/* tabs start */}
            <Tabs w={"80%"} m={"1vmax auto"} size="md">
          <TabList p={"4"}>
            <Tab _selected={{ borderBottom: "3px solid green" }} mr={"2vmax"}>
              Meeting
            </Tab>
            <Tab _selected={{ borderBottom: "3px solid green" }}>Reviews</Tab>
            <Tab _selected={{ borderBottom: "3px solid green" }}>About</Tab>
          </TabList>

          <TabPanels>
            <TabPanel p={"4"}>
              <AdminAstrologerMeeting />
            </TabPanel>

            <TabPanel p={"4"}>
              {/* <AstrologerReviews  /> */}
              <AdminAstrologerReviews astrologerId={SingleAstrologer?._id} loading={loading} review={SingleAstrologer?.review} />
            </TabPanel>

            <TabPanel p={"4"}>
              <AdminAstrologerAbout />
            </TabPanel>
          </TabPanels>
            </Tabs>

          </Box>
        </Grid>

    </>
      ):(
      navigate('/admin/astrologer')
      )
    }
    </>
  );
};

export default AdminAstrologerProfile;
