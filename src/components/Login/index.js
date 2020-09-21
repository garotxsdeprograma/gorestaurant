import React, { Component } from "react";
import * as S from "./style";
import illustration from "../../assets/illustration.svg";
import { FiTrash2, FiEdit3 } from "react-icons/fi";
import { cpfMask } from "./mask";
import Button from "../Button";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    
      this.state = { documentId: "" };
      this.handlechange = this.handlechange.bind(this);

    this.state = { isLoggedIn: true };
    
  }

     handleLoginClick() {   
          this.setState({ isLoggedIn: true });
      }

      handleLogoutClick() {
          this.setState({ isLoggedIn: false });
      }
    
  

  handlechange(e) {
    this.setState({ documentId: cpfMask(e.target.value) });
  }


    render() {
      const { documentId } = this.state;

      const isLoggedIn = this.state.isLoggedIn;
      let btn;
      if (isLoggedIn) {
          btn = <Link to="/" style={{ textDecoration: "none" }}><Button onClick={this.handleLoginClick}>Entrar</Button></Link>;
      } else {
          btn = "";
      }
    return (
      <>
        <S.ContainerLogin>
          <S.Form>
            <S.H2>Login</S.H2>
            <S.Label>CPF</S.Label>
            <S.CpfInput
              placeholder="000.000.000.00"
              maxLength="14"
              name="documentId"
              value={documentId}
              onChange={this.handlechange}
            ></S.CpfInput>
            <S.Label>Senha</S.Label>
            <S.PasswordInput
              placeholder="********"
              type="password"
              maxLength="8"
            ></S.PasswordInput>
                    {btn}
          </S.Form>
          <S.Illustration
            type="image/svg+xml"
            data={illustration}
          ></S.Illustration>
        </S.ContainerLogin>
      </>
    );
  }
}

export default Login;
