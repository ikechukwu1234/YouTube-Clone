import React, {useState} from 'react'
import styled from '@emotion/styled'
import { abbreviateNumber } from "js-abbreviation-number" 
import ReactPlayer from "react-player"
import { Link } from 'react-router-dom'

const Hold = styled.div`
   width: 300px;
   height: 300px;
   border-radius: 10px;
   overflow: hidden;

`

const CardHold = styled.div<{bdd: string}>`
    border-radius: 10px;
    position: relative;
`

const Image = styled.img`
    height: 200px;
    background-color: white;
    width: 100%;
    object-fit: cover;
    margin-bottom: 20px;
`

const UserHold = styled.div`
    display: flex;
`

const User = styled.img`
    height: 50px;
    width: 50px;
    background-color: red;
    border-radius: 50%;
    margin-right: 10px;
`

const UName = styled.div`
    width: 220px;
    height: 40px;
    overflow: hidden;
    color: black;
`

const Channelid = styled.div`
    color: black;
    padding-top: 5px;
`

const Channelname = styled.div`
    color: red;
    padding-top: 5px;
`

const  Desc = styled.div`
    color: black;
`


const VideoLength = styled.div`
    position: absolute;
    bottom: 80px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.8);
    height: 30px;
    width: 70px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
`

interface Iprops{
    bdd: string;
    props: any;
}

const Card :React.FC<Iprops>= ({bdd, props}) => {
    const [show, setShow] = useState (false);
    const [indexed, setIndexed] = useState ("-547")
    const [channel, setChannel] = useState ("")
    const [channelname, setChannelName] = useState ("")
    const [desc, setDesc] = useState ("")

 

    console.log(indexed)
  return (
    <Hold>
        <CardHold 
             onMouseOver={()=>{
                setShow(true);
                setIndexed(props?.video?.videoId);
                setChannel(props?.video?.channelId)
                setChannelName(props?.video?.channelName)
                setDesc(props?.video?.description)
             }}
             onMouseLeave={()=>{
                setShow(false);
             }}
             bdd={bdd}>
                {show && indexed && channel && channelname && desc === props?.video?.videoId ?(
                    <ReactPlayer
                    playing={true}
                    width={300}
                    height={200}
                    style={{
                        height: "150px",
                        width: "100%",
                    }}
                     url={`https://www.youtube.com/watch?v=${props?.video?.videoId}`}
                    />
                ) : (
                    <Image 
                    className='img' src= {props?.video?.thumbnails[0]?.url}/>                
                )}
           
            <VideoLength>{props?.video?.lengthText}</VideoLength>
            <UserHold>
                <User  className='img' src= {props?.video?.thumbnails[0]?.url}/>
                <Link
                style={{
                    textDecoration: "none", color: "white"}}
                    to={`/watch/${props?.video?.videoId}`}>
                            <UName>{props?.video?.title}</UName>
                            <Channelid>channelid: {props?.video?.channelId}</Channelid>
                            <Channelname>channelname: {props?.video?.channelName}</Channelname>
                            <Desc>{props?.video?.description}</Desc>
                    </Link>
                    <div>
                        {abbreviateNumber(
                            Number(
                                props?.video?.viewCountText
                                ?.split(" ")[0]
                                ?.split(",")
                                ?.join(""),
                            ),
                        )}
                    </div>
                    <div></div>
            </UserHold>
        </CardHold>      
    </Hold>
  );
};

export default Card
