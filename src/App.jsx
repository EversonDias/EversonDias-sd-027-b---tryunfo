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
    const { listBackup } = this.state;
    let newList = listBackup;
    if (value.trim() !== '') {
      if (type === 'cardName') {
        newList = newList.filter((data) => data[type].includes(value));
      } else {
        newList = value !== 'Todos'
          ? newList.filter((data) => data[type].toLowerCase() === value.toLowerCase())
          : [...listBackup];
        console.log(newList);
      }
    }
    this.setState({
      listCard: newList,
    });
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
      cardName,
      cardDescription,
      cardImage,
    } = this.state;
    const name = cardName.length > 0;
    const description = cardDescription.length > 0;
    const image = cardImage.length > 0;
    const validation = name
    && description
    && image;
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
        <header>
          <h1 className="title">Tryunfo</h1>
        </header>

        <div className="containerForm">
          <Form
            { ...this.state }
            onInputChange={ this.handleOnChange }
            onSaveButtonClick={ this.handleSave }
          />
          <Card { ...this.state } />
        </div>

        <div className="containerFilter">
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
            <option value="Todos">Todos</option>
            <option value="Normal">Normal</option>
            <option value="Raro">Raro</option>
            <option value="Muito Raro">Muito Raro</option>
          </select>
        </div>

        <div className="containerListCard">
          {listCard.map((data) => (
            <div key={ data.cardId } className="miniCard">
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
