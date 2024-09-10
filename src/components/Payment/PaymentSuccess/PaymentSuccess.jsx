import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa";
import { Button, Heading, Text, VStack } from '@chakra-ui/react';


const PaymentSuccess = () => {
    const navigate=useNavigate()


    const search = useSearchParams()[0]
    const refrenceid = search.get("refrence") 
    return (
        <VStack w={'100%'} h={'70vh'} justifyContent={'center'} alignItems={'center'} >
            <FaCheckCircle color={'#2ac362'} size={'10vmax'} />
            <Heading fontSize={'2vmax'}>Payment Success</Heading>
            <Text fontSize={'1.5vmax'}>payment id: {refrenceid}</Text>
            <Button onClick={()=>navigate('/userprofile')} colorScheme={'whatsapp'} children={'Go To Profile'} />
        </VStack>
    )
}

export default PaymentSuccess