import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostSection from './components/PostContainer/PostSection';
import CommentSection from './components/CommentContainer/CommentSection';

class App extends Component {

  constructor(){

    super();
    this.state = {
      thePosts: dummyData
    }

  }
  render() {
    return (
      <div className="App">
        <PostSection instaPosts={this.state.thePosts}/>
        <CommentSection instaComments={this.state.thePosts.comments} />
        console.log(instaComments);
      </div>
    );
  }
}

export default App;
