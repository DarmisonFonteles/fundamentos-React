import React from "react";

export default function Botoes(props){
    return(
        <div>
            <button onClick={props.setinc}>+</button>
            <button onClick={props.setdec}>-</button>
        </div>
    )
}