import React, {useState, useEffect} from "react";

const PostInfo = props => {
const {explanation, copyright} = props



const [information , setinformation] = useState(null)
const [buttoninfo, setbuttoninfo] = useState(null)
const [copyrightinfo , setcopyrightinfo] = useState(null)



// const openDetails = explanation => {
//   setinformation(props.explanation)
  
// }

const closeDetails = () => {
  setinformation(null)
  setbuttoninfo(null)
  setcopyrightinfo (null)
}
 
const openDetails = explanation => {
  setinformation(props.explanation)
  setbuttoninfo('Closeinfo')
  setcopyrightinfo (`Copyright: ${props.copyright}`)

}

 

return (
  <div>
    <button onClick={() => openDetails(props.explanation)}>
      More Info 
    </button>
    <h4>
      <div>
      {information} 
    <p>{copyrightinfo}</p> 
      <button onClick={() => closeDetails(props.explanation)} >{buttoninfo}</button>
      </div>
      </h4>
  </div>

)

}

export default PostInfo