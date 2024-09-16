import { Box, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import vedio1 from '../../assets/astroVedioImg/vedio1.png';
import vedio2 from '../../assets/astroVedioImg/vedio2.png';
import vedio3 from '../../assets/astroVedioImg/vedio3.png';
import vedio4 from '../../assets/astroVedioImg/vedio4.png';
import { Link } from 'react-router-dom';

const AstroVedio = () => {
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

  

    return (
        <>
            <Stack w m={'80px auto'}  spacing={4} alignItems={'center'} justifyContent={'center'} direction={{base:'column',md:'row'}} flexWrap={'wrap'}>
                {astrovedioData.map((item, index) => (
                    <Link key={index} to={item.url} target='_blank' >
                    <Box key={index} w={['350px','290px']}  boxShadow='lg'  rounded='md' bg='white'  mt={'30px'}>
                        <Image src={item.image} alt={`video-${index}`} w={'100%'} />
                    </Box>
                    </Link>
                ))}
            </Stack>
        </>
    );
};

export default AstroVedio;
