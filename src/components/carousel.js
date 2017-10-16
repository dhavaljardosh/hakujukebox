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
      return <div className="preloader-wrapper big active carousel-item-loader">
    <div className="spinner-layer spinner-blue">
      <div className="circle-clipper left">
        <div className="circle"></div>
      </div><div className="gap-patch">
        <div className="circle"></div>
      </div><div className="circle-clipper right">
        <div className="circle"></div>
      </div>
    </div></div>;
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
