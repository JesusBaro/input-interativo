// // aula 06/03 - Input interativo que exibe uma lista com os itens escritos e pode ser apagado pelo usuário

// import React, { Component } from "react";
// import styled from "styled-components";
// const Title = styled.h1`
// color: red;
// `;
// class InputInterativo extends Component {

//   state = {
//     tarefa: "",// string vazia. Recebe os dados escritos no input
//     lista: [] //array vazia. Guardar todos os dados que forem digitados no input
//   }

//   // A função handleChange recebe um event como parâmetro (e) ou (event), onde atráves dele conseguimos pegar/definir/obter  o valor atual do input.

//   handleChange = (event) => {
//     this.setState({
//       tarefa: event.target.value // //event vai mirar no input e pegar o valor atual dele
//     });
//   };

//   //Função adicionar 
//   adicionar = () => {
//     //NÃO ADICIONAR ITENS SE O INPUT ESTIVER VAZIO
//     //se o state tarefa for extremamente igual a vazio returne nada, por isso nao ten nada depois do return
//     if (this.state.tarefa === "") {
//       return;
//     }

//     this.setState({
//       lista: this.state.lista.concat({ //atualize os dade e concatene um 
//         tarefa: this.state.tarefa, //nova tarefa
//         id: Math.random() //vai gerar automaticamente uma id para cada item da lista/array. (0 - 1)
//       }),
//       tarefa: ""  //Limpar o input depois que eu digitar
//     });
//   };

//   apagar = (id) => {
//       //Parâmetro recebe a id da nossa tarefa (itens), pq cada tarefa tem sua identidade.
//     this.setState({
//       lista: this.state.lista.filter((item) => {
//         return item.id !== id; //ele vai comparar os id's e se for diferente, ela vai guardar em uma lista (invisível)
//       })
//     });
//   };


//---------------------------------------
//   // exemplo de filter
//   // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'], novaLista=[];
//   // const result = words.filter(word => word.length > 6);
//   // console.log(result);
//   //  Expected output: Array ["exuberant", "destruction", "present"]
//procurar() =>{
// this.setState({
//   // novaLista: this.state.nomes.filter ((item) => item.includs("L"))
// (includs verifica valor digitado)
// }
// )
// // 
// }



//---------------------------------------

//   render() {
//     return (
//       <div>
//         <Title>Input Interativo</Title>
//         {/* onChange: evento de mudança */}
//         <h2>Lista</h2>

//         <input value={this.state.tarefa} onChange={this.handleChange} placeholder="escreva aqui" />
//         {/* O value seta o valor inicial do input, nesse caso ele está vazio */}

//         <button onClick={this.adicionar} > Add </button>

//         <ul>
//           {this.state.lista.map((item) => (
//             <li>
//               {item.tarefa}

//               {/* Calback é uma função de flecha  dentro do evento de click. Assim conseguimos chamar a função com () */}
//               <button onClick={() => {
//                this.apagar(item.id)
//               }}>
//                 x
//               </button>
//             </li>
//           ))}
//         </ul>

//       </div>

//     )
//   }

// } export default InputInterativo




//aula 08/03

import React, { Component } from "react";
// import InputInterativo from "../../^/gitlens/7b22726566223a2232383331626166653832636239633838343839636137616239613965626338333661626633643636222c227265706f50617468223a222f55736572732f6261726f63656e747269736d6f2f45737475646f732d52656163742f696e7075742d696e746572617469766f227d/Users/barocentrismo/Estudos-React/input-interativo/input-interativo/src/App";

class Todo extends Component {
  state = {
    fruta: "", //prop vazia vai receber o que for digitado
    lista: [] //lista de frutas
  }



  handelChange = (e) => {
    this.setState({
      fruta: e.target.value
      // event - é como se fosse o abridor do input 
      //target - (alvo) ou seja, abre o input e mira na fruta e pega o valor atual
    })
  }

  handleClick = () => {
    if (this.state.fruta === "") {
      return;
    }
    this.setState({ //manipular estado
      lista: this.state.lista.concat({ //CONCAT - concatena todos os itens que foram digitados
        fruta: this.state.fruta,  // aqui as frutas novas serão juntadas com as antigs
        id: Math.random() //gera um numero automatico de 0 a 1, criando uma id para cada fruta
      }),
      fruta: "" //toda coisa q for adicionada ele volta ao fazer inicial, ou seja vazio

    }); 
  }

  //essa função se refenncia a um id de cada item adicionado
  apagarFrutas = (id) => {
    this.setState({
      //Esse filter vai servir para filtrar as identidades ID, ou seja, acesse somente pela a ID.
      lista: this.state.lista.filter((item) => {
        return item.id !== id; //Verifica se o valor é diferente do que está sendo digitado no input, caso sim, continue mostrando a listaDeFrutas.
      })
    });
  };



  render() {
    return (
      <div>
        <h1> To do </h1>

        {/* input para receber oque foi escrito */}
        <input
          onChange={this.handelChange}
          value={this.state.fruta} // 
          placeholder="escreva sua lista"
        />
        <button onClick={this.handleClick} > Adicionar na lista</button>

        {/* retornando uma lista com as frutas  */}
        <ul>
          {this.state.lista.map((item) => (
            <>
            <li> {item.fruta}

            </li> 
              <button
                  onClick={() => { 
                    this.lista(item.id)} }
              > {" "}delete{" "}
              </button>
              </>


          ))}
        </ul>
      </div>

    )
  }
} export default Todo