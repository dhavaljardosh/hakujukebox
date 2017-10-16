import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
        <div className="card z-depth-4" >
          <div>
            <img src={this.props.album.cover_photo_url} className="responsive-img"/>
          </div>
          <p className="album">{this.props.album.name}</p>
          <p className="center singer">{this.props.album.artist_name}</p>
        </div>
    );
  }
}
export default Card;
