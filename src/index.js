import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/nav-bar';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/home';
import Profile from'./components/profile/profile';
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
                        <Route exact path="/" component={Home} />
                        <Route path="/profile" component={Profile} />
                    </div>
                </Router>
            </div>
    );
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));