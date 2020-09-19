import styled from "styled-components";


export const ContainerHeader = styled.div`
  background: var(--red);
  height: 17.5rem;
  padding: 5% 12% 0 12%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 599px) {
      padding: 5% 6% 0 6%;
      height: 12rem;
   }
   
`;

export const Logo = styled.img`
  width: 19.25rem;
  height: 3.875rem;

   @media (max-width: 599px) {
      width: 12.13rem;
   }

    @media (min-width: 600px) and (max-width: 899px) {
      width: 15rem;
   }
`;
