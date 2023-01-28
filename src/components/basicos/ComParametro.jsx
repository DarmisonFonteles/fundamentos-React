import React from 'react'

export default function ComParametro(props) {
    // const sub = props.subtitulo
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
            <p>
                <strong>Pedro tem { props.nota }</strong>
                <br></br>
                <strong>E está { status }</strong>
            </p>
        </div>
    )
}