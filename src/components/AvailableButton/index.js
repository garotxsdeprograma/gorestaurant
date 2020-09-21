import React, { Component } from "react";
import Switch from "react-switch";
import * as S from "./style";

export default class AvailableButton extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    render() {
        return (
            <S.Label>
                <span>Disponível</span>
                <Switch width={88} height={32} offColor="#C72828" onColor="#39B100" onChange={this.handleChange} checked={this.state.checked} />
            </S.Label>
        );
    }
}

