import React from "react";
import PlatesScreen from "./pages/PlatesScreen";
import LoginScreen from "./pages/LoginScreen";
import ForgotPasswordScreen from "./pages/ForgotPasswordScreen";
import { Switch, Route, useHistory } from "react-router-dom";

export default function Routes() {
    return (
        <Switch>
            <Route exact={true} path="/" component={PlatesScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/categorias" component={ForgotPasswordScreen} />
        </Switch>
    );
}