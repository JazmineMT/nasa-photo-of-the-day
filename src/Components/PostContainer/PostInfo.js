import React, {useState, useEffect} from "react";
import Button from './Button'
import Container from './Container'



const PostInfo = props => {
const {explanation, copyright} = props



const [information , setinformation] = useState(null)
const [copyrightinfo , setcopyrightinfo] = useState(null)
const [details , setdetails] = useState(null)



// const openDetails = explanation => {
//   setinformation(props.explanation)
  
// }

const closeDetails = () => {
  setinformation(null)
  setcopyrightinfo (null)
  setdetails(null)
}
 
const openDetails = explanation => {
  setinformation(props.explanation)
  setcopyrightinfo (`Copyright: ${props.copyright}`)
  setdetails(
<Button onClick={() =>  closeDetails(props.explanation)}>
  Hide Content
</Button>
)

}




return (
  <div>
    <Button onClick={() => openDetails(props.explanation)}>
      Learn More
    </Button>
    <Container>
    <h4>
      {information} 
    <p>{copyrightinfo}</p> 
        {details}
      </h4>
      </Container>
  </div>

)

}

export default PostInfo