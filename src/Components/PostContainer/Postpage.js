
import React, {useState} from "react";
import Post from "./Post"

const PostPage = props => {
const {data} = props
console.log(props.data)







return (
    <div>
        <Post data={props}/>
    </div>
)

}

export default PostPage;