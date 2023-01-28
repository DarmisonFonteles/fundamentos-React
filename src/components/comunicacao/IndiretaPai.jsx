import React, { useState } from "react"
import Indiretafilho from "./IndiretaFilho"


export default props =>{
    const [a, b] = [1 , 2]
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    // nome idade nerd
    function fornecerinfo(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return(
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span>{nerd ? 'verdadeiro' : 'False' } </span>
            </div> 
            <Indiretafilho quandoClicar={fornecerinfo}></Indiretafilho>
        </div>
    )
}