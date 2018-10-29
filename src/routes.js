import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './Components/Home/Home';
import Leader from './Components/Leader/Leader';
import StartScreen from './Components/StartScreen/StartScreen';


export default (
    <Switch>
        <Route component={Home} path='/home' exact/>
        <Route component={Leader} path='/leader' exact/>
        <Route component={StartScreen} path='/' exact/>
    </Switch>
)