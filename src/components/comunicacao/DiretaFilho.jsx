import React from "react";

export default function diretafilho(props){
    return(
        <div>
            <div>{props.nome} </div>
            <div>{props.idade} </div>
            <div>{props.nerd ? 'verdadeiro' : 'falso'}! </div>
        </div>
    )
}