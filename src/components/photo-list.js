import React from 'react';

import PhotoListItem from './photo-list-item';

const PhotoList = (props) => {

    const photos = props.photos.map((photoItem) => {
        return <PhotoListItem
        key = {photoItem._id}
        photoItem = {photoItem}
        />

    });

        return (
            <ul className="col-xs-12 list-group">
                {photos}
            </ul>

        )
};

export default PhotoList;