import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostSection from './components/PostContainer/PostSection';

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
      </div>
    );
  }
}

export default App;
