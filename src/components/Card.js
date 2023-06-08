import React, { useState } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';

const Card = ({ title, content, buttonText, imageSrc, height, width }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg={isClicked ? 'gray.300' : 'white'}
      onClick={handleClick}
      borderRadius="md"
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
      transition="transform 0.3s, box-shadow 0.3s, background-color 0.3s"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
      }}
      height={height}
      width={width}
    >
      <Text
        fontWeight="bold"
        textAlign="center"
        color={isClicked ? 'red' : 'black'}
        fontSize="2xl"
      >
        {title}
      </Text>
      <Text mt={2} textAlign="center">
        {content}
      </Text>
      
    </Box>
  );
};

export default Card;
