import React from 'react'
import styled from "@emotion/styled"
import pic from "../../assets/hqdefault.jpg"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const First = styled.div`
   display: flex;
   align-items: start;
   padding-top: 20px;
   padding: 30px;
   flex-direction: column;
   height: 900px;
    width: 750px;
    border-radius: 20px;
    background: linear-gradient(
		90deg,
		rgba(0, 0, 0, 0.9640231092436975) 31%,
		rgba(26, 26, 25, 0.2049194677871149) 100%,
		rgba(255, 255, 255, 0) 100%
	);
`

const WriteUp = styled.div`
  color: white;
  h2{
    font-size: 40px;
  }
  h4{
    font-size: 20px;
  }
  p{
    font-size: 20px;
  }
`

const FirstImage = styled.img`
  width: 560px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 20px;
`

const Watchlater :React.FC= () => {
  return (
    <Container>
      <First>
        <FirstImage src={pic} />
        <WriteUp>
        <h2>Watch later</h2>

<h4>ikechukwu umezuruike</h4>

<p>1 video No view last updated on jun 29, 2023</p>


        </WriteUp>

      </First>
      
    </Container>
  )
}

export default Watchlater
