import React, { useEffect, useState } from "react";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import PostDetail from "./components/PostDetail";
import EditPost from "./components/EditPost";

function App() {
  const End_POINT = "http://localhost:9000";
  let [posts,setPosts] = useState([])
  
  const addNewPost = async (post)=>{
    console.log("Post is",post);
    await fetch(`${End_POINT}/posts`,{
      method : "POST",
      body : JSON.stringify({
        title : post.title,
        description : post.description
      }),
      headers : {
        "content-type" : "application/json"
      }
    });
    setPosts([post,...posts])
    }

  useEffect(()=>{
    fetch(`${End_POINT}/posts`)
    .then(res =>res.json())
    .then(data => setPosts(data))
  },[])

  const deletePostHandler =async (id)=>{
    await fetch(`${End_POINT}/posts/`+id,{
      method : "DELETE"
    });
    setPosts(posts.filter(ele => ele.id !== id));
  }

  const updatePostHandler = async(updatePost)=>{
    await fetch(`${End_POINT}/posts/`+updatePost.id,{
      method : "PATCH",
      body : JSON.stringify(updatePost),
      headers : {
        "content-type" : "application/json"
      }
    })
    setPosts(posts.map(ele => ele.id === updatePost.id ? updatePost : ele));
  }

  return (
    <div className="container my-3">
      <h1 className="text-center text-info my-3">Posts</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Post posts={posts} removePost={deletePostHandler} /> } />
          <Route path="/add" element={<AddPost addPost={addNewPost} />} />
          <Route path="/post/:id" element={<PostDetail/>} />
          <Route path="/post/edit/:id" element={<EditPost updatePost = {updatePostHandler}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;