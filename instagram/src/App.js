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

  componentDidMount(){

    this.setState({thePosts: dummyData});

  }

  addComment = (event, postId, text) => {

    event.preventDefault();
    const newComment ={
      postId: 'Joe',
      text: ""
    }

    this.setState({
      thePosts: [...this.state.thePosts.comments, newComment]
    })
  }


  render() {
    return (
      <div className="App">
        <PostSection instaPosts={this.state.thePosts}/>
      </div>
    );
  }
}

export default App;
