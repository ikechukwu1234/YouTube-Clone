import React from 'react'
import styled from '@emotion/styled'
import {AiFillHome} from "react-icons/ai"
import {SiShortcut} from "react-icons/si"
import {MdOutlineSubscriptions} from "react-icons/md"
import {MdOutlineVideoLibrary} from "react-icons/md"
import {GoHistory} from "react-icons/go"
import {BiVideoPlus} from "react-icons/bi"
import {BsClock} from "react-icons/bs"
import {BiLike} from "react-icons/bi"
import {FaFireFlameCurved} from "react-icons/fa6"
import {SiYoutubemusic} from "react-icons/si"
import {SiYoutubegaming} from "react-icons/si"
import {BiNews} from "react-icons/bi"
import {BsTrophy} from "react-icons/bs"
import {AiFillYoutube} from "react-icons/ai"
import {SiYoutubestudio} from "react-icons/si"
import {PiMusicNote} from "react-icons/pi"
import {TbBrandYoutubeKids} from "react-icons/tb"
import {LuSettings} from "react-icons/lu"
import {MdOutlineOutlinedFlag} from "react-icons/md"
import {MdOutlineFeedback} from "react-icons/md"
import {FiHelpCircle} from "react-icons/fi"
import { NavLink } from 'react-router-dom'

const Container = styled.div`
  width: 220px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
  rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  position: fixed;
  top: 80px;
  right: 0;
  left: 0;
  bottom: 0;
  color: black;
  background-color: white;
`



const IconHold = styled(NavLink)`
 display: flex;
 padding: 10px;
 gap:8px;
 margin-left: 20px;
`
const Span = styled.div`
font-size: 15px
`
const Div = styled.div`
 margin-left: 23px;
 font-size: 18px
`


const Sidebar:React.FC = () =>{
  return(
    <Container>
        <IconHold
         to ="/"
         style ={({isActive})=>{
            return{
                color: isActive? "black": "black",
                /* background: isActive? "rgba(248, 233, 233, 0.5)": "transparent", */
                textDecoration: "none"
            }
         }}
        >
            <AiFillHome/>
            <Span>Home</Span>
        </IconHold>
        <IconHold
        to ="/Short"
        style ={({isActive})=>{
           return{
               color: isActive? "black": "black",
               /* background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
               textDecoration: "none" */
           }
        }}
        >
            <SiShortcut/>
            <Span>Short</Span>
        </IconHold>
        <IconHold
        to ="/Subscription"
        style ={({isActive})=>{
           return{
               color: isActive? "black": "black",
               /* background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
               textDecoration: "none" */
           }
        }}
        >
            <MdOutlineSubscriptions/>
            <Span>Subscription</Span>
        </IconHold>
        <br />
        <IconHold
        to ="/Library"
        style ={({isActive})=>{
           return{
               color: isActive? "black": "black",
               background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
               textDecoration: "none"
           }
        }}
        >
            <MdOutlineVideoLibrary/>
            <Span>Library</Span>
        </IconHold>
        <IconHold
        to ="/History"
        style ={({isActive})=>{
           return{
               color: isActive? "black": "black",
               background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
               textDecoration: "none"
           }
        }}
        >
            <GoHistory/>
            <Span>History</Span>
        </IconHold>
      <IconHold
      to ="/"
      style ={({isActive})=>{
         return{
             color: isActive? "gray": "black",
             background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
             textDecoration: "none"
         }
      }}
      >
            <BiVideoPlus/>
            <Span>Your video</Span>
        </IconHold>
        <IconHold
        to ="/Watchlater"
        style ={({isActive})=>{
           return{
               color: isActive? "black": "black",
               /* background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
               textDecoration: "none" */
           }
        }}
        >
            <BsClock/>
            <Span>Watch later</Span>
        </IconHold>
        <IconHold
        to ="/LikedVideos"
        style ={({isActive})=>{
           return{
               color: isActive? "gray": "black",
               background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
               textDecoration: "none"
           }
        }}
        >
            <BiLike/>
            <Span>Liked videos</Span>
        </IconHold>
        <IconHold
        to ="/"
        style ={({isActive})=>{
           return{
               color: isActive? "gray": "black",
               background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
               textDecoration: "none"
           }
        }}
        >
            <AiFillHome/>
            <Span>Show more</Span>
        </IconHold>
         <br />
         <Div>Explore</Div>
         <IconHold
         to ="/"
         style ={({isActive})=>{
            return{
                color: isActive? "gray": "black",
                background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
                textDecoration: "none"
            }
         }}
         >
            <FaFireFlameCurved/>
            <Span>Trending</Span>
        </IconHold>
        <IconHold
        to ="/"
        style ={({isActive})=>{
           return{
               color: isActive? "gray": "black",
               background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
               textDecoration: "none"
           }
        }}
        >
            <PiMusicNote/>
            <Span>Music</Span>
        </IconHold>
        <IconHold
        to ="/"
        style ={({isActive})=>{
           return{
               color: isActive? "gray": "black",
               background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
               textDecoration: "none"
           }
        }}
        >
            <SiYoutubegaming/>
            <Span>Gaming</Span>
        </IconHold>
        <IconHold
        to ="/"
        style ={({isActive})=>{
           return{
               color: isActive? "gray": "black",
               background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
               textDecoration: "none"
           }
        }}
        >
            <BiNews/>
            <Span>New</Span>
        </IconHold>
        <IconHold
        to ="/"
        style ={({isActive})=>{
           return{
               color: isActive? "gray": "black",
               background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
               textDecoration: "none"
           }
        }}
        >
            <BsTrophy/>
            <Span>Spots</Span>
        </IconHold>
        <br />
       <Div>More from YouTube</Div>
        <IconHold
        to ="/"
        style ={({isActive})=>{
           return{
               color: isActive? "gray": "black",
               background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
               textDecoration: "none"
           }
        }}
        >
            <AiFillYoutube/>
            <Span>YouTube Premium</Span>
        </IconHold>
        <IconHold
        to ="/"
        style ={({isActive})=>{
           return{
               color: isActive? "gray": "black",
               background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
               textDecoration: "none"
           }
        }}
        >
            <SiYoutubestudio/>
            <Span>YouTube Studio</Span>
        </IconHold>
        <IconHold
        to ="/"
        style ={({isActive})=>{
           return{
               color: isActive? "black": "white",
               background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
               textDecoration: "none"
           }
        }}
        >
            <SiYoutubemusic/>
            <Span>YouTube Music</Span>
        </IconHold>
        <IconHold
        to ="/"
        style ={({isActive})=>{
           return{
               color: isActive? "black": "white",
               background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
               textDecoration: "none"
           }
        }}
        >
            <TbBrandYoutubeKids/>
            <Span>YouTube Kids</Span>
        </IconHold>
        <br />
        <IconHold
        to ="/"
        style ={({isActive})=>{
           return{
               color: isActive? "gray": "white",
               background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
               textDecoration: "none"
           }
        }}
        >
            <LuSettings/>
            <Span>Settings</Span>
        </IconHold>
        <IconHold
        to ="/"
        style ={({isActive})=>{
           return{
               color: isActive? "gray": "white",
               background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
               textDecoration: "none"
           }
        }}
        >
            <MdOutlineOutlinedFlag/>
            <Span>Report history</Span>
        </IconHold>
        <IconHold
        to ="/"
        style ={({isActive})=>{
           return{
               color: isActive? "gray": "white",
               background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
               textDecoration: "none"
           }
        }}
        >
            <FiHelpCircle/>
            <Span>Help</Span>
        </IconHold>
        <IconHold
        to ="/"
        style ={({isActive})=>{
           return{
               color: isActive? "gray": "white",
               background: isActive? "rgba(248, 233, 233, 0.5)": "transparent",
               textDecoration: "none"
           }
        }}
        >
            <MdOutlineFeedback/>
            <Span>Send feedback</Span>
        </IconHold>
        <br />
        <Div>
            About press copyright
        </Div>
        <Div>
            Contact us Creators
        </Div>
        <Div>
            Advertise Developers
        </Div>
        <Div>
            Terms Privacy Policy & Safety
            How YouTube Works
            Test new features
        </Div>
        
    </Container>
  )
} 


export default Sidebar
