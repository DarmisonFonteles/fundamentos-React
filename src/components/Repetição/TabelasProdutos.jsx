import React from "react"
import produtos from '../../data/produtos'
import './TabelasProdutos.css'

export default function TabelasProdutos(props){
    function getLinhas(){
        return produtos.map((produto, i) =>{
            return(
                <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2)}</td>
                </tr>
            )
        })
    }
    return(
        <div className="TabelaProdutos">
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preõ</th>
                    </tr>
                </thead>
                <tbody>
                        {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}