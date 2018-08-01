import React from "react";
import Home from "./components/home/home";
import { Switch, Route } from 'react-router-dom'
import Contact from "./components/contact/contact";
import { Container } from 'react-materialize';

const Main = () => (
    <main>
        <Container>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </Container>
    </main>
);

export default Main;