import React from 'react';
import PlayListItem from './playlist_item';

const PlayList= (props) => {

    if(props.playlist.length<=0){
      return <div>Loading Playlist....</div>;
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
