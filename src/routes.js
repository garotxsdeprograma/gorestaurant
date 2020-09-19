import React from "react";
import MealsScreen from "./pages/MealsScreen";
import LoginScreen from "./pages/LoginScreen";
import ForgotPasswordScreen from "./pages/ForgotPasswordScreen";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MenuScreen from "./pages/MenuScreen";

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" component={MenuScreen} />
            <Route path="/admin" component={MealsScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/forgotpassword" component={ForgotPasswordScreen} />
        </Switch>
        </BrowserRouter>
    );
}