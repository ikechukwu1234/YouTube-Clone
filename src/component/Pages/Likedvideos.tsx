import React from 'react'
import styled from "@emotion/styled"
import pic from "../../assets/hq720.webp"
import pic1 from "../../assets/hq720.webp"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 30px;
    gap: 30px;
`

const First = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 900px;
    width: 750px;
    border-radius: 10px;
    background: linear-gradient(
		90deg,
		rgba(0, 0, 0, 0.9640231092436975) 31%,
		rgba(26, 26, 25, 0.2049194677871149) 100%,
		rgba(255, 255, 255, 0) 100%
	);
`

const P = styled.p`
    text-align: start;
    font-size: 18px;
    width: 250px;
`

const FirstImage = styled.img`
    width: 350px;
    object-fit: cover;
    overflow: hidden;
`

const FirstCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
`
const H2 = styled.div`
    h2{
        color: white;
        text-align: start;
        font-size: 40px;
        margin-right: 180PX;

    }
    h4{
        color: white;
    }
    p{
         color: white;
         font-size: 18px;
    }
`

const Second = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 250px;
`

const SecondImage = styled.img`
    width: 250px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 10px;
`

const Likedvideos :React.FC= () => {
  return (
    <Container>
        <First>
            <FirstCard>
            <FirstImage src={pic} />
            </FirstCard>
            <H2>
                <h2>Liked videos</h2>

            <h4>ikechukwu umezuruike</h4>

            <p>1 video No view last updated on jun 29, 2023</p>

            </H2>

        </First>
        <Second>
            <SecondImage src={pic1} />
            <P>

            <p>Kofi Kingston gose sky with a massive ...</p>

            <p>527k views</p>

            </P>
            
        </Second>
      
    </Container>
  )
}

export default Likedvideos
