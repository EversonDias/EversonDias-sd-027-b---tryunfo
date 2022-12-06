import React from 'react';
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

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      hasTrunfo: '',
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
    const testImage = /\.(jpe?g||png||gif||bmp)$/i;
    const image = testImage.test(cardImage);
    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);
    const maxValuerAllAttr = 210;
    const maxValuerAttr = 90;
    const maxValuer = attr1 + attr2 + attr3 <= maxValuerAllAttr;
    const maxAttr = attr1 <= maxValuerAttr
      && attr2 <= maxValuerAttr
      && attr3 <= maxValuerAttr;
    const minAttr = attr1 > 0 && attr2 > 0 && attr3 > 0;
    if (maxValuer && maxAttr && minAttr && name && description && image) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  resetState() {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      isSaveButtonDisabled: true,
    });
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
            saveButton={ this.handleSave }
          />
          <Card { ...this.state } />
        </div>
        <div>
          {listCard.map((data) => <Card key={ data.cardName } { ...data } />)}
        </div>
      </Container>
    );
  }
}

export default App;
