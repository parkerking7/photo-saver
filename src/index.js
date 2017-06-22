import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/nav-bar';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/home';
import Favorites from'./components/favorites/favorites';
class App extends Component{
    constructor(props) {
        super(props);

    }


    render(){
        return(

            <div >
                <NavBar />
                <Router>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/favorites" component={Favorites} />
                    </div>
                </Router>
            </div>
    );
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));