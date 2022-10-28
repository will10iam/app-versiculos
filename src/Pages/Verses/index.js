import React, { Component } from 'react'
import './index.css'
import { MdWest } from "react-icons/md";
import { Link } from 'react-router-dom';



class Verses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textoVersiculo: ''
        };

        this.geraVersiculo = this.geraVersiculo.bind(this)

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

    geraVersiculo() {
        let state = this.state;
        let numAleatorio = Math.floor(Math.random() * this.versiculos.length);
        state.textoVersiculo = this.versiculos[numAleatorio];
        this.setState(state)
    }

    render() {
        return (
            <>
                <div>
                    <Link to='/'><MdWest color='#FFF' size={30} className='icon' /></Link>
                </div>



                <div className='container2'>
                    <h1 className='titulo'>QUAL O VERSÍCULO DE HOJE?</h1>
                    <h2 className='verse'>{this.state.textoVersiculo.texto}</h2>
                    <h3 className='reference'>{this.state.textoVersiculo.referencia}</h3>
                    <Botao nome="CLIQUE AQUI" acaoBtn={this.geraVersiculo} />
                </div>
            </>
        )
    }
}

class Botao extends Component {
    render() {
        return (
            <div>
                <button className='generator' onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        )
    }
}
export default Verses;