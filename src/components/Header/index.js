import React from "react";
import Button from "../Button";
import * as S from "./style";
import Logo from 'C:/Users/julio/Desktop/Freela/gorestaurant/src/assets/Logo.svg'


const Header = (props, { placeholder, type }) => {
    return (
        <>
            <S.ContainerHeader>
                <S.Logo src={Logo}></S.Logo>
                <Button></Button>
            </S.ContainerHeader>
        </>
    );
};

export default Header;