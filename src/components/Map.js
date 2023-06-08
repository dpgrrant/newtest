import React, { useEffect, useState } from 'react';
import { useScript } from '@chakra-ui/react';
import { GoogleMap, useJsApiLoader, Polygon } from '@react-google-maps/api';
import dynamic from 'next/dynamic';
import Card from '../components/Card';
import CustomMenu from '../components/CustomMenu.js';
import ScrollableCardList from '../components/ScrollableCardList';
import CustomMenuCards from '../components/CustomMenuCards';
import Price from '../components/Price';
import floridaCoordinates1 from './data/Florida_1.json';
import floridaCoordinates2 from './data/Florida_2.json';
import floridaCoordinates3 from './data/Florida_3.json';
import floridaCoordinates4 from './data/Florida_4.json';
import floridaCoordinates5 from './data/Florida_5.json';
import floridaCoordinates6 from './data/Florida_6.json';
import floridaCoordinates7 from './data/Florida_7.json';
import floridaCoordinates8 from './data/Florida_8.json';
import floridaCoordinates9 from './data/Florida_9.json';
import floridaCoordinates10 from './data/Florida_10.json';
import floridaCoordinates11 from './data/Florida_11.json';
import floridaCoordinates12 from './data/Florida_12.json';
import floridaCoordinates13 from './data/Florida_13.json';
import floridaCoordinates14 from './data/Florida_14.json';
import floridaCoordinates15 from './data/Florida_15.json';
import floridaCoordinates16 from './data/Florida_16.json';
import floridaCoordinates17 from './data/Florida_17.json';
import floridaCoordinates18 from './data/Florida_18.json';
import floridaCoordinates19 from './data/Florida_19.json';
import floridaCoordinates20 from './data/Florida_20.json';
import floridaCoordinates21 from './data/Florida_21.json';
import floridaCoordinates22 from './data/Florida_22.json';
import floridaCoordinates23 from './data/Florida_23.json';
import floridaCoordinates24 from './data/Florida_24.json';
import floridaCoordinates25 from './data/Florida_25.json';
import floridaCoordinates26 from './data/Florida_26.json';
import floridaCoordinates27 from './data/Florida_27.json';
import floridaCoordinates28 from './data/Florida_28.json';
import floridaCoordinates29 from './data/Florida_29.json';
import floridaCoordinates30 from './data/Florida_30.json';
import floridaCoordinates31 from './data/Florida_31.json';
import floridaCoordinates32 from './data/Florida_32.json';
import floridaCoordinates33 from './data/Florida_33.json';
import floridaCoordinates34 from './data/Florida_34.json';
import floridaCoordinates35 from './data/Florida_35.json';
import floridaCoordinates36 from './data/Florida_36.json';
import floridaCoordinates37 from './data/Florida_37.json';
import floridaCoordinates38 from './data/Florida_38.json';
import floridaCoordinates39 from './data/Florida_39.json';
import floridaCoordinates40 from './data/Florida_40.json';
import floridaCoordinates41 from './data/Florida_41.json';
import floridaCoordinates42 from './data/Florida_42.json';
import floridaCoordinates43 from './data/Florida_43.json';
import floridaCoordinates44 from './data/Florida_44.json';
import floridaCoordinates45 from './data/Florida_45.json';
import floridaCoordinates46 from './data/Florida_46.json';
import floridaCoordinates47 from './data/Florida_47.json';
import floridaCoordinates48 from './data/Florida_48.json';
import floridaCoordinates49 from './data/Florida_49.json';
import floridaCoordinates50 from './data/Florida_50.json';
import floridaCoordinates51 from './data/Florida_51.json';
import floridaCoordinates52 from './data/Florida_52.json';
import floridaCoordinates53 from './data/Florida_53.json';
import floridaCoordinates54 from './data/Florida_54.json';
import floridaCoordinates55 from './data/Florida_55.json';
import floridaCoordinates56 from './data/Florida_56.json';
import floridaCoordinates57 from './data/Florida_57.json';
import floridaCoordinates58 from './data/Florida_58.json';
import floridaCoordinates59 from './data/Florida_59.json';
import floridaCoordinates60 from './data/Florida_60.json';
import floridaCoordinates61 from './data/Florida_61.json';
import floridaCoordinates62 from './data/Florida_62.json';
import floridaCoordinates63 from './data/Florida_63.json';
import floridaCoordinates64 from './data/Florida_64.json';
import floridaCoordinates65 from './data/Florida_65.json';
import floridaCoordinates66 from './data/Florida_66.json';
import floridaCoordinates67 from './data/Florida_67.json';


const containerStyle = {
    width: '100%',
    height: '100%',
  };
  
  const Map = () => {
    const { isLoaded, loadError } = useJsApiLoader({
      googleMapsApiKey: 'AIzaSyCHbxocI6HsJITlFLYqj7PSqCLEWGsMyzk',
    });
  
    const [center, setCenter] = useState(null);
    const [highlightedCounty, setHighlightedCounty] = useState(null);
    const [mousePosition, setMousePosition] = useState(null);
  
    useEffect(() => {
      // Get latitude and longitude from browser
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setCenter({ lat: 29.057947, lng: -80.482405 });
          },
          (error) => {
            console.error('Error getting location:', error.message);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    }, []);
  
    const DynamicMap = dynamic(() => import('@react-google-maps/api').then((module) => module.GoogleMap), {
      ssr: false, // Prevent server-side rendering
      loading: () => <div>Loading Map...</div>, // Show a loading component during client-side rendering
    });
  
    const handleCountyHover = (countyName) => {
      // Handle county hover event
      setHighlightedCounty(countyName); // Set the currently hovered county
    };
  
    const pathStyle = (countyName) => {
      return {
        strokeColor: 'blue',
        strokeOpacity: .35,
        strokeWeight: 2,
        fillOpacity: highlightedCounty === countyName ? 0.5 : 0,
        fillColor: 'green',
      };
    };
    
  
    const paths = [
        {
          name: 'Florida1',
          coordinates: floridaCoordinates1,
        },
        {
          name: 'Florida2',
          coordinates: floridaCoordinates2,
        },
        {
          name: 'Florida3',
          coordinates: floridaCoordinates3,
        },
        {
          name: 'Florida4',
          coordinates: floridaCoordinates4,
        },
        {
          name: 'Florida5',
          coordinates: floridaCoordinates5,
        },
        {
          name: 'Florida6',
          coordinates: floridaCoordinates6,
        },
        {
          name: 'Florida7',
          coordinates: floridaCoordinates7,
        },
        {
          name: 'Florida8',
          coordinates: floridaCoordinates8,
        },
        {
          name: 'Florida9',
          coordinates: floridaCoordinates9,
        },
        {
          name: 'Florida10',
          coordinates: floridaCoordinates10,
        },
        {
          name: 'Florida11',
          coordinates: floridaCoordinates11,
        },
        {
          name: 'Florida12',
          coordinates: floridaCoordinates12,
        },
        {
          name: 'Florida13',
          coordinates: floridaCoordinates13,
        },
        {
          name: 'Florida14',
          coordinates: floridaCoordinates14,
        },
        {
          name: 'Florida15',
          coordinates: floridaCoordinates15,
        },
        {
          name: 'Florida16',
          coordinates: floridaCoordinates16,
        },
        {
          name: 'Florida17',
          coordinates: floridaCoordinates17,
        },
        {
          name: 'Florida18',
          coordinates: floridaCoordinates18,
        },
        {
          name: 'Florida19',
          coordinates: floridaCoordinates19,
        },
        {
          name: 'Florida20',
          coordinates: floridaCoordinates20,
        },
        {
          name: 'Florida21',
          coordinates: floridaCoordinates21,
        },
        {
          name: 'Florida22',
          coordinates: floridaCoordinates22,
        },
        {
          name: 'Florida23',
          coordinates: floridaCoordinates23,
        },
        {
          name: 'Florida24',
          coordinates: floridaCoordinates24,
        },
        {
          name: 'Florida25',
          coordinates: floridaCoordinates25,
        },
        {
          name: 'Florida26',
          coordinates: floridaCoordinates26,
        },
        {
          name: 'Florida27',
          coordinates: floridaCoordinates27,
        },
        {
          name: 'Florida28',
          coordinates: floridaCoordinates28,
        },
        {
          name: 'Florida29',
          coordinates: floridaCoordinates29,
        },
        {
          name: 'Florida30',
          coordinates: floridaCoordinates30,
        },
        {
          name: 'Florida31',
          coordinates: floridaCoordinates31,
        },
        {
          name: 'Florida32',
          coordinates: floridaCoordinates32,
        },
        {
          name: 'Florida33',
          coordinates: floridaCoordinates33,
        },
        {
          name: 'Florida34',
          coordinates: floridaCoordinates34,
        },
        {
          name: 'Florida35',
          coordinates: floridaCoordinates35,
        },
        {
          name: 'Florida36',
          coordinates: floridaCoordinates36,
        },
        {
          name: 'Florida37',
          coordinates: floridaCoordinates37,
        },
        {
          name: 'Florida38',
          coordinates: floridaCoordinates38,
        },
        {
          name: 'Florida39',
          coordinates: floridaCoordinates39,
        },
        {
          name: 'Florida40',
          coordinates: floridaCoordinates40,
        },
        {
          name: 'Florida41',
          coordinates: floridaCoordinates41,
        },
        {
          name: 'Florida42',
          coordinates: floridaCoordinates42,
        },
        {
          name: 'Florida43',
          coordinates: floridaCoordinates43,
        },
        {
          name: 'Florida44',
          coordinates: floridaCoordinates44,
        },
        {
          name: 'Florida45',
          coordinates: floridaCoordinates45,
        },
        {
          name: 'Florida46',
          coordinates: floridaCoordinates46,
        },
        {
          name: 'Florida47',
          coordinates: floridaCoordinates47,
        },
        {
          name: 'Florida48',
          coordinates: floridaCoordinates48,
        },
        {
          name: 'Florida49',
          coordinates: floridaCoordinates49,
        },
        {
          name: 'Florida50',
          coordinates: floridaCoordinates50,
        },
        {
          name: 'Florida51',
          coordinates: floridaCoordinates51,
        },
        {
          name: 'Florida52',
          coordinates: floridaCoordinates52,
        },
        {
          name: 'Florida53',
          coordinates: floridaCoordinates53,
        },
        {
          name: 'Florida54',
          coordinates: floridaCoordinates54,
        },
        {
          name: 'Florida55',
          coordinates: floridaCoordinates55,
        },
        {
          name: 'Florida56',
          coordinates: floridaCoordinates56,
        },
        {
          name: 'Florida57',
          coordinates: floridaCoordinates57,
        },
        {
          name: 'Florida58',
          coordinates: floridaCoordinates58,
        },
        {
          name: 'Florida59',
          coordinates: floridaCoordinates59,
        },
        {
          name: 'Florida60',
          coordinates: floridaCoordinates60,
        },
        {
          name: 'Florida61',
          coordinates: floridaCoordinates61,
        },
        {
          name: 'Florida62',
          coordinates: floridaCoordinates62,
        },
        {
          name: 'Florida63',
          coordinates: floridaCoordinates63,
        },
        {
          name: 'Florida64',
          coordinates: floridaCoordinates64,
        },
        {
          name: 'Florida65',
          coordinates: floridaCoordinates65,
        },
        {
          name: 'Florida66',
          coordinates: floridaCoordinates66,
        },
        {
          name: 'Florida67',
          coordinates: floridaCoordinates67,
        },
      ];
      
    const renderMap = () => {
      if (!isLoaded) {
        return <div>Error loading maps</div>;
      }
      const mapOptions = {
        mapContainerStyle: containerStyle,
        center: center || { lat: 28.057947, lng: -80.082405 },
        zoom: 6.8,
        mapTypeControlOptions: {
          mapTypeIds: ['satellite', 'hybrid','terrain'],
        },
        mapTypeId: 'roadmap',
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true,
        zoomControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_BOTTOM,
        },
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'on' }],
          },
          {
            featureType: 'transit',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ visibility: 'off' }],
          },
        ],
        labels:true,
      };
  
      return (
        
        <DynamicMap
          mapContainerStyle={containerStyle}
          options={mapOptions}
          
          
        >
          {paths.map((path) => (
            <Polygon
              key={path.name}
              paths={path.coordinates}
            //   onMouseOver={() => handleCountyHover(path.name)}
            //   onMouseOut={() => handleCountyHover(null)}
              options={pathStyle(path.name)}
            />
          ))}
        </DynamicMap>
      );
    };
  
    return <>{renderMap()}</>;
  };
  
  export default Map;