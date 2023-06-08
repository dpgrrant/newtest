import React from 'react';
import { Flex } from '@chakra-ui/react';
import Card from './Card';

const ScrollableCardList = ({ direction }) => {
    const cards = [
        { id: 1, title: 'Card 1',  },
        { id: 2, title: 'Card 2',  },
        { id: 3, title: 'Card 3',  },
        { id: 4, title: 'Card 4',  },
        { id: 5, title: 'Card 5',  },
      ];
    

  return (
    <Flex  p={4} className="card-container">
      {cards.map((card) => (
        <Card key={card.id} height='2rem' width='2rem'>
          {card.id}
         
        </Card>
      ))}
    </Flex>
  );
};

export default ScrollableCardList;
