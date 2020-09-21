import React, { useState} from "react";
import * as S from "./style";
import { FiTrash2, FiEdit3 } from "react-icons/fi";
import AvailableButton from "../AvailableButton"

const Card = (props, { placeholder, type }) => {

  
  return (
    <>
      <S.ContainerCard>
        <S.ContainerImg>
          <S.Img></S.Img>
        </S.ContainerImg>
        <S.ContainerText>
          <S.H2>Ao Molho</S.H2>
          <S.P>
            Macarrão ao molho branco, fughi e cheiro verde das montanhas.
          </S.P>
          <S.H3>R$ 19,90</S.H3>
        </S.ContainerText>
        <S.Footer>
          <S.ContainerFooter>
            <S.ContainerButtons>
              <S.Button type="button" title="Edite">
                <FiTrash2></FiTrash2>
              </S.Button>
              <S.Button type="button" title="Remova">
                <FiEdit3></FiEdit3>
              </S.Button>
            </S.ContainerButtons>
            <S.ContainerScrool>
              <AvailableButton></AvailableButton>
            </S.ContainerScrool>
          </S.ContainerFooter>
        </S.Footer>
      </S.ContainerCard>
    </>
  );
};

export default Card;
