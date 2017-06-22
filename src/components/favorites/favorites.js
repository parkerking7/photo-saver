import React, {Component} from 'react';
import axios from 'axios';
class Favorites extends Component{
    constructor(props){
        super(props);

        this.state = {
            FavoritePhotos: []
        }
    }

    componentDidMount(){
        return axios.get('https://api.vschool.io/parker/todo')
            .then((response) => {
                let allPhotos = response.data;
                let favoritePhotos = [];
                const getPhotos = allPhotos.map(function(photo) {
                    if(photo.completed === true){
                        favoritePhotos.push(photo);
                    }
                });
                console.log(favoritePhotos)
                // this.setState({photos});
            })
    }

    render() {
        return (
            <h1 className="text-center">
                Your Favorites
            </h1>
        )
    }

};

export default Favorites;