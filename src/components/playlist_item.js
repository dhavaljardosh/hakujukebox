import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'

class PlayListItem extends Component{

    constructor(props){
      super(props);

      this.toggleClass = this.toggleClass.bind(this);

      this.state={
        active:false
      }
    }
    toggleClass() {
      const currentState = this.state.active;
      this.setState({ active: !currentState });
    };
    render(){
      if(!this.props.song){
        return <div>Loading Song...</div>;
      }

      return (
        <a className="collection-item" style={{display:'flex', flexDirection:'row'}}>
            <div style={{flex:1,margin:'auto'}}>
              <p>{this.props.song.id}</p>
            </div>
            <div style={{flex:1}}>
              <i className="material-icons star"
              onClick={this.toggleClass}
              data-tip= {this.state.active? "REMOVE FROM FAVORITE" : "MARK AS FAVORITE"}
              style={{position: 'absolute',top: '0.65rem'}}
              style={this.state.active ? {color:'#D9D900'} : {color:'#DDDDDD'}}>
              grade
            </i>
            <ReactTooltip place="top" type="dark" effect="solid"/>
            </div>
            <div style={{flex:7,margin:'auto'}}>
              <p className="songName" style={{fontWeight:'bolder'}}>{this.props.song.song_name}</p>
            </div>
            <div style={{flex:2,margin:'auto'}}>
            {this.props.song.song_label!==undefined &&
              this.props.song.song_label!==null &&
              this.props.song.song_label.length > 0  &&
              this.props.song.song_label.includes('explicit')&&
              <span className="new badge" data-badge-caption="Explicit"></span>
            }
            </div>
            <div style={{flex:2,margin:'auto'}}>
            {this.props.song.song_label!==undefined &&
              this.props.song.song_label!==null &&
              this.props.song.song_label.length > 0  &&
              this.props.song.song_label.includes('upbeat')&&
              <span className="new badge" data-badge-caption="Upbeat"></span>
            }
            </div>
            <div style={{flex:4,margin:'auto', textAlign:'right'}} >
              <p>{this.props.song.song_duration}</p>
            </div>
          </a>
      );
    }

};

export default PlayListItem;
