import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './Components/Home/Home';
import Leader from './Components/Leader/Leader';
import StartScreen from './Components/StartScreen/StartScreen';


export default function Routes( props ){
    return <Switch>
        <Route render={routerProps => <Home {...routerProps} reset={props.reset} pause={props.pause}/>} path='/home' exact/>
        <Route component={Leader} path='/leader' exact/>
        <Route component={StartScreen} path='/' exact/>
    </Switch>
}