import React, { Component } from "react";
import * as S from "./style";
import illustration from "../../assets/illustration.svg";
import { cpfMask } from "./mask";
import Button from "../Button";
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { documentId: "" };
    this.handlechange = this.handlechange.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)

  }

  handleLoginClick() {
    this.props.dispatch({ type: "UPDATE_LOGIN", isLoggedIn: true })
    this.props.history.push('/')
  }

  handleLogoutClick() {
    this.props.dispatch({ type: "UPDATE_LOGIN", isLoggedIn: false })
  }

  handlechange(e) {
    this.setState({ documentId: cpfMask(e.target.value) });
  }

  render() {
    const { documentId } = this.state;

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
            <Button onClick={this.handleLoginClick} >Entrar</Button>
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

const mapStoreToProps = (store) => {
  return {
    isLoggedIn: store.isLoggedIn
  }
}

export default connect(mapStoreToProps)(Login);
