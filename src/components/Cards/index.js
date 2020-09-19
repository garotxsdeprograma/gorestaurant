import React from "react";
import * as S from "./style";
import Card from "../Card";


const Cards = (props, { placeholder, type }) => {
    return (
        <>
            <S.ContainerCards>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </S.ContainerCards>
        </>
    );
};


export default Cards;