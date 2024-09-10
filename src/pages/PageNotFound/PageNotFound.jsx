import { Button, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import pic from '../PageNotFound/page.gif'
import { useNavigate } from 'react-router-dom'
const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <>
            <VStack m={'30px 0px'}>

                <Image src={pic} w={'100%'} />
                <Button onClick={()=>navigate('/')} size={['sm','md','lg']}>Go Back to Home</Button>
            </VStack>
        </>
    )
}

export default PageNotFound