import React, { useState } from 'react'
import astro10 from "../../../assets/astrologerImg/astro10.png";

import { Avatar,Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton, AvatarBadge, Button, Heading, HStack, Stack, Text, VStack,Tab, TabList, TabPanel, TabPanels, Tabs, ListItem, List, ListIcon, 
  useDisclosure,
  Input} from "@chakra-ui/react";
import UserCourse from './UserCourse';
import UserMeeting from './UserMeeting';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeAvatarUser, LoadUser, UpdateUserDetails } from '../../../redux/action/UserActions';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => { 
  const [avatar, setAvatar] = useState("") 
	const [showModel, setShowModel] = useState();

	const [name, SetName] = useState('');
	const [phone, SetPhone] = useState('');
	const [email, SetEmail] = useState(''); 
	const [address, SetAddress] = useState('');

	const { isOpen, onOpen, onClose } = useDisclosure();

  
  const dispatch=useDispatch()
  const navigate=useNavigate()


  
  const {  loading, isAuthenticated,user } = useSelector(
		state => state.userContainer
	);

    const showModelHandler = i => {
      setShowModel(i);
      onOpen();
    };
    const UserUpdateAvatarHandler =async (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
        }
      };
      
      
    };
    const ChangeAvatarHandler = async() => {
      await dispatch(ChangeAvatarUser(avatar));
		  dispatch(LoadUser())

		  onClose();
		  navigate('/userprofile');
    };
    const ChangeUserDetailsHandler = async () => {
      await dispatch(UpdateUserDetails(name, phone, email, address));
      dispatch(LoadUser())
  
      onClose();
      navigate('/userprofile');
    };
  return ( 
    <>
    <Stack bgColor={'white'} borderRadius={'10px'} boxShadow='lg' spacing={'10'}  w={'80%'} p={'6'} m={'1.5vmax auto'} alignItems={'center'} justifyContent={'flex-start'} direction={{base:'column',md:'row',lg:'row'}}>
					
        {/* Avatar and change Model */}
        <VStack>
          <Avatar  w={'15vmax'} h={'15vmax'} src={user?.avatar?.url} name={user?.name} />
          <Button onClick={() =>showModelHandler(1)} variant={'link'} children={'change avatar'} colorScheme={'whatsapp'} />
          
          <Modal isOpen={showModel === 1 ? isOpen : null} onClose={onClose}>
							<ModalOverlay />
							<ModalContent>
								<ModalHeader>Change Your Profile</ModalHeader>
								<ModalCloseButton />
								<ModalBody>
									<VStack spacing={'4'}>
										<Input
											css={{
												'&::file-selector-button': {
													cursor: 'pointer',
													width: '110%',
													marginLeft: '-5%',
													border: 'none',
													height: '100%',
													color: 'blue',
													backgroundColor: 'white',
												},
											}}
											onChange={UserUpdateAvatarHandler}
											type="file"
											placeholder="files"
											accept="image/*"
										/>
									</VStack>
								</ModalBody>

								<ModalFooter>
									<Button
										onClick={ChangeAvatarHandler}
										children={'submit'}
										mr={3}
										variant={'solid'}
										colorScheme={'orange'}
										isLoading={loading}
									/>
									<Button
										children={'Close'}
										colorScheme="blue"
										onClick={onClose}
										isDisabled={loading}
									/>
								</ModalFooter>
							</ModalContent>
				  </Modal>
        </VStack>

				{/* User Details and change Model */}
        <VStack p={2} spacing={'1'} alignItems={'flex-start'} >
            <Heading letterSpacing={'4px'}  fontSize={'3xl'} children={user?.name} />
            <Text children={user?.email} />
            <Text children={user?.phone} />
            <Text children={user?.address} />
          <Button onClick={() =>showModelHandler(2)} variant={'link'} children={'Update Details'} colorScheme={'whatsapp'} />
          <Modal isOpen={showModel === 2 ? isOpen : null} onClose={onClose}>
							<ModalOverlay />
							<ModalContent>
								<ModalHeader>Change Your Details</ModalHeader>
								<ModalCloseButton />
								<ModalBody>
									<VStack spacing={'4'}>
										<Input
											value={name}
											onChange={e => SetName(e.target.value)}
											type="text"
											placeholder="name"
										/>
										<Input
											value={email}
											onChange={e => SetEmail(e.target.value)}
											type="email"
											placeholder="email"
										/>
										<Input
											value={address}
											onChange={e => SetAddress(e.target.value)}
											type="text"
											placeholder="address"
										/>
										<Input
											value={phone}
											onChange={e => SetPhone(e.target.value)}
											type="number"
											placeholder="phone"
										/>
									</VStack>
								</ModalBody>

								<ModalFooter>
									<Button
										onClick={ChangeUserDetailsHandler}
										children={'submit'}
										mr={3}
										variant={'solid'}
										colorScheme={'orange'}
										isLoading={loading}
									/>
									<Button
										children={'Close'}
										colorScheme="blue"
										onClick={onClose}
										isDisabled={loading}
									/>
								</ModalFooter>
							</ModalContent>
						</Modal>
          
        </VStack>
    </Stack>

    {/* tabs start */}
    <Tabs w={'80%'} m={'1vmax auto'}  size='md' >
    <TabList p={'4'}>
      <Tab _selected={{borderBottom:'3px solid green' }} mr={'2vmax'}>Meeting</Tab>
      <Tab _selected={{borderBottom:'3px solid green' }}>Course</Tab>
    </TabList>

    <TabPanels >

      <TabPanel p={'4'}>
       <UserMeeting meeting={user?.meeting} />
      </TabPanel>

      <TabPanel p={'4'}>
        <UserCourse course={user?.course} />
      </TabPanel>

    </TabPanels>
  </Tabs>
</>
  )
}

export default UserProfile