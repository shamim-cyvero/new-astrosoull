import { Box, Heading, HStack,  Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Information = ({info}) => {

    return (
        <>
            <Box w={'100%'} alignItems={'flex-start'}>
                <VStack w={'100%'} alignItems={'flex-start'} spacing={7}>
                    <Heading fontSize={['1.1rem','1.4rem']} children={'About this course'} />
                    <Text fontSize={['.9rem','1.1rem']} fontWeight={'400'} children={info} />
                    <Heading fontSize={['1.1rem','1.4rem']} children={`What You'II get:`} />

                    <HStack w={'100%'} flexWrap={{ base: 'wrap', md: 'nowrap' }} spacing={{ base: 0, md: 4 }} alignItems={{ base: 'flex-start', md: 'center' }}>
                        <Heading w={{ base: '100%', md: '30%' }} fontSize={['1rem','1.2rem']} children={'Recorded Videos:'} />
                        <Text w={{ base: '100%', md: '70%' }} fontSize={['.9rem','1.1rem']} children={'East to follow videos to learn at your own pace.'} />
                    </HStack>
                    <HStack w={'100%'} flexWrap={{ base: 'wrap', md: 'nowrap' }} spacing={{ base: 0, md: 4 }} alignItems={{ base: 'flex-start', md: 'center' }}>
                        <Heading w={{ base: '100%', md: '30%' }} fontSize={['1rem','1.2rem']} children={'PPTs/PDFs:'} />
                        <Text w={{ base: '100%', md: '70%' }} fontSize={['.9rem','1.1rem']} children={'Visual slides and materials for better understanding'} />
                    </HStack>
                    <HStack w={'100%'} flexWrap={{ base: 'wrap', md: 'nowrap' }} spacing={{ base: 0, md: 4 }} alignItems={{ base: 'flex-start', md: 'center' }}>
                        <Heading w={{ base: '100%', md: '30%' }} fontSize={['1rem','1.2rem']} children={'WhatsApp Group:'} />
                        <Text w={{ base: '100%', md: '70%' }} fontSize={['.9rem','1.1rem']} children={'Connect with other,ask questions,and discuss.'} />
                    </HStack>
                    <HStack w={'100%'} flexWrap={{ base: 'wrap', md: 'nowrap' }} spacing={{ base: 0, md: 4 }} alignItems={{ base: 'flex-start', md: 'center' }}>
                        <Heading w={{ base: '100%', md: '30%' }} fontSize={['1rem','1.2rem']} children={'Quiz/Assignment:'} />
                        <Text w={{ base: '100%', md: '70%' }} fontSize={['.9rem','1.1rem']} children={`Test your knowledge and practice what you've learned.`} />
                    </HStack>
                    <HStack w={'100%'} flexWrap={{ base: 'wrap', md: 'nowrap' }} spacing={{ base: 0, md: 4 }} alignItems={{ base: 'flex-start', md: 'center' }}>
                        <Heading w={{ base: '100%', md: '30%' }} fontSize={['1rem','1.2rem']} children={'Certifiacte:'} />
                        <Text w={{ base: '100%', md: '70%' }} fontSize={['.9rem','1.1rem']} children={'Receive a certificate upon completion.'} />
                    </HStack>
                    <Text fontSize={['.9rem','1.1rem']} mt={'5px'} children={'Join us and start your astrology journey today!'} />
                </VStack >
            </Box>
           
        </>
    )
}

export default Information