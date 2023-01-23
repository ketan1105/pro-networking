import React,{useState,useEffect} from 'react';
import './Feed.css';
import FeedCard from './FeedCard';

function Feed(){

    const[posts,setPosts] = useState([])
    const [input,setInput] = useState("")

    async function getPosts() {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        console.log(data.posts);
        setPosts(data.posts);
      }

      useEffect(() => {
        getPosts();
      }, []);

      function addPosts(){
        const copyArray = [...posts];
        copyArray.unshift({
          userId : 10,
          name : "Ketan",
          tags : ["HTML" , "CSS"],
          body : input,
        });
        setPosts(copyArray)
        setInput("");
      }

      
    return(
        <div className='feed_container'>
        <div className='feed_add'>
            <div className='feed_add_input'>
            <input  type="text" value={input} onChange={(event) => setInput(event.target.value)}/>
            <button onClick={addPosts}>POST</button></div>
            <button   className='feed_add_photo' type='file'>PHOTO</button>
            </div>

{/* posts && posts.map  is avalable then map otherwise dont map it*/}
            {posts?.map((value) => (
                <FeedCard 
                image={value.userId}
                name={value.name}
                tags={value.tags}
                message={value.body}
                likeCount={value.reactions}
                />
            ))}
        </div>
    );
}

export default Feed;