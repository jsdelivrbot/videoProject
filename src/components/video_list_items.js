import React from 'react';
import Paper from 'material-ui/Paper';

class VideoListItem extends React.Component {
  constructor(props){
    super(props)
    this.state = { shadow: 0 };
  }

  OnMouseOver = (e) => {
    this.setState({ shadow: 3 });
  };

  OnMouseOut = (e) => {
    this.setState({ shadow: 0 });
  }

render(){
  const video = this.props.video;
  const onVideoSelect = this.props.onVideoSelect;
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return (
    <Paper style={{marginBottom: "5px"}} onClick={() => onVideoSelect(video)}
          onMouseOver={this.OnMouseOver}
          onMouseLeave={this.OnMouseOut}
          zDepth={this.state.shadow}
          className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </Paper>
  )};
};

export default VideoListItem;
