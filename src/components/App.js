import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';

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
            <div className="App">
             
                <Navbar />
                <Header />
       
                  {/* aaaaa */}
        {/* <h1>Name: {items.name}</h1>
        <h2>Description: {items.description}</h2> */}
                    
            </div>
            </Router>
        );

    }

}


export default App;
