import styled from "styled-components";

export const ContainerBox = styled.button`
  width: 12.13rem;
  height: 3.5rem;
  background-color: var(--green-dark);
  border-radius: 0.75rem;
  border-style: hidden;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Poppins;
  font-weight: 600;
  padding: 0 0 0 20px;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
    box-shadow: 0 0 5px #961e1e;
  }

  @media (max-width: 599px) {
      width: 3.5rem;
      font-size:0;
      padding: 0 0 0 0;
   }
`;


export const ContainerIcon = styled.div`
  background-color: var(--green-light);
  width: 3.5rem;
  height: 3.5rem;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  border-radius: 0 0.75rem 0.75rem 0;

  @media (max-width: 599px) {
      border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
   }
  
`;
