import React from 'react';
import PlayListItem from './playlist_item';

const PlayList= (props) => {

    if(props.playlist.length<=0){
      return <div className = "preloader-wrapper big active center playlist-loader" >
        <div className="spinner-layer spinner-blue">
          <div className="circle-clipper left">
            <div className="circle">
            </div>
          </div>
        <div className="gap-patch">
          <div className="circle">
          </div>
        </div>
        <div className="circle-clipper right">
              <div className="circle">
              </div>
        </div>
      </div>
    </div>;
    }

    const playListItems=props.playlist.map((song) =>{
    return  (
        <PlayListItem
         key={song.id}
         song={song} />
      );
    });

      return (
       <div className="container">
         <div className="collection">
            {playListItems}
          </div>
       </div>
     );
}

export default PlayList;
