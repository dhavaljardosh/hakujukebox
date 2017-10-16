import React,{Component} from 'react';
import CarouselItem from './carousel_item';

class Carousel extends Component
{
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    if (this.props.albums.length <= 0) {
      return <div>Loading....</div>;
    }
    const carouselItems = this.props.albums.map((album) => {
      return (<CarouselItem onAlbumSelect={this.props.onAlbumSelect} key={album.id} album={album}/>);
    });
    return (
      <div>
        <div className="carousel">
          {carouselItems}
        </div>
      </div>
    );
  }
}

export default Carousel;
