import React from "react";
import Diretafilho from "./DiretaFilho";

export default function diretapai(props){
    return(
        <div>
            <Diretafilho nome="Junior" idade="20" nerd={true} /><br></br>
            <Diretafilho nome="Gabriel" idade="17" nerd={false} />
            
        </div>
    )
}