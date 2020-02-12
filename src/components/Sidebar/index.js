import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';

import blogPost from '../../data/blog.json';
import {NavLink} from 'react-router-dom';


/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  const [posts, setPosts] = useState([]);



  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);


  return(
    <div className="sidebarContainer">
      <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
        <div className="cardHeader">
          <span>About Me</span>          
        </div>
        <div className="profileImageContainer">
            <img src="https://pbs.twimg.com/profile_images/1174727723790606336/D3hN-OXZ_400x400.jpg" alt="plane"></img>
        </div>
        <div className="cardBody">
          <p className="personlBio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </Card>

      <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
        <div className="cardHeader">
          <span>Social Media</span>
        </div>
      </Card>

      <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
      <div className="cardHeader">
          <span>Recent Posts</span>          
        </div>
        <div className="recentPosts">

          {
            posts.map(post=> {
              return(
                <NavLink key={post.id} to={`/post/${post.id}`}>
                  <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
                </NavLink>                
                
              );
            })
          }  
      </div>
      </Card>


    </div>
    
   )

 }

export default Sidebar