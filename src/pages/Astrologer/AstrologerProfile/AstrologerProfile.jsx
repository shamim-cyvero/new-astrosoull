import React, { useState } from 'react'
import { Avatar,Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton, AvatarBadge, Button, Heading, HStack, Stack, Text, VStack,Tab, TabList, TabPanel, TabPanels, Tabs, ListItem, List, ListIcon, 
  useDisclosure,
  Input,
  Textarea} from "@chakra-ui/react";
import AstrologerMeeting from './AstrologerMeeting';
import AstrologerReviews from './AstrologerReviews';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ChangeAvatarAstrologer, LoadAstrologer, UpdateAstrologerDetails } from '../../../redux/action/AstrologerActions';
import AstrologerAbout from './AstrologerAbout';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa6';

const AstrologerProfile = () => {
 
    const [avatar, setAvatar] = useState("") 
	const [showModel, setShowModel] = useState();

	const [name, SetName] = useState('');
	const [phone, SetPhone] = useState('');
	const [email, SetEmail] = useState('');
	const [address, SetAddress] = useState('');
	const [about, SetAbout] = useState('');
	const [chargePerMin, SetChargePerMin] = useState('');
	const [expert, SetExpert] = useState('');
	const [language, SetLanguage] = useState('');

	// chargePerMin, expert, language
	const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch=useDispatch()
  const navigate=useNavigate()

    const {  loading, isAuthenticated,astrologer } = useSelector(
		state => state.astrologerContainer
	);
    const showModelHandler = i => {
        setShowModel(i);
        onOpen();
      };
    const AstrologerUpdateAvatarHandler =async (e) => {
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
        await dispatch(ChangeAvatarAstrologer(avatar));
            dispatch(LoadAstrologer())
  
            onClose();
            navigate('/astrologerprofile');
      };
      const ChangeAstrologerDetailsHandler = async () => {
        await dispatch(UpdateAstrologerDetails(name, phone, email, address,about,chargePerMin, expert, language));
        dispatch(LoadAstrologer())
    
        onClose();
        navigate('/astrologerprofile');
      };

  return (

    <>
    <Stack bgColor={'white'} borderRadius={'10px'} boxShadow='lg' spacing={'10'}  w={'80%'} p={'6'} m={'1.5vmax auto'} alignItems={'center'} justifyContent={'flex-start'} direction={{base:'column',md:'row',lg:'row'}}>
					
        {/* Avatar and change Model */}
        <VStack>
          <Avatar  w={'15vmax'} h={'15vmax'} src={astrologer?.avatar?.url} name={astrologer?.name} />
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
											onChange={AstrologerUpdateAvatarHandler}
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

		{/* astrologer Details and change Model */}
        <VStack p={2} spacing={'1'} alignItems={'flex-start'} >
            <Heading letterSpacing={'4px'}  fontSize={['2xl','3xl']} textTransform={'capitalize'} children={astrologer?.name} />
            <HStack >              
            	<Rating
            	  emptySymbol={<FaStar color='gray' />}
            	  fullSymbol={<FaStar color='tomato' />}
            	  initialRating={astrologer?.rating}
            	  readonly
            	/>
            	<Button cursor={'default'} size={'sm'} colorScheme={'whatsapp'} children={astrologer?.rating} />
			<Text children={`₹${astrologer?.chargePerMin}/Min`} />
            </HStack>
            <Text children={`${astrologer?.expert} | ${astrologer?.language}`} />
            <Text children={astrologer?.email} />
            <Text children={astrologer?.phone} />
            <Text children={astrologer?.address} />
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
										<Textarea
											value={about}
											onChange={e => SetAbout(e.target.value)}
											type="text"
											placeholder="about"
										/>
										<Input
											value={chargePerMin}
											onChange={e => SetChargePerMin(e.target.value)}
											type="number"
											placeholder="SetChargePerMin - 20"
										/>
										<Input
											value={expert}
											onChange={e => SetExpert(e.target.value)}
											type="text"
											placeholder="Vedic, Numerology, Astrology, Numerology"
										/>
										<Input
											value={language}
											onChange={e => SetLanguage(e.target.value)}
											type="text"
											placeholder="Hindi,English"
										/>
									</VStack>
								</ModalBody>

								<ModalFooter>
									<Button
										onClick={ChangeAstrologerDetailsHandler}
										children={'submit'}
										mr={3}
										// variant={'solid'}
										colorScheme={'whatsapp'}
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

		{/* go to deshboard btn */}
    </Stack>

    {/* tabs start */}
    <Tabs w={'80%'} m={'1vmax auto'}  size='md' >
    <TabList p={'4'}>
      <Tab _selected={{borderBottom:'3px solid green' }} mr={'2vmax'}>Meeting</Tab>
      <Tab _selected={{borderBottom:'3px solid green' }}>Reviews</Tab>
      <Tab _selected={{borderBottom:'3px solid green' }}>About</Tab>
	  {
		astrologer?.role==='admin'?(
			<Tab _selected={{borderBottom:'3px solid green' }}>Deshboard</Tab>
		):null
	  }
    </TabList>

    <TabPanels >

      <TabPanel p={'4'}>
       <AstrologerMeeting  />
      </TabPanel>  

      <TabPanel p={'4'}>
        {/* <AstrologerReviews  /> */}
        <AstrologerReviews review={astrologer?.review} />
      </TabPanel>

      <TabPanel p={'4'}>
        <AstrologerAbout />
      </TabPanel>
	  {
		astrologer?.role==='admin'?(
			<>			
	  			<TabPanel p={'4'}>
					<Button onClick={()=>navigate('/admin/dashboard')} children={'Go To Deshboard'} colorScheme={'whatsapp'} />
      			</TabPanel>
			</>
		):null
	  }


    </TabPanels>
  </Tabs>
</>

  )
}

export default AstrologerProfile