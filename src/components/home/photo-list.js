import React from 'react';

import PhotoListItem from './photo-list-item';

const PhotoList = (props) => {

    const photos = props.photos.map((photoItem, i) => {
        return <PhotoListItem
        key = {photoItem._id}
        place = {i}
        addStar = {props.addStar}
        photoItem = {photoItem}
        deletePhoto = {props.deletePhoto}
        />

    });

        return (
            <ul className="col-xs-12 list-group">
                {photos}
            </ul>

        )
};

export default PhotoList;