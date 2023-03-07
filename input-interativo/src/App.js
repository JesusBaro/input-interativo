// aula 06/03 - Input interativo que exibe uma lista com os itens escritos e pode ser apagado pelo usuário

import React, { Component } from "react";
import styled from "styled-components";
// const Title = styled.h1`
// color: red;
// `;
class InputInterativo extends Component {

  state = {
    tarefa: "",// string vazia. Recebe os dados escritos no input
    lista: [] //array vazia. Guardar todos os dados que forem digitados no input
  }

  // A função handleChange recebe um event como parâmetro (e) ou (event), onde atráves dele conseguimos pegar/definir/obter  o valor atual do input.

  handleChange = (event) => {
    this.setState({
      tafera: event.target.value // //event vai mirar no input e pegar o valor atual dele
    });
  };

  //Função adicionar 
  adicionar = () => {
    //NÃO ADICIONAR ITENS SE O INPUT ESTIVER VAZIO
    //se o state tarefa for extremamente igual a vazio returne nada, por isso nao ten nada depois do return
    if (this.state.tarefa === "") {
      return;
    };

    this.setState({
      lista: this.state.lista.concat({ //atualize os dade e concatene um 
        tarefa: this.state.tarefa, //nova tarefa
        id: Math.random() //vai gerar automaticamente uma id para cada item da lista/array. (0 - 1)
      }),
      tafera: " "
    });
  };

  //nao estudado 
  apagar = (id) => {

  };

  render() {
    return (
      <div>
        <h1>Input Interativo</h1>
   {/* onChange: evento de mudança */}
        {/* O value seta o valor inicial do input, nesse caso ele está vazio */}
        <h2>Lista</h2>
        <input value={this.state.tarefa} onChange={this.handleChange}  />

        <button onClick={this.adicionar} > Add </button>

      <ul>

      </ul>


      </div>
    )
  }

} export default InputInterativo
