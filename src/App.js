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
      cardTrunfo: true,
    }
  }


  handleOnChange({ target: { value, name }}) {
    console.log(name + value);
    this.setState({
      [name]: value,
    })
  }

  render() {

    return (
      <Container>
        <h1 className="title">Tryunfo</h1>
        <div className="container">
          <Form onInputChange={this.handleOnChange}/>
          <Card { ...this.state }/>
        </div>
      </Container>
    );
  }
}

export default App;
