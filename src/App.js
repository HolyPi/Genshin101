import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Characters from './pages/Characters'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }

    }
    componentDidMount() {

        fetch('https://api.genshin.dev/characters/albedo')
            .then(res => res.json())
            .then(json => {
              console.log('parsed json', json)
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    render() {

        const { isLoaded, items } = this.state;
        console.log(items);

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <Router>
                <Switch>
            <div className="App">
                <Route path="/" exact render={ () => <Home/>}>
                    </Route>
        
                    <Route path="/characters" exact render={ () => <Characters/>} />
                 {/* aaaaa 
            <h1>Name: {items.name}</h1>
        <h2>Description: {items.description}</h2>  */}
            </div>
            </Switch>
            </Router>
        );

    }

}


export default App;
