import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props){
        super(props);

        this.stateInicial ={
            livro: '',
            autor: '',
            ano: '',
        }
        this.state = this.stateInicial;
    }

    escutadorInput = event =>{
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    submitFormulario = () =>{
        this.props.escutadorSubmit(this.state);
        this.setState(this.stateInicial);
    }

    render() {

        const { livro, autor, ano} = this.state;

        return (
            <form>
                <div className="row m-10">
                    <div className="input-field col s12 m4">
                        <label htmlFor="livro">Livro</label>
                        <input
                            className="validate"
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.escutadorInput}
                        />
                    </div>

                    <div className="input-field col s12 m4">
                        <label htmlFor="autor">Autor(a)</label>
                        <input
                            className="validate"
                            id="autor"
                            type="text"
                            name="autor"
                            value={autor}
                            onChange={this.escutadorInput}
                        />
                    </div>
                    
                    <div className="input-field col s12 m4">
                        <label htmlFor="ano">Ano</label>
                        <input
                            className="validate"
                            id="ano"
                            type="text"
                            name="ano"
                            value={ano}
                            onChange={this.escutadorInput}
                        />
                    </div>
                </div>
                <button 
                    onClick={this.submitFormulario} 
                    type="button"
                    className="waves-effect waves-light btn nav-wrapper pink lighten-1">
                    Salvar
                </button>

            </form>
        );
    }
}

export default Formulario;