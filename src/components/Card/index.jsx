/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropsType from 'prop-types';
import { AiFillStar } from 'react-icons/ai';
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
    const star = 11;

    return (
      <Container>
        <div className="containerMain">
          <div className={ `container  ${cardRare.split(' ')[0]}` }>
            {cardTrunfo ? (
              <p data-testid="trunfo-card" className="superTrunfo">
                {
                  [...new Array(star)].map((_item, index) => <AiFillStar key={ index } />)
                }
              </p>
            ) : ''}
            <p data-testid="name-card" className="nameCard">{cardName}</p>
            <div className="containerImg">
              <img data-testid="image-card" src={ cardImage } alt={ cardName } />
            </div>
            <div>
              <p data-testid="description-card" className="nameCard">{cardDescription}</p>
              <div className="containerAttr">
                <p data-testid="attr1-card">
                  <span>Inteligencia</span>
                  {cardAttr1}
                </p>
                <p data-testid="attr2-card">
                  {' '}
                  <span>Força</span>
                  {cardAttr2}
                </p>
                <p data-testid="attr3-card">
                  {' '}
                  <span>Sorte</span>
                  {cardAttr3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

Card.propTypes = {
  cardName: PropsType.string.isRequired,
  cardDescription: PropsType.string.isRequired,
  cardAttr1: PropsType.string.isRequired,
  cardAttr2: PropsType.string.isRequired,
  cardAttr3: PropsType.string.isRequired,
  cardImage: PropsType.string.isRequired,
  cardRare: PropsType.string.isRequired,
  cardTrunfo: PropsType.bool.isRequired,
};

export default Card;
