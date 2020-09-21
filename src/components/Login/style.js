import styled from "styled-components";

export const BackgroundModal = styled.div`
  width: 100vw;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  position: fixed;
  opacity: 0.9;
  z-index: 3;
  cursor: pointer;
  left: 0;
  top: 0;
  overflow: hidden;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  height: 100%;
  margin: -10% 10% 4% 10%;
  border-radius: 8px;
  background-color: var(--yellow-dark);
  box-shadow: 1rem 0 0 rgba(black, 0.2);
  position: fixed;
  z-index: 999;
  overflow-y: auto;
  -webkit-box-shadow: -2px 12px 16px -8px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: -2px 12px 16px -8px rgba(0, 0, 0, 0.58);
  box-shadow: -2px 12px 16px -8px rgba(0, 0, 0, 0.58);

  @media (max-width: 599px) {
    flex-direction: column-reverse;
    margin: -25% 10% 4% 10%;
  }
`;

export const H2 = styled.h2`
  font-size: 28px;
  color: var(--black);
  font-family: poppins;
  font-weight: 600;
`;

export const Form = styled.div`
  width: 32%;
  margin: 2% 8% 4% 8%;

  @media (max-width: 599px) {
    width: 100%;
  }
`;

export const Illustration = styled.object`
  width: 50%;
  height: 60%;

  @media (max-width: 599px) {
    width: 100%;
  }
`;

export const CpfInput = styled.input`
  width: 100%;
  height: 48px;
  background-color: var(--yellow-light);
  border: none;
  margin-bottom: 24px;
  padding: 0 0 0 5%;
  border-radius: 8px;

  @media (max-width: 599px) {
    width: 100%;
  }
`;

export const PasswordInput = styled.input`
  width: 100%;
  height: 48px;
  background-color: var(--yellow-light);
  border: none;
  margin-bottom: 12px;
  padding: 0 0 0 5%;
  border-radius: 8px;

  @media (max-width: 599px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  width: 100%;
  font-size: 12pt;

  @media (max-width: 599px) {
    width: 100%;
  }
`;