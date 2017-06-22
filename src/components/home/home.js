import React, { Component } from 'react';
import axios from 'axios';
import PhotoForm from './photo-form';
import PhotoList from '../photo-list';
class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			photos: [],
			amount: 6
		};

		this.newPhoto = this.newPhoto.bind(this);
		this.deletePhoto = this.deletePhoto.bind(this);
		this.addStar = this.addStar.bind(this);
		this.newAmount = this.newAmount.bind(this);
	}

	componentDidMount() {
		return axios.get('https://api.vschool.io/parker/todo')
			.then((response) => {
				const photos = response.data;
				this.setState({
					photos
				});
			})
	}



	newPhoto(photoInfo) {
		return axios.post('https://api.vschool.io/parker/todo', photoInfo)
			.then((response) => {
				let newPhoto = response.data;
				let existingPhotos = this.state.photos;
				existingPhotos.push(newPhoto);
				this.setState({});
			});
	}
	deletePhoto(id, position) {
		let allPhotos = this.state.photos;
		allPhotos.splice(position, 1);
		this.setState({
			photos: allPhotos
		});
		return axios.delete('https://api.vschool.io/parker/todo/' + id)

	}
	addStar(id, isChecked) {
		isChecked = !isChecked;
		return axios.put('https://api.vschool.io/parker/todo/' + id, {
			"completed": isChecked
		});
	}

	newAmount() {
		let amount = this.state.amount;
		amount = amount + 6;
		this.setState({
			amount
		})
	}
	render() {
        return(

            <div>
                <div className="container">
                    <h1 className="text-center">Photo Saver</h1>
                    <PhotoForm  addPhoto = {this.newPhoto}/>
                    <PhotoList amount = {this.state.amount} newAmount = {this.newAmount} addStar = {this.addStar} deletePhoto = {this.deletePhoto} photos = {this.state.photos}/>
                </div>
            </div>
        );
    }

}

export default Home;