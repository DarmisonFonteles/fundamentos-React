import React from "react"

export default function FamiliaMenbro(props) {
    return(
        <span>
            {props.nome} <strong> { props.sobrenome } </strong> 
            <br></br>
        </span>
    )
}