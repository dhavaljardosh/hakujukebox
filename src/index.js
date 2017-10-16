import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PlayList from './components/playlist';
import Carousel from './components/carousel';
import axios from 'axios';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      albums:[],
      playlist:[],
    };
    this.albumSearch();
  }
  albumSearch(){
    axios.get('https://cors-anywhere.herokuapp.com/https://stg-resque.hakuapp.com/albums.json',{headers: {'Access-Control-Allow-Origin': '*'}}).then((response) => {
          this.setState({albums: response.data});
          this.updatePlayList(this.state.albums[0]);
        });
  }

  updatePlayList(album){
    //console.log(album);
    axios.get(`https://cors-anywhere.herokuapp.com/https://stg-resque.hakuapp.com/songs.json?album_id=${album.id}`,{headers: {'Access-Control-Allow-Origin': '*'}})
      .then(response => this.setState({playlist: response.data}));
  }

  scrollRight(){
      $('.carousel').carousel('next');
  }

  scrollLeft(){
    $('.carousel').carousel('prev');
  }

  render(){
      return (
        <div>
          <div style={{position:'relative'}}>
            <div className="left-controller" onClick={this.scrollLeft} style={{zIndex:1}}>
              <i className="material-icons" style={{
                padding: '8px'
              }}>arrow_back</i>
              </div>
              <Carousel
               albums={this.state.albums}
               onAlbumSelect={selectedAlbum => this.updatePlayList(selectedAlbum)}
               />
               <div className="right-controller" onClick={this.scrollRight}>
                 <i className="material-icons" style={{
                   padding: '8px'
                 }}>arrow_forward</i>
               </div>
          </div>

          <PlayList playlist={this.state.playlist} />
        </div>
      );
  }
  componentDidUpdate(){
    $('.carousel').carousel({
        'indicators':true
    });
  }
}

//Attach component with DOM!

ReactDOM.render(<App />,document.querySelector('.container'));
