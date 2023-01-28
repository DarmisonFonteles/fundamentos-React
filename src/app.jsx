import './App.css'
import React from "react";

import MegaSena from './components/mega/MegaSena';
import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Diretapai from './components/comunicacao/DiretaPai';
import Usuarioinfo from './components/condicional/Usuarioinfo';
import ParouImpar from './components/condicional/ParOuImpar';
import TabelasProdutos from './components/Repetição/TabelasProdutos';
import ListaAlunos from './components/Repetição/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMenbro from './components/basicos/FamiliaMenbro';
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';


//export default function (props){}
//export default (props) =>{}
//export default props{}
export default function App(props) {
    return(
        <div className="App">
            <h1>Fundamentos React 2</h1>
            <div className="Cards">
                <Card titulo="#13 - Mega" color="#B99006E">
                    <MegaSena></MegaSena>
                </Card>
                <Card titulo="#12 - Contador" color="#009">
                    <Contador numeroInicial={10}></Contador>
                </Card>
                <Card titulo="#11 - Componente Controlado" color="#ebb71a">
                    <Input></Input>
                </Card>
                <Card titulo="#10 - Comunicação Indireta" color="#e94c6f">
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card titulo="#09 - Comunicação direta" color="#e94c6f">
                    <Diretapai></Diretapai>
                </Card>
                <Card titulo="#08 - Renderização condicional" color="#Fa6900">
                    <ParouImpar numero={22} />
                    <Usuarioinfo usuario={{nome: 'Fernando'}}></Usuarioinfo>
                </Card>
                <Card titulo="#07 - Desafio repetição" color="#008">
                    <TabelasProdutos></TabelasProdutos>
                </Card>
                <Card titulo="#06 - Lista de alunos" color="#008">
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="#05 - Componetes com filhos" color="#Fa6900">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMenbro nome="Pedro" />
                        <FamiliaMenbro nome="Ana" />
                        <FamiliaMenbro nome="Gustavo" />
                    </Familia>
                </Card>
                <Card titulo="#04 - Desafio aleatorios" color="#080">
                    <Aleatorio min={1} max={60} />
                </Card>
                <Card titulo="#03 - Fragmento" color="#008">
                    <Fragmento />
                </Card>
                <Card titulo="#02 -Com paramentro" color="#e94c6f">
                    <ComParametro 
                        titulo="Situação do aluno" 
                        subtitulo="Notas do aluno" 
                        nota ={9.3}
                    />
                </Card>
                <Card titulo="#01 - Primeiro componente" color="#ebb71a">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    );
}