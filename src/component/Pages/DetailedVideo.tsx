import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { VideoDetail } from "../utils/ApiCalls"

// import ReactPlayer from "react-player";


const Container = styled.div`
	margin-top: 100px;
`;
const VDeo = styled.iframe`
	height: 400px;
	width: 80%;
	background-color: white;
	border-radius: 10px;
`;



const Descs = styled.div``

const UserHold = styled.div`
	display: flex;
`;
const User = styled.div`
	height: 50px;
	width: 50px;
	background-color: red;
	border-radius: 50%;
	margin-right: 10px;
`;
const UName = styled.div``;

const DetailedVideo :React.FC= () => {
	const [VideoData, setVideoData] = useState<any>();
	

	const { id } = useParams();
	// console.log(id);

	const RetrieveDetails = async () => {
		await VideoDetail(id).then((res) => {
			setVideoData(res?.videoDetails);
		});
	};

	useEffect(() => {
		RetrieveDetails();
	}, []);

    // const  FetchComments = async () =>{
	// 	await VideoComment(id).then((res) =>{
	// 		console.log("amara", res ?.comment);
	// 		setVideoComment(res?.comment)
	// 	});
	// };
	// useEffect(()=>{
	// 	FetchComments();
	// }, []);

	return (
		<Container>
			<VDeo src={`https://www.youtube.com/embed/${VideoData?.videoId}`} />
			<h2>{VideoData?.title}</h2>
			<h2>dfhgkf</h2>
			<UserHold>
				<User />
				<UName>name</UName>
				<Descs>{VideoData?.shortDescription}</Descs>
				
			

				

			</UserHold>
	
		</Container>
	);
};

export default DetailedVideo;
