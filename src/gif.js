import React, {Component} from 'react';

class Gif extends Component {

  handleClick = () => {
    if (this.props.selectGif)
    this.props.selectGif(this.props.id);
  }

  render () {
    if (!this.props.id) {
      return null;
    }
    const src =`https://media2.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e47c2afc8652de9936c7b74a8fce89ecb9566737f0d&rid=giphy.gif&ct=g`;
    return (
      <img src={src} class="gif" alt={this.props.alt}
      onClick={this.handleClick}></img>
    )}

}

export default Gif
