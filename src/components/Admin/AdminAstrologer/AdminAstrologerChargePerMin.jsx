import { Button, Heading, HStack, Text,  Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AdminActiveLicenseOfAstrologer, AdminChangeMettingPriceOfAstrologer } from '../../../redux/action/AstrologerActions'

const AdminAstrologerChargePerMin = ({license,chargePerMin,astrologerId}) => {

    const {  loading } = useSelector(
		state => state.astrologerContainer
	);

    const { isOpen, onOpen, onClose } = useDisclosure()
	const [NewchargePerMin, SetChargePerMin] = useState('');


    const dispatch=useDispatch()

    const ActiveLicenseOfAstrologerHandler=async()=>{
        alert(astrologerId)
       await dispatch(AdminActiveLicenseOfAstrologer(astrologerId) )
    }
    const chargePerMinHandler=async()=>{
        await dispatch(AdminChangeMettingPriceOfAstrologer(astrologerId,NewchargePerMin) )
        SetChargePerMin('')
        onClose()
    }

  return (
  <>
    <HStack>
        <Button size={'sm'} onClick={()=>ActiveLicenseOfAstrologerHandler()} colorScheme={'whatsapp'} children={license===true?'Permission Granted':'Allow Astrologer'} />
        <Button size={'sm'} onClick={onOpen} colorScheme={'blue'} children={'Change chargePerMin Amount'} />
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Metting Price Of Astrologer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <form onSubmit={chargePerMinHandler()} > */}
                <Input
					value={NewchargePerMin}
					onChange={e => SetChargePerMin(e.target.value)}
					type="number"
					placeholder="SetChargePerMin - 20"
				/>
            {/* </form> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button isLoading={loading} onClick={()=>chargePerMinHandler()} colorScheme={'whatsapp'}>Change Price</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
    <Heading m={'1vmax 0'} children={'Charge Per Min'} />
    <Text children={`₹ ${chargePerMin?chargePerMin:'00'}/Min`}/>
  </>
  )
}

export default AdminAstrologerChargePerMin