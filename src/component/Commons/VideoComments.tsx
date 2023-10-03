import React from 'react'
import styled from "@emotion/styled"
import { VideoComment } from "../utils/ApiCalls"
interface Iprops{
    text: string;
    avatar: any;

}

cont Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const PicsHolder = styled.div`
height: 50px;
width: 50px;
border-radius: 50%;
background-color: green;
`

const Pics = styled.img`
object-fit: cover;
`

const ComSec = styled.div`
width: 170px;
height: 40px;
`

const VideoComments:React.Fc<Iprops>= ({text, avatar}) => {
    const [VideoCommentData, setVideoCommentData] = useState ([]);

   const FetchVideoCommentData = async () => {
    await VideoComment().then((res)=>{
        console.log("asdf")
    })
   }
  return (
    <Container>
        {VideoComment.map}
        <PicsHolder>
          <Pics avatar = {}/>
        </PicsHolder>
        <ComSec> 
          
        </ComSec>

    </Container>
  )
}

export default VideoComments
