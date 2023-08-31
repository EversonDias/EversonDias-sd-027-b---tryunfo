import React from 'react';
import PropsTypes from 'prop-types';
import Container from './style';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <Container>
        <label htmlFor="cardName" className="itemForm">
          <p>Nome</p>
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardDescription" className="itemForm">
          <p>Descrição</p>
          <input
            type="textarea"
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr1" className="itemForm">
          <p>Inteligencia</p>
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr2" className="itemForm">
          <p>Força</p>
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr3" className="itemForm">
          <p>Sorte</p>
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardImage" className="itemForm">
          <p>Imagem</p>
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <div className="containerSelect">
          <select
            name="cardRare"
            id=""
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="Normal">Normal</option>
            <option value="Raro">Raro</option>
            <option value="Muito Raro">Muito Raro</option>
          </select>
          <div htmlFor="checkTrunfo">
            {
              hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
                type="checkbox"
                name="checkTrunfo"
                value="checkboxTrunfo"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            }
          </div>
        </div>

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </Container>
    );
  }
}

Form.propTypes = {
  cardName: PropsTypes.string.isRequired,
  cardDescription: PropsTypes.string.isRequired,
  cardAttr1: PropsTypes.string.isRequired,
  cardAttr2: PropsTypes.string.isRequired,
  cardAttr3: PropsTypes.string.isRequired,
  cardImage: PropsTypes.string.isRequired,
  cardRare: PropsTypes.string.isRequired,
  cardTrunfo: PropsTypes.bool.isRequired,
  hasTrunfo: PropsTypes.bool.isRequired,
  isSaveButtonDisabled: PropsTypes.bool.isRequired,
  onInputChange: PropsTypes.func.isRequired,
  onSaveButtonClick: PropsTypes.func.isRequired,
};

export default Form;
