import React, {Component} from 'react';
import axios from 'axios';
import PhotoList from '../photo-list'
class Favorites extends Component{
    constructor(props){
        super(props);

        this.state = {
            favoritePhotos: [],
            amount: 6
        };

        this.deletePhoto = this.deletePhoto.bind(this);
        this.addStar = this.addStar.bind(this);
        this.newAmount = this.newAmount.bind(this);
    }

    componentDidMount(){
        return axios.get('https://api.vschool.io/parker/todo')
            .then((response) => {
                let allPhotos = response.data;
                let favoritePhotos = [];
                allPhotos.map(function(photo) {
                    if(photo.completed === true){
                        favoritePhotos.push(photo);
                    }
                });
                this.setState({favoritePhotos});
            })
    };

    splicePhoto(position){
        let allPhotos = this.state.favoritePhotos;
        allPhotos.splice(position, 1);
        this.setState({favoritePhotos: allPhotos});
    };

    deletePhoto(id, position){
        this.splicePhoto(position);
        return axios.delete('https://api.vschool.io/parker/todo/' + id)

    };

    addStar(id, isChecked, position){
        isChecked = !isChecked;
        return axios.put('https://api.vschool.io/parker/todo/' + id, {"completed": isChecked})
            .then(() =>{
                this.splicePhoto(position);
            });
    };
    newAmount(){
        let amount = this.state.amount;
        amount = amount + 6 ;
        this.setState({amount})
    }

    render() {
        return (
            <div>
                <PhotoList amount = {this.state.amount} newAmount = {this.newAmount} addStar = {this.addStar} deletePhoto = {this.deletePhoto} photos = {this.state.favoritePhotos}/>
            </div>
        )
    }

};

export default Favorites;