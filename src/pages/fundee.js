import React, { useState } from 'react';
import Head from 'next/head';
import Map from '../components/Map';
import SearchBar from '../components/SearchBar';
import { Box,Flex,Select,Spacer } from '@chakra-ui/react';
import Card from '../components/Card';
import CustomMenu from '../components/CustomMenu.js';
import ScrollableCardList from '../components/ScrollableCardList';
import CustomMenuCards from '../components/CustomMenuCards';
import Price from '../components/Price';

export default function funderHome() {
  const [center, setCenter] = useState(null);

  const handleSearch = async (location) => {
    try {
      // Make a request to the Google Geocoding API to retrieve the coordinates
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          location
        )}&key=YAIzaSyCHbxocI6HsJITlFLYqj7PSqCLEWGsMyzk`
      );
      const data = await response.json();

      // Extract the latitude and longitude from the response
      const { lat, lng } = data.results[0].geometry.location;

      // Update the center state with the new coordinates
      setCenter({ lat, lng });
    } catch (error) {
      console.error('Error retrieving location data:', error);
    }
  };

  return (
    <div className="container">
      
      <Flex width="90vw" mt={'15vh'}direction="row"  justify="left"align="center">
        <SearchBar onSearch={handleSearch} width='30vw'/>
        
        <CustomMenu width="12vw" height="2rem" />
        <Price width="7remm" height="2rem"></Price>
        <CustomMenuCards width="17vw" height="2rem"></CustomMenuCards>
        
      </Flex>
      <Box p={7} width="90vw" height="90vh">
        <Map center={center} />
      </Box>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .card-container {
          overflow-x: scroll;
          white-space: nowrap;
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