import React, { useState } from 'react';
import { Menu, MenuButton, Button, MenuList, MenuItem, Image, Flex, Icon } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const CustomMenu = ({ width, height }) => {
  const [selectedValue, setSelectedValue] = useState('For Sale');
  const [selectedImageSrc, setSelectedImageSrc] = useState('https://placekitten.com/100/100');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = (value, imageSrc) => {
    setSelectedValue(value);
    setSelectedImageSrc(imageSrc);
    setIsMenuOpen(false);
  };

  const handleMenuButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
      <MenuButton
       ml={'.2rem'}
        as={Button}
        rightIcon={isMenuOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        width={width}
        bg={isMenuOpen ? 'gray.300' : 'gray.100'}
        _hover={{ bg: 'gray.300' }}
        css={{ transition: 'background-color 0.3s' }}
        onClick={handleMenuButtonClick}
      >
        <Flex align="center">
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={selectedImageSrc}
            alt={selectedValue}
            mr="12px"
          />
          {selectedValue}
        </Flex>
      </MenuButton>
      <MenuList bg="white">
        <MenuItem
          minH="48px"
          onClick={() =>
            handleMenuItemClick('For Sale', 'https://placekitten.com/100/100')
          }
        >
          <Image
            boxSize="2rem"
            borderRadius="full"
            src="https://placekitten.com/100/100"
            alt="Fluffybuns the destroyer"
            mr="12px"
          />
          <span>For Sale</span>
        </MenuItem>
        <MenuItem
          minH="40px"
          onClick={() =>
            handleMenuItemClick('For Rent', 'https://placekitten.com/120/120')
          }
        >
          <Image
            boxSize="2rem"
            borderRadius="full"
            src="https://placekitten.com/120/120"
            alt="Simon the pensive"
            mr="12px"
          />
          <span>For Rent</span>
        </MenuItem>
        <MenuItem
          minH="40px"
          onClick={() => handleMenuItemClick('Sold', 'https://placekitten.com/150/150')}
        >
          <Image
            boxSize="2rem"
            borderRadius="full"
            src="https://placekitten.com/150/150"
            alt="Simon the pensive"
            mr="12px"
          />
          <span>Sold</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CustomMenu;
