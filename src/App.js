import React, {useState} from 'react';
import Card from './modules/Card';
import './CSS/App.css'
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.length > 2 ? '#4CAF50': props.length < 2 ? 'red': 'black'};
  border: none;
  color: ${props => props.length <= 1 ? 'black' : 'white'};
  font-weight: ${props => props.length <= 1 ? 'bold' : 'normal'};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;


function App() {

  const buttonChange =
  (
    <div className="buttons">
      <button type="button" className="button button3">
      change Name
      </button>
    </div>
  );

  const [showCard, setShowCard] = useState(true);
  const toggleShowCard = () => setShowCard(!showCard);
  const deleteCardHandler = (cardIndex) => {
    const cards_copy = [...cards];
    cards_copy.splice(cardIndex, 1);
    console.log('cards_copy', cards_copy);
    console.log('cards', cards);
    setCards(cards_copy);
  };

  const changeNameHandler = (event, id) => {
    //1. Which card is going to be deleted
    const cardIndex = cards.findIndex(card => card.id == id);
    //2. Make a copy of the cards
    const cards_copy = [...cards];
    //3. Change the name of the specific card
    cards_copy[cardIndex].name = event.target.value;
    //4. Set the cards with the latest version of card copy
    setCards(cards_copy);
  };

  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'El cacas',
      tittle: 'The Shit',
      avatar: 'https://i.pravatar.cc/150?img=8'
    },
    {
      id: 2,
      name: 'La cochina',
      tittle: 'The motherfucker',
      avatar: 'https://i.pravatar.cc/150?img=49'
    },
    {
      id: 3,
      name: 'La legal',
      tittle: 'The bitch',
      avatar: 'https://i.pravatar.cc/150?img=30'
    }
  ]);

  const classes = ['button'];
  if (cards.length < 3 ) classes.push('black')
  if (cards.length < 2 ) classes.push('red')

  const cardLayout = showCard && (
    cards.map((card, index) =>
      <Card
        avatar ={card.avatar}
        name = {card.name}
        tittle = {card.tittle}
        key = {card.id}
        onDelete = {() => deleteCardHandler(index)}
        onChangeName = {(event) => changeNameHandler(event, card.id)}
         />
      )
  )

  return (
    <div className="App">
      <Button length={cards.length} >Toggle</Button>
      <button className={classes.join(' ')} onClick={toggleShowCard}>Toggle Show/Hide Card</button>
      {cardLayout}


      </div>
  );

}

export default App;
