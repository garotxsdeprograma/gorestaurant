import styled from "styled-components";


export const ContainerCards = styled.div`
  margin: -10% 12% 0 12%; 
    display: grid;
    grid-template-columns: 324px 324px 324px;
    grid-template-rows: 3fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;

   @media (max-width: 599px) {
      margin: -15% 6% 0 6%;
      grid-template-columns: 1fr;
   }
`;