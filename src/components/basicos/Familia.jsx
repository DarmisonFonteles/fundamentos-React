import React, {cloneElement} from "react";
// import React,{React.cloneElement} from "react";

export default function Familia(props){
    return(
        <div>
            {React.Children.map(props.children, child => {
                return cloneElement(child, props);
            })}

            {/* maneira reduzida, resolvendo problema da key com i */}
            {/* {props.children.map((child, i) => {
                return cloneElement(child, { ...props, key: i});
            })} */}
            {/* {React.cloneElement(props.children, props)} */}
            {/* <FamiliaMenbro nome="Pedro" sobrenome={props.sobrenome} />
            <FamiliaMenbro nome="Ana" {...props} />
            <FamiliaMenbro nome="Gustavo" sobrenome={props.sobrenome} /> */}
        </div>
    );
};