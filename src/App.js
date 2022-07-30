import React, {useState, useEffect} from 'react';
import Card from './modules/Card';
import './CSS/App.css'
import Button from './element/Button';
import {ThemeProvider} from 'styled-components';
import axios from 'axios';

const theme = {
  primary: '#4CAF50',
  mango: 'yellow'
};

function App () {

  const [showCard, setShowCard] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect (() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res =>{
      console.log(res.data);
      setCards(res.data);
    })
  }, [])

  const toggleShowCard = () => setShowCard(!showCard);
  const deleteCardHandler = (cardIndex) => {
    const cards_copy = [...cards]
    cards_copy.splice(cardIndex, 1);
    setCards(cards_copy);
  };

  const changeNameHandler = (event, id) => {
    //1. Which card is going to be deleted
    const cardIndex = cards.findIndex(card => card.id === id);
    //2. Make a copy of the cards
    const cards_copy = [...cards];
    //3. Change the name of the specific card
    cards_copy[cardIndex].name = event.target.value;
    //4. Set the cards with the latest version of card copy
    setCards(cards_copy);
  };


    const classes = ['button'];
    if (cards.length < 3 ) classes.push('black')
    if (cards.length < 2 ) classes.push('red')

    const cardLayout = showCard && (
      cards.map((card, index) =>
        <Card
          name = {card.name}
          phone = {card.phone}
          key = {card.id}
          onDelete = {() => deleteCardHandler(index)}
          onChangeName = {(event) => changeNameHandler(event, card.id)}
           />
        )
    )

    return (
      <ThemeProvider theme= {theme}>
        <div className="App">
          <Button color="mango" length={cards.length} onClick={toggleShowCard} >Toggle</Button>
          <button className={classes.join(' ')} onClick={toggleShowCard}>Toggle Show/Hide Card</button>
          {cardLayout}
          </div>
      </ThemeProvider>
    );

}

export default App;
