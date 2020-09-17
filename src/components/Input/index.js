import React from "react";
import * as S from "./style";


const Input = (props, { placeholder, type }) => {
    return (
        <>
            <S.ContainerInput>
                <S.Label>
                    {props.children}
                    <S.Containerbox type={props.type} placeholder={props.placeholder}></S.Containerbox>
                </S.Label>
            </S.ContainerInput>
        </>
    );
};

export default Input;
