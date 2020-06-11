import React, {useState} from "react";
import PostInfo from "./PostInfo";
import Titles from "./titles";



const Post = props => {
    const {data} = props
    console.log(props)
    
   
    
    return (
        <div>
            
            <Titles>{props.data.data.title}</Titles>
            <Titles>{props.data.data.date}</Titles>
        <div>
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.data.data.url}
        />
        </div>
           <PostInfo explanation={props.data.data.explanation} copyright={props.data.data.copyright} />
           
        </div>
        
    )


}

export default Post;