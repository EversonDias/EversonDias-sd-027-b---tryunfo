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
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      cardId: '',
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      listCard: [],
      listBackup: [],
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
      cardRare,
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
      cardRare,
    };

    this.setState(({ listCard }) => ({
      listCard: [...listCard, card],
      listBackup: [...listCard, card],
    }), () => {
      this.validationSuperTrunfo();
    });

    this.resetState();
  }

  handleOnChange({ target: { value, name, checked } }) {
    console.log(value);
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
      listBackup: [...newList],
    }, this.validationSuperTrunfo);
  }

  handleSearch({ target: { value } }, type) {
    const { listBackup, listCard } = this.state;
    this.setState({
      listCard: [...listBackup],
    });
    console.log(listBackup);
    // console.log(listCard);
    if (value !== '' && value !== 'todas') {
      console.log('ops');
      let newList;
      if (type === 'cardRare') {
        newList = listCard.filter(({ cardRare }) => cardRare === value);
      } else {
        newList = listCard.filter(({ cardName }) => cardName.includes(value));
      }
      this.setState({
        listCard: [...newList],
      });
    }
  }

  resetState() {
    this.setState({
      cardName: '',
      cardId: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
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
    const max = 90;
    const maxAttr1 = attr1 <= max;
    const minAttr1 = attr1 >= 0;
    const maxAttr2 = attr2 <= max;
    const minAttr2 = attr2 >= 0;
    const maxAttr3 = attr3 <= max;
    const minAttr3 = attr3 >= 0;
    const value = 210;
    const maxValue = attr1 + attr2 + attr3 <= value;
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
          <input
            type="text"
            placeholder="Digite o nome da carta"
            data-testid="name-filter"
            onChange={ (event) => this.handleSearch(event, 'cardName') }
          />
          <select
            data-testid="rare-filter"
            onChange={ (event) => this.handleSearch(event, 'cardRare') }
          >
            <option value="todas">Todos</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">muito raro</option>
          </select>
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