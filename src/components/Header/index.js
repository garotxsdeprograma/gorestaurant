import React from "react";
import Button from "../Button";
import * as S from "./style";


const Header = (props, { placeholder, type }) => {
    return (
        <>
            <S.ContainerHeader>
                <S.Logo src="https://svgshare.com/i/Pov.svg"></S.Logo>
                <Button></Button>
            </S.ContainerHeader>
        </>
    );
};

export default Header;