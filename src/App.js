import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Characters from './pages/Characters'

    function App() {
        return (
            <Router>
                <Switch>
            <div className="App">
                <Route path="/" exact render={ () => <Home/>}>
                </Route>
                <Route path="/characters" exact render={ () => <Characters/>} />
            {/* <h1>Name: {items.name}</h1>
            <h2>Description: {items.description}</h2>  */}
            </div>
            </Switch>
            </Router>
        );

    }

export default App;
