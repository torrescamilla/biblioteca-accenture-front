import React, { Component } from 'react';


const TableHead = () => {
    return(
        <thead>
          <tr>
            <th>Livro</th>
            <th>Autor(a)</th>
            <th>Ano de Publicação</th>
            <th>Remover</th>
          </tr>
        </thead>
    );
}

const TableBody = props =>{
    
    const linhas = props.autores.map((linha, index)=>{
       return( 
       <tr key={index}>
            <td>{linha.livro}</td>
            <td>{linha.autor}</td>
            <td>{linha.ano}</td>
            <td>
                <button 
                    onClick={ () => props.removeAutor(index)}
                    className="waves-effect waves-light btn pink lighten-2">
                    Remover
                </button>
            </td>
        </tr>
       );
    });

    return(
        <tbody>
          {linhas}
        </tbody>
    );
}


class Tabela extends Component{
    

    render(){
        const { autores, removeAutor } = this.props;
        
        return(
        <table className="highlight centered">
        <TableHead />
        <TableBody autores={autores} removeAutor={removeAutor} />
        </table>
        );
    }

}
export default Tabela;