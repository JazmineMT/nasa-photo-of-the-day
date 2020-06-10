import React, {useState} from "react";
import PostInfo from "./PostInfo";




const Post = props => {
    const {data} = props
    console.log(props)
    

    
    return (
        <div>
            <h1> 🚀 NASA Photo of the Day</h1>
            <h2>{props.data.data.title}</h2>
        <div>
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.data.data.url}
        />
        </div>
            <h3>{props.data.data.date}</h3>
           <PostInfo explanation={props.data.data.explanation} copyright={props.data.data.copyright} />
           
        </div>
        
    )


}

export default Post;