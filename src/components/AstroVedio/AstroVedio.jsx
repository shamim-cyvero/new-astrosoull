import { Box, HStack, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import vedio1 from '../../assets/astroVedioImg/vedio1.png';
import vedio2 from '../../assets/astroVedioImg/vedio2.png';
import vedio3 from '../../assets/astroVedioImg/vedio3.png';
import vedio4 from '../../assets/astroVedioImg/vedio4.png';
import { Link } from 'react-router-dom';

const AstroVedio = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentVideoUrl, setCurrentVideoUrl] = useState('');

    const astrovedioData = [
        {
            image: vedio1,
            url: 'https://www.youtube.com/watch?v=KUAOJviZO-0&feature=youtu.be'
        },
        {
            image: vedio2,
            url: 'https://www.youtube.com/watch?v=wu5rojyEjdY&feature=youtu.be'
        },
        {
            image: vedio3,
            url: 'https://www.youtube.com/watch?v=ePwbgRseiE4&feature=youtu.be'
        },
        {
            image: vedio4,
            url: 'https://www.youtube.com/watch?v=FbV-LM05Ua4&feature=youtu.be'
        }
    ];

    const youtubeHandler = (url) => {
        // setCurrentVideoUrl(url);
        // onOpen();

    };

    return (
        <>
            <Stack w={'90%'} m={'80px auto'}  spacing={4} alignItems={'center'} justifyContent={'center'} direction={{base:'column',md:'row'}} flexWrap={'wrap'}>
                {astrovedioData.map((item, index) => (
                    <Link key={index} to={item.url} target='_blank' >
                    <Box key={index} w={'260px'}  boxShadow='lg'  rounded='md' bg='white' >
                        <Image src={item.image} alt={`video-${index}`} w={'100%'} />
                    </Box>
                    </Link>
                ))}
            </Stack>

            {/* <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <iframe src={currentVideoUrl} height="315" width="100%" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </ModalBody>
                </ModalContent>
            </Modal> */}
        </>
    );
};

export default AstroVedio;
