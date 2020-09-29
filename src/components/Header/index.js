import React from "react";
import Button from "../Button";
import * as S from "./style";
import Logo from '/home/henrique/Codes/gorestaurant/src/assets/Logo.svg'
import {connect} from 'react-redux'


class Header extends React.Component {
    render() {
        const isLoggedIn = this.props.isLoggedIn;
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

const mapStoreToProps = (store) => {
    return {
        isLoggedIn: store.isLoggedIn
    }
}

export default connect(mapStoreToProps)(Header);