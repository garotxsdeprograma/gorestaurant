import React from "react";
import * as S from "./style";
import { FiPlusSquare } from 'react-icons/fi';


const Button = (props) => {
    return (
        <>
            <S.ContainerBox onClick={props.onClick}>
                {props.children}
               <S.ContainerIcon><FiPlusSquare  /></S.ContainerIcon>
            </S.ContainerBox>
        </>
    );
};

export default Button;