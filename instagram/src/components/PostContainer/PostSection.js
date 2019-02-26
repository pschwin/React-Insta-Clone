import React from 'react';
import Post from './Post';
import SearchBar from '../SearchBar/SearchBar';


const PostSection = props => {


   return (
       <div className="post-container">
       <div className="Search">
       <SearchBar />
       </div>
        {props.instaPosts.map((mappedPost, index) =>(

            <div className="post-wrapper">
            <Post postWhatever = {mappedPost} key = {index} />
            </div>

        ))}

        
       
       </div>
   ) 
}

export default PostSection;