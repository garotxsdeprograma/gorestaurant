import React, { useState } from "react";
import * as S from "./style";
import { FiTrash2, FiEdit3 } from "react-icons/fi";
import AvailableButton from "../AvailableButton";

const Footer = (props, { placeholder, type }) => {
    return (
        <>
            <S.BackgroundFooter>
                <S.ContainerFooter>
                    <S.ContainerArbyte>
                    Projeto criado para a  <img style={{ width: 100 + 'px', height: 26.875 + 'px', margin: 8 + 'px' }} src="https://www.arbyte.com.br/img/logo-arbyte.png"></img>  2020.
                    </S.ContainerArbyte>
                    <p >Alunos - <S.Linkedin href="https://www.linkedin.com/in/juliocgs/">Júlio</S.Linkedin> / <S.Linkedin href="https://www.linkedin.com/in/juliocgs/"> Íngrid</S.Linkedin> / <S.Linkedin href="https://www.linkedin.com/in/juliocgs/"> Henrique </S.Linkedin> / <S.Linkedin href="https://www.linkedin.com/in/juliocgs/"> Jeff </S.Linkedin> / <S.Linkedin href="https://www.linkedin.com/in/juliocgs/"> Eduardo </S.Linkedin></p>
                </S.ContainerFooter>
            </S.BackgroundFooter>
        </>
    );
};

export default Footer;
