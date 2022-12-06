import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Container from './styles/global';

class App extends React.Component {
  constructor() {
    super();

    this.handleOnChange = this.handleOnChange.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      isSaveButtonDisabled: true,
    };
  }

  validation() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
      cardRare,
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

  render() {
    return (
      <Container>
        <h1 className="title">Tryunfo</h1>
        <div className="container">
          <Form
            { ...this.state }
            onInputChange={ this.handleOnChange }
            isChecked={ this.handleChecked }
          />
          <Card { ...this.state } />
        </div>
      </Container>
    );
  }
}

export default App;
