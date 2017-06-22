import React from 'react';

const PhotoListItem = ( props ) => {
    const addStar = props.addStar;
    const deletePhoto = props.deletePhoto;
    const position = props.place;
    const photoItem = props.photoItem;
    const isChecked = photoItem.completed;
    const title = photoItem.title;
    const imageUrl = photoItem.imgUrl;
    const description = photoItem.description;
    const id = photoItem._id;

    return(
        <li className="col-xl-4 col-xs-12 col-md-6 photos">
            <div className="row">
            <h1 className="text-center photoTitle">{title}</h1>
                <button type='button' onClick = { event => deletePhoto(id, position) } className="btn btn-sm deleteBtn">X</button>
            <img className="main-photo" src={imageUrl} alt=""/>
                <input defaultChecked = {isChecked} className="star" type="checkbox" onClick = { event => addStar(id, isChecked, position)}></input>
            <div className="photo-description-box">
                <p className="photo-description">{description}</p>
            </div>
            </div>
        </li>

    );


};

export default PhotoListItem;