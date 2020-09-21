import styled from "styled-components";

export const BackgroundModal = styled.div`
  width: 100vw;
  height: 100%;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
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
  overflow:hidden;
    

`;

export const ContainerModal = styled.div`
  width: 50%;
  height: 80%;
  margin: 4% 25% 4% 25%;
  border-radius: 8px;
  background-color: var(--white);
  box-shadow: 1rem 0 0 rgba(black, 0.2);
  position: fixed;
  z-index: 999;
  overflow-y: auto;
  -webkit-box-shadow: -2px 12px 16px -8px rgba(0,0,0,0.58);
-moz-box-shadow: -2px 12px 16px -8px rgba(0,0,0,0.58);
box-shadow: -2px 12px 16px -8px rgba(0,0,0,0.58);
    
`;
