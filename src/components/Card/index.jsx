import React from 'react';
import PropsType from 'prop-types';
import Container from './style';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <Container>
        <p data-testid="name-card">{cardName}</p>
        <img data-testid="name-card" src={ cardImage } alt={ cardName } />
        <p data-testid="name-card">{cardDescription}</p>
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
        <p data-testid="rare-card">{cardRare}</p>
        {cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}
      </Container>
    );
  }
}

Card.propType = {
  cardName: PropsType.string.isRequired,
  cardDescription: PropsType.string,
  cardAttr1: PropsType.string,
  cardAttr2: PropsType.string,
  cardAttr3: PropsType.string,
  cardImage: PropsType.string,
  cardRare: PropsType.string,
  cardTrunfo: PropsType.bool,
};

export default Card;
