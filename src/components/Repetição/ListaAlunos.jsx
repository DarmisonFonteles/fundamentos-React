import React from "react"
import alunos from '../../data/alunso'

export default function ListaAlunos(props){
    // puxando so um aluno
    // const lil = (
    //     <li>
    //         {alunos[0].id}) {alunos[0].nome} -> {alunos[0].nota}
    //     </li>
    // )

    
    //  puxando todos os alunos
    const lis = alunos.map((aluno,) => {
        return(
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome}:   {aluno.nota}
            </li>
        )
    })
    return(
        <div>
            <ul>
                {lis}
            </ul>
        </div>
    )
} 