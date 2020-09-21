import styled from "styled-components";

export const ContainerCard = styled.div`
  background: var(--grey-light);
  /* min-width: 352px; */
  height: 488px;
  border-radius: 8px;
`;

export const ContainerImg = styled.div`
  width: 100%;
  height: 198px;
  background-position: center center;
  background: url("https://diaonline.ig.com.br/wp-content/uploads/2019/04/sushi-em-brasilia-12-restaurantes-japoneses-para-conhecer.jpg") no-repeat center top;
  background-size: cover;
  border-radius: 8px 8px 0 0;
`;

export const Img = styled.div`
  width: 100%;
  height: auto;
`;

export const ContainerText = styled.div`
  margin: 32px 8% 32px 8%;
`;


export const H2 = styled.h2`
  font-size: 28px;
  color: var(--black);
  font-family: poppins;
  font-weight: 600;
`;

export const P = styled.p`
  font-size: 16px;
  color: var(--black);
`;

export const H3 = styled.h3`
  font-size: 24px;
  color: var(--green-dark);
`;

export const Footer = styled.div`
  height: 80px;
  background-color: var(--grey-dark);
  bottom: 0%;
  
`;

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 8% 20px 8%;
  align-items: center;
  
`;

export const ContainerButtons = styled.div`
  justify-content: space-between;

  
`;

export const ContainerScrool = styled.div`
  display: flex;
  width: 156px;
  height: 32px;
  align-items: center;
`;

export const Input = styled.div`
    .onoffswitch-checkbox {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

`;

export const Label = styled.div`
    .onoffswitch-label {
    display: block; overflow: hidden; cursor: pointer;
    height: 32px; padding: 0; line-height: 32px;
    border: 2px solid #E3E3E3; border-radius: 32px;
    background-color: #C72828;
    transition: background-color 0.3s ease-in;
}

.onoffswitch-label:before {
    content: "";
    display: block; width: 32px; margin: 0px;
    background: #FFFFFF;
    position: absolute; top: 0; bottom: 0;
    right: 54px;
    border: 2px solid #E3E3E3; border-radius: 32px;
    transition: all 0.3s ease-in 0s; 
}

`;


export const Button = styled.button`
  height: 40px;
  width: 40px;
  background-color: var(--white);
  border: none;
  border-radius: 8px;
  margin-right: 6px;
  cursor: pointer;
  
`;
