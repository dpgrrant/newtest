import React, { useState } from 'react';
import { Menu, MenuButton, Button, MenuList, MenuItem, Image, Flex,Box, Icon,Checkbox,Stack} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import ScrollableCardList from './ScrollableCardList'

const CustomMenuCards = ({ width, height }) => {
  const [selectedValue, setSelectedValue] = useState('1+ bed, 1+ bath');
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
        ml={'.2rem'}
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

      <MenuList bg={"white"}height={'15rem'}>
        <MenuItem height="3rem">
          Bedrooms
          <Flex ml={1}>
          <Button
          as={Button}
          colorScheme='black' variant='outline'
          width={'2rem'}
          _hover={{ bg: 'gray.300' }}
          css={{ transition: 'background-color 0.3s' }}
       
          >
            Any
          </Button><Button
          as={Button}
          colorScheme='black' variant='outline'
          width={'2rem'}
          _hover={{ bg: 'gray.300' }}
          css={{ transition: 'background-color 0.3s' }}
          
          >
            1+
          </Button>
          <Button
          as={Button}
          colorScheme='black' variant='outline'
          width={'2rem'}
          _hover={{ bg: 'gray.300' }}
          css={{ transition: 'background-color 0.3s' }}
         
          >
            2+
          </Button>
          <Button
          as={Button}
          colorScheme='black' variant='outline'
          width={'2rem'}
          _hover={{ bg: 'gray.300' }}
          css={{ transition: 'background-color 0.3s' }}
          
          >
            1
          </Button>
          <Button
          as={Button}
          colorScheme='black' variant='outline'
          width={'2rem'}
          _hover={{ bg: 'blue.100' }}
          css={{ transition: 'background-color 0.3s' }}

          >
            3+
          </Button>
          </Flex>
        </MenuItem>
        <Checkbox size='md' colorScheme='green' defaultChecked p={4}>
          Exact Bedrooms
        </Checkbox>

        <MenuItem height="3rem" mt={'4rem'}>
          Bathrooms
          <Button
          as={Button}
          colorScheme='black' variant='outline'
          width={'2rem'}
          _hover={{ bg: 'gray.300' }}
          css={{ transition: 'background-color 0.3s' }}
          
          >
            Any
          </Button><Button
          as={Button}
          colorScheme='black' variant='outline'
          width={'2rem'}
          _hover={{ bg: 'gray.300' }}
          css={{ transition: 'background-color 0.3s' }}
          
          >
            1+
          </Button>
          <Button
          as={Button}
          colorScheme='black' variant='outline'
          width={'2rem'}
          _hover={{ bg: 'gray.300' }}
          css={{ transition: 'background-color 0.3s' }}
          
          >
            2+
          </Button>
          <Button
          as={Button}
          colorScheme='black' variant='outline'
          width={'2rem'}
          _hover={{ bg: 'gray.300' }}
          css={{ transition: 'background-color 0.3s' }}
         
          >
            1
          </Button>
          <Button
          as={Button}
          colorScheme='black' variant='outline'
          width={'2rem'}
          _hover={{ bg: 'blue.100' }}
          css={{ transition: 'background-color 0.3s' }}
          
          >
            3+
          </Button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CustomMenuCards;
