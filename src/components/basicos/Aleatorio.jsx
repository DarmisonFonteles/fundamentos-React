import React from "react";

export default function Aleatorio(props) {
    const aleatorio = parseInt(Math.random() * (props.max - props.min)) + props.min;
    return(
        <div>
            <h2>Valor aleatorio</h2>
            <p>
                <strong>Valor minimo: </strong> {props.min}
            </p>
            <p>
                <strong>Valor maximo: </strong> {props.max}
            </p>
            <p>
                <strong>Valor Escolhido: </strong> { aleatorio }
            </p>
        </div>
    );
};