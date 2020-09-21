import React from "react";
import Button from "../Button";
import * as S from "./style";
import Logo from 'C:/Users/julio/Desktop/Freela/gorestaurant/src/assets/Logo.svg'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: true };
    }

    handleLoginClick() {

        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let btn;
        if (isLoggedIn) {
            btn = <Button>Novo Prato</Button>;
        } else {
            btn = null;
        }
        return (
            <>
                <S.ContainerHeader>
                    <S.Logo src={Logo}></S.Logo>
                    {btn}
                </S.ContainerHeader>
            </>
        );
    };
};

export default Header;