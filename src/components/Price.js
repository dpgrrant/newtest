import React, { useState } from 'react';
import { Menu, MenuButton, Button, MenuList, MenuItem, Image, Flex,Box, Icon,Checkbox,Stack} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import ScrollableCardList from './ScrollableCardList'

const Price = ({ width, height }) => {
  const [selectedValue, setSelectedValue] = useState('Price');
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
        as={Button}
        rightIcon={isMenuOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        width={width}
        ml={'.2rem'}
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

      <MenuList bg={"white"}height={'15rem'}>
        
      </MenuList>
    </Menu>
  );
};

export default Price;
