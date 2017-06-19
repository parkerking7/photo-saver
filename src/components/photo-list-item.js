import React from 'react';

const PhotoListItem = ( {photoItem} ) => {
    const title = photoItem.title;
    const imageUrl = photoItem.imgUrl;
    const description = photoItem.description;

    return(
        <li className="col-xs-6 photos">
            <div className="row">
            <h1 className="photoTitle">{title}</h1>
            <img className="main-photo" src={imageUrl} alt=""/>
            <div className="photo-description-box">
                <p className="photo-description">{description}</p>
            </div>
            </div>
        </li>

    );

};

export default PhotoListItem;