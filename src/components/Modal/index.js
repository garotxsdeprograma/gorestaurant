import React, { useState } from "react";
import * as S from "./style";
import { FiTrash2, FiEdit3 } from "react-icons/fi";
import AvailableButton from "../AvailableButton";

const Modal = (props, { placeholder, type }) => {
  return (
    <>
      <S.BackgroundModal>
        <S.ContainerModal>
          {/* <S.H1>Novo Prato</S.H1>
          <S.Form>
              <S.UrlInput></S.UrlInput>
              <S.NomeInput></S.NomeInput>
              <S.PrecoInput></S.PrecoInput>
              <S.DescricaoInput></S.DescricaoInput>
          </S.Form> */}
        </S.ContainerModal>
      </S.BackgroundModal>
    </>
  );
};

export default Modal;
