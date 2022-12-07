import React from 'react';
import uniqid from 'uniqid';
import Card from './components/Card';
import Form from './components/Form';
import Container from './styles/global';

class App extends React.Component {
  constructor() {
    super();

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.resetState = this.resetState.bind(this);
    this.validationSuperTrunfo = this.validationSuperTrunfo.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      cardId: '',
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      listCard: [],
      isSaveButtonDisabled: true,
    };
  }

  handleSave() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
      cardTrunfo,
    } = this.state;

    const card = {
      cardId: uniqid(),
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardTrunfo,
    };

    this.setState(({ listCard }) => ({
      listCard: [...listCard, card],
    }), () => {
      this.validationSuperTrunfo();
    });

    this.resetState();
  }

  handleOnChange({ target: { value, name, checked } }) {
    if (name === 'checkTrunfo') {
      this.setState({
        cardTrunfo: checked,
      }, this.validation);
    } else {
      this.setState({
        [name]: value,
      }, this.validation);
    }
  }

  handleDelete({ target: { id } }) {
    const { listCard } = this.state;
    const newList = listCard.filter((data) => data.cardId !== id);
    this.setState({
      listCard: [...newList],
    }, this.validationSuperTrunfo);
  }

  resetState() {
    this.setState({
      cardName: '',
      cardId: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  validation() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
    } = this.state;
    const name = cardName.length > 0;
    const description = cardDescription.length > 0;
    const image = cardImage.length > 0;
    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);
    const maxAttr1 = attr1 <= 90;
    const minAttr1 = attr1 >= 0;
    const maxAttr2 = attr2 <= 90;
    const minAttr2 = attr2 >= 0;
    const maxAttr3 = attr3 <= 90;
    const minAttr3 = attr3 >= 0;
    const maxValue = attr1 + attr2 + attr3 <= 210;
    const validation = name 
    && description 
    && image
    && maxAttr1
    && minAttr1
    && maxAttr2
    && minAttr2
    && maxAttr3
    && minAttr3
    && maxValue;
    if (validation) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  validationSuperTrunfo() {
    const { listCard } = this.state;
    const card = listCard.map(({ cardTrunfo }) => cardTrunfo === true);
    if (card.includes(true)) {
      this.setState({
        hasTrunfo: true,
      });
    } else {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  render() {
    const { listCard } = this.state;
    return (
      <Container>
        <h1 className="title">Tryunfo</h1>
        <div className="container">
          <Form
            { ...this.state }
            onInputChange={ this.handleOnChange }
            onSaveButtonClick={ this.handleSave }
          />
          <Card { ...this.state } />
        </div>
        <div>
          {listCard.map((data) => (
            <div key={ data.cardId }>
              <Card { ...data } />
              <button
                type="button"
                id={ data.cardId }
                data-testid="delete-button"
                onClick={ this.handleDelete }
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      </Container>
    );
  }
}

export default App;
