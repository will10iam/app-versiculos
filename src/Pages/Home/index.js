import React, { Component } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";


class Home extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div className='sociais'>
                        <a className='insta' href="https://www.instagram.com/constru.ide/" target="_blank" rel="noreferrer"><BsInstagram size={40} /></a>
                        <a className='insta' href="https://www.facebook.com/presbiterianamaanaim/" target="_blank" rel="noreferrer"><BsFacebook size={40} /></a>
                    </div>


                    <div className='middle'>
                        <h1 className='title'>BÍBLIA</h1>
                        <h2 className='subtitle'>TODOS OS DIAS</h2>
                        <Botao nome='VERSÍCULO DO DIA AQUI!' />
                    </div>
                </div>


            </>
        )
    }
}


class Botao extends Component {
    render() {
        return (
            <div>
                <Link to='/verses'><button className='generator'>{this.props.nome}</button></Link>
            </div>
        )
    }
}

export default Home;