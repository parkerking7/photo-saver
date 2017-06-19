import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PhotoForm from './components/photo-form';
import PhotoList from './components/photo-list';
class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            photos: [ ]
        }
    }

        componentDidMount(){
            return axios.get('https://api.vschool.io/parker/todo')
                .then((response) => {
                            const photos = response.data;
                            this.setState({photos});
                        })
        }

        setPhotoState(){
            console.log(this.state);
        }

    newPhoto(photoInfo) {
        return axios.post('https://api.vschool.io/parker/todo', photoInfo)
            .then((response) => {
            console.log(this)
            // this.setState({
            //     photos.push(newPhoto)
            // })
        });
    }


    render(){
        return(
            <div>
                <PhotoForm  addPhoto = {this.newPhoto}/>
            <PhotoList photos = {this.state.photos}/>
            </div>
    );
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));