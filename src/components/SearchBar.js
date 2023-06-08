import React from 'react';
import { Box, Input, InputGroup, InputLeftElement, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = ({ height, width }) => {
  return (
    <Box >
      <InputGroup >
        
        <Input
          type="text"
          placeholder="Enter an address, neighboorhood, city or zip code"
          icon={<SearchIcon />}
          height={height}
          width={width}
          bg='gray.100'
        />
        <InputLeftElement pointerEvents='none'>
      <SearchIcon color='gray.500' />
    </InputLeftElement>
        
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
