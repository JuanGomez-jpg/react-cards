import React, {Component} from 'react';
import Card from './modules/Card';
import './CSS/App.css'
import Button from './element/Button';
import {ThemeProvider} from 'styled-components';

const theme = {
  primary: '#4CAF50',
  mango: 'yellow'
};

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      cards: [
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
      ],
      showCard: true
    }
  }

  toggleShowCard = () => this.setState({showCard: !this.state.showCard});
  deleteCardHandler = (cardIndex) => {
    const cards_copy = [...this.state.cards];
    cards_copy.splice(cardIndex, 1);
    this.setState({cards:cards_copy});
  };

  changeNameHandler = (event, id) => {
    //1. Which card is going to be deleted
    const cardIndex = this.state.cards.findIndex(card => card.id === id);
    //2. Make a copy of the cards
    const cards_copy = [...this.state.cards];
    //3. Change the name of the specific card
    cards_copy[cardIndex].name = event.target.value;
    //4. Set the cards with the latest version of card copy
    this.setState({cards:cards_copy});
  };

  render()
  {
    const classes = ['button'];
    if (this.state.cards.length < 3 ) classes.push('black')
    if (this.state.cards.length < 2 ) classes.push('red')

    const cardLayout = this.state.showCard && (
      this.state.cards.map((card, index) =>
        <Card
          avatar ={card.avatar}
          name = {card.name}
          tittle = {card.tittle}
          key = {card.id}
          onDelete = {() => this.deleteCardHandler(index)}
          onChangeName = {(event) => this.changeNameHandler(event, card.id)}
           />
        )
    )

    return (
      <ThemeProvider theme= {theme}>
        <div className="App">
          <Button color="mango" length={this.state.cards.length} onClick={this.toggleShowCard} >Toggle</Button>
          <button className={classes.join(' ')} onClick={this.toggleShowCard}>Toggle Show/Hide Card</button>
          {cardLayout}
          </div>
      </ThemeProvider>
    );
  }



}

export default App;
