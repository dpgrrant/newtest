import { useState } from 'react';
import {
  useColorMode,
  Switch,
  Box,
  useColorModeValue,
  isOpen,
  HStack,
  MenuList,
  MenuItem,
  Avatar,
  MenuDivider,
  onOpen,
  Flex,
  Link,
  Button,
  ChakraProvider,
  Menu,
  NavLink,
  MenuButton,
  IconButton,
  Spacer,
} from '@chakra-ui/react';
import Router from 'next/router';
import { extendTheme } from '@chakra-ui/react';
import Image from 'next/image';
import logo from '../../images/SizzleLogo.png';

export default function DarkModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [display, changeDisplay] = useState('none');
  return (
    <>
      <Box bg="white" w="100%" position="fixed" top={0} zIndex="sticky">
        <Flex h={12} alignItems="center" justifyContent="center">
          <HStack spacing={5} alignItems="center">
            <HStack as="nav" spacing={10} display={{ base: 'none', md: 'flex' }} >
              <Link onClick={() => Router.push('/')}>
                <Image src={logo} pt={2} width="135" height="135" />
              </Link>
              <Link onClick={() => Router.push('/')} fontWeight="bold">
                Buy
              </Link>
              <Link onClick={() => Router.push('/')} fontWeight="bold">
                Rent
              </Link>
              <Link onClick={() => Router.push('/')} fontWeight="bold">
                Sell
              </Link>
              <Link onClick={() => Router.push('/')} fontWeight="bold">
                Finance
              </Link>
              <Link onClick={() => Router.push('/')} fontWeight="bold">
                Insurance
              </Link>
              <Link onClick={() => Router.push('/')} fontWeight="bold">
                Help
              </Link>
              <Link onClick={() => Router.push('/')} fontWeight="bold">
                Sign In
              </Link>
            </HStack>
          </HStack>
        </Flex>
      </Box>
      
    </>
  );
}
