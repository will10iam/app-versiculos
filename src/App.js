import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoVersiculo: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.versiculos = [
      {
        texto: 'Porquanto, para mim, o viver é Cristo, e o morrer é lucro',
        referencia: 'Filipenses 1:21'
      },
      {
        texto: 'Convém que ele cresça e que eu diminua.',
        referencia: 'João 3:30'
      },
      {
        texto: 'Porém, se vos parece mal servir ao Senhor , escolhei, hoje, a quem sirvais: se aos deuses a quem serviram vossos pais que estavam dalém do Eufrates ou aos deuses dos amorreus em cuja terra habitais. Eu e a minha casa serviremos ao Senhor.',
        referencia: 'Josué 24:15'
      },
      {
        texto: 'Se o meu povo, que se chama pelo meu nome, se humilhar, e orar, e me buscar, e se converter dos seus maus caminhos, então, eu ouvirei dos céus, perdoarei os seus pecados e sararei a sua terra. ',
        referencia: '2 Crônicas 7:14'
      },
      {
        texto: 'Ensinando-os a guardar todas as coisas que vos tenho ordenado. E eis que estou convosco todos os dias até à consumação do século.',
        referencia: 'Mateus 28:20'
      },
      {
        texto: 'E, tendo dado graças, o partiu e disse: Isto é o meu corpo, que é dado por vós; fazei isto em memória de mim.',
        referencia: '1 Coríntios 11:24'
      }
    ];
  }

  quebraBiscoito() {
    let state = this.state;
    let numAleatorio = Math.floor(Math.random() * this.versiculos.length);
    state.textoVersiculo = this.versiculos[numAleatorio];
    this.setState(state)
  }

  render() {
    return (
      <div>
        <Botao nome="Outro Versiculo" acaoBtn={this.quebraBiscoito} />
        <h2>{this.state.textoVersiculo}</h2>
      </div>
    )
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}
export default App;
