// aula 06/03 - Input interativo que exibe uma lista com os itens escritos e pode ser apagado pelo usuário

import React, { Component } from "react";
import styled from "styled-components";
const Title = styled.h1`
color: red;
`;
class InputInterativo extends Component {

  state = {
    tarefa: "",// string vazia. Recebe os dados escritos no input
    lista: [] //array vazia. Guardar todos os dados que forem digitados no input
  }

  // A função handleChange recebe um event como parâmetro (e) ou (event), onde atráves dele conseguimos pegar/definir/obter  o valor atual do input.

  handleChange = (event) => {
    this.setState({
      tarefa: event.target.value // //event vai mirar no input e pegar o valor atual dele
    });
  };

  //Função adicionar 
  adicionar = () => {
    //NÃO ADICIONAR ITENS SE O INPUT ESTIVER VAZIO
    //se o state tarefa for extremamente igual a vazio returne nada, por isso nao ten nada depois do return
    if (this.state.tarefa === "") {
      return;
    }

    this.setState({
      lista: this.state.lista.concat({ //atualize os dade e concatene um 
        tarefa: this.state.tarefa, //nova tarefa
        id: Math.random() //vai gerar automaticamente uma id para cada item da lista/array. (0 - 1)
      }),
      tarefa: ""
    });
  };

  apagar = (id) => {
      //Parâmetro recebe a id da nossa tarefa (itens), pq cada tarefa tem sua identidade.
    this.setState({
      lista: this.state.lista.filter((item) => {
        return item.id !== id; //ele vai comparar os id's e se for diferente, ela vai guardar em uma lista (invisível)
      })
    });
  };

  // exemplo de filter
  // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  // const result = words.filter(word => word.length > 6);
  // console.log(result);
  //  Expected output: Array ["exuberant", "destruction", "present"]
  



  render() {
    return (
      <div>
        <Title>Input Interativo</Title>
        {/* onChange: evento de mudança */}
        {/* O value seta o valor inicial do input, nesse caso ele está vazio */}
        <h2>Lista</h2>


        <input value={this.state.tarefa} onChange={this.handleChange} placeholder="escreva aqui" />

        <button onClick={this.adicionar} > Add </button>

        <ul>
          {this.state.lista.map((item) => (
            <li>
              {item.tarefa}

              {/* Calback é uma função de flecha  dentro do evento de click. Assim conseguimos chamar a função com () */}
              <button onClick={() => {
               this.apagar(item.id)
              }}>
                x
              </button>
            </li>
          ))}
        </ul>

      </div>

    )
  }

} export default InputInterativo
