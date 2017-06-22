import React from 'react';

import PhotoListItem from './photo-list-item';

const PhotoList = (props) => {
    let amount = props.amount;
    let returnedPhotos = props.photos.slice(0,amount);
    const photos = returnedPhotos.map((photoItem, i) => {
        return <PhotoListItem
        key = {photoItem._id}
        place = {i}
        addStar = {props.addStar}
        photoItem = {photoItem}
        deletePhoto = {props.deletePhoto}
        />
    });

    const showMore = () => {
        props.newAmount();
    };
        return (
            <div>
            <ul className="col-xs-12 list-group">
                {photos}
            </ul>
                <div>
            <button onClick = { event => showMore()} className="btn btn-success showMoreBtn">Show More</button>
                </div>
            </div>

        )
};

export default PhotoList;