import { Avatar, Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa6";
import Rating from "react-rating";

const AstrologerReviews = ({ review }) => { 
  return (
    <>
     {
                review && review.map((item) => (
                    // <Heading mt={10} fontSize={'1.5rem'} children={'Comments'} />
                    <Box w={'100%'} p={5} mb={5} spacing={5} alignItems={'center'} justifyContent={'center'} boxShadow='lg' mt={'10px'} rounded='md' bg='white'>
                        <Heading   mb={5} fontSize={'1.3rem'} children={'Comments : '} />
                        <HStack w={'100%'}>
                            <Avatar name={item.avatar} src={item.avatar} size={'lg'} />
                            <VStack w={'100%'} alignItems={'flex-start'} ml={5}>
                                <Heading children={item.name} fontSize={'lg'} color={'#1f3b64'} textTransform={'capitalize'}/>
                                <Text children={item.comment} fontSize={'md'} color={'grey'}/>
                                <Rating
                                    emptySymbol={<FaStar color='gray' fontSize={'1.5vmax'} />}
                                    fullSymbol={<FaStar color='tomato' fontSize={'1.5vmax'} />}
                                    initialRating={item.rating}
                                    readonly
                                />
                                {/* <Text children={item.rating} fontSize={'md'} /> */}
                            </VStack>

                        </HStack>
                    </Box>
                ))
            }
    </>
  );
};

export default AstrologerReviews;
