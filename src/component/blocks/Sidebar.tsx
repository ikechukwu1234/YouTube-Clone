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
import NavReuse from '../Commons/NavReuse'

const Container = styled.div`
  width: 220px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
  rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  position: fixed;
  top: 70px;
  right: 0;
  left: 0;
  bottom: 0;
  color: black;
  background-color: black;
  overflow-y: scroll;
`



const Div = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Sidebar:React.FC = () =>{
  return(
    <Container>
        <NavReuse
        text= "Home"
        icon= {<AiFillHome />}
         linkTo="/"
         />
        <NavReuse
        text='Short'
        icon={<SiShortcut/>}
        linkTo ="/Short"
        />
        
        <NavReuse
        text='Subscription'
        icon={<MdOutlineSubscriptions/>}
        linkTo="/Subscription"
        />
        <Div>————————————</Div>
      
        <br />
        <NavReuse
        text='Library'
        icon={<MdOutlineVideoLibrary/>}
         linkTo="/Library"
         />
       
        
        <NavReuse
        text='History'
        icon={   <GoHistory/>}
        linkTo="/History"
        />
       
      <NavReuse
      text='Your video'
      icon={ <BiVideoPlus/>}
      linkTo="/Yourvideo"
      />
      
        <NavReuse
        text='Watch'
        icon={ <BsClock/>}
        linkTo="/Watch"
        />
        <NavReuse
        text='Liked Videos'
        icon={<BiLike/>}
        linkTo="/LikedVideos"
        />
       
        <NavReuse
        text='Show More'
        icon={<AiFillHome/>}
        linkTo="/Showmore"
        />

<Div>————————————</Div>
  
         <Div>Explore</Div>
         
    
         <NavReuse
         text='Trending'
         icon={ <FaFireFlameCurved/>}
         linkTo="/Trending"
         />
        
        <NavReuse
        text='Music'
        icon={<PiMusicNote/>}
        linkTo="/Music"
        />
        
        <NavReuse
        text='Gaming'
        icon={<SiYoutubegaming/>}
        linkTo ="/Gaming"
        />
       
        <NavReuse
        text='News'
        icon={ <BiNews/>}
        linkTo="/News"
        />
        <NavReuse
        text='Sports'
        icon={<BsTrophy/>}
        linkTo ="/Sports"
        />
       <Div>————————————</Div>
       <Div>More from YouTube</Div>
        <NavReuse
        text='YouTube Premium'
        icon={<AiFillYoutube/>}
        linkTo="/YouTubePremium"
        />
        
        <NavReuse
        text='YouTube Studio'
        icon={<SiYoutubestudio/>}
        linkTo="/YouTubeStudio"
        />
        
        <NavReuse
        text='YouTube Music'        
        icon={<SiYoutubemusic />}
        linkTo ="/YouTubeMusic"
        />
       
        <NavReuse
        text='YouTube Kids'
        icon={<TbBrandYoutubeKids/>}
        linkTo="/YouTubeKids"
        />
       <Div>————————————</Div>
        <NavReuse
        text='Settings'
        icon={<LuSettings/>}
        linkTo="/Settings"
        />
        
        <NavReuse
        text='Report history'
        icon={<MdOutlineOutlinedFlag/>}
        linkTo="/Reporthistory"
        />
      
        <NavReuse
        text='Help'
        icon={<FiHelpCircle/>}
        linkTo="/Help"
       />
        <NavReuse
        text='Send feedback'
        icon={ <MdOutlineFeedback/>}
        linkTo="/Sendfeedback"
        />
       <Div>————————————</Div>
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
