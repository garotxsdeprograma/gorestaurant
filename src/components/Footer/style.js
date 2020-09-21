import styled from "styled-components";

export const BackgroundFooter = styled.div`
  width: 100%;
  height: 120px;
  background-color: var(--grey-light);

  @media (max-width: 599px) {
    height: 160px;
  }
`;

export const ContainerFooter = styled.div`
    margin: 30px 12% 0 12%;
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    
    @media (max-width: 599px) {
    display: block;
    text-align: center;
    font-size: 12px;
  }
`;

export const LogoArbyte = styled.img`
  width: 100px;
  height: auto;
  
`;

export const ContainerArbyte = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 599px) {
    text-align: center;
  }
`;

export const Linkedin = styled.a`
  text-decoration: none;
  color: var(--red);
`;