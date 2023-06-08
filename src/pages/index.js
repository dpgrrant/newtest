import Head from 'next/head'
import Image from 'next/image'
import logo from '../../images/SizzleLogo.png'
import forsale from  '../../images/buy.png'
import rent from  '../../images/Rent.png'
import sell from  '../../images/sell.png'
import SearchBar from '../components/SearchBar'
import Map from '../components/Map'

import LandingPagePhoto from '../../images/LandingPagePhoto.png'; 
import Card from '../components/Card';
import Globe from '../components/Globe'
import React from 'react';
import ReactDOM from 'react-dom';


import {
  useColorMode,
  Switch,
  Box,
  useColorModeValue,
  Flex,
  Link,
  Button,
  ChakraProvider,
  Menu,
  NavLink,
  MenuButton,
  IconButton,
  Spacer
} from '@chakra-ui/react'

export default function Home() {
  return (
    
    <div className="container">
      <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      height="55vh"
    >
      
      <Box
        width="60rem"
        height="35rem"
        display="flex"
        borderRadius="0 0 30px 30px"
        bg='blue.300'
        bgGradient={'linear-gradient(to bottom, #86B9FF, #FFFFFF)'}
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        p={4}
      >
        {
          <><Globe width={500} height={300} />
         <SearchBar height={"5vh"} width={"40vw"}></SearchBar>
          </>
          }
      </Box>

      
      
     </Box>
     
    
     <Flex display="flex"
      justifyContent="center"
      alignItems="flex-start"  height="100vh" width="60rem">
     <Card title="Buy" content="Card content 1" imageSrc={forsale}  buttonText="Start Here "  height="400px" width="425px" />
     <Spacer mx={4} ></Spacer>
      <Card title="Rent" content="Card content 2" imageSrc={rent} buttonText="Find Rentals" height="400px" width="425px" />
      <Spacer mx={4} ></Spacer>
      <Card title="Sell" content="Card content 3" imageSrc={sell} buttonText="See Options" height="400px" width="425px" />
    </Flex>
    
     
      

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}