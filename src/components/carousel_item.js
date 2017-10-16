import React from 'react';
import Card from './card';
const CarouselItem= ({album,onAlbumSelect}) => {

    if(!album){
      return <div className="center">Loading....</div>;
    }
    const imageUrl=album.cover_photo_url;
    return (
      <div onClick={() => onAlbumSelect(album)} className="carousel-item">
        <Card album={album} />
      </div>
    );
};

export default CarouselItem;
