import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import PhotoList from './components/photo-list';
class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            photos: [ ]
        }
    }
        componentDidMount(){
        return $.getJSON("https://api.vschool.io/parker/todo")
            .then((res) => {
            const photos = res;
            this.setState({photos});
            })
        }


    render(){
        return(
            <div>
            <PhotoList photos = {this.state.photos}/>
            </div>
    );
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));