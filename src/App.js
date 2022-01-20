import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js'
import './App.css'
import Header from './Header'
import Tabela from './Tabela';
import Form from './Formulario';

class App extends Component {
  
  state ={
    autores: [
      {
        livro: 'Corte de Espinhos e Rosas',
        autor: 'Sarah J. Maas',
        ano: '2015'
      },
      {
        livro: 'Mulheres que correm com os lobos',
        autor: 'Clarissa Pinkola Estés',
        ano: '2018'
      },
      {
        livro: 'O sol é para todos',
        autor: 'Harper Lee',
        ano: '2006'
      },
    ],
  }

  removeAutor = index =>{
    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor,posAtual) => {
        return posAtual !== index; 
      }),
    });
  }

  escutadorSubmit = autor =>{
    this.setState({
      autores:[...this.state.autores, autor]
    });
  }

render() {
  return (
    <Fragment>
        <Header />
        <div className="container m-10">
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />  
          <Form escutadorSubmit={this.escutadorSubmit} />
        </div>
    </Fragment>
  );
}
}

export default App;
