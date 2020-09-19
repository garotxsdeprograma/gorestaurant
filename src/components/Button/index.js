import React from "react";
import * as S from "./style";
import { FiPlusSquare } from 'react-icons/fi';


const Button = (props, { placeholder, type }) => {
    return (
        <>
            <S.ContainerBox>
                Novo Prato
               <S.ContainerIcon><FiPlusSquare  /></S.ContainerIcon>
            </S.ContainerBox>
        </>
    );
};

export default Button;