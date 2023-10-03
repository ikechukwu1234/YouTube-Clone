import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Button from "../Commons/Button"
import Card from "../Commons/Card"
import { SearchYoutubeVideo } from "../utils/ApiCalls";

const Container = styled.div`
	margin-left: 30px;
	overflow-x: hidden;
`;
const Hold = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
	padding: 30px;
`;
const Holder = styled.div`
	padding: 30px;
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
`;



const HomeScreen: React.FC = () => {
	const [SearchData, setSearchData] = useState([]);
	const FetchSearchData = async () => {
		await SearchYoutubeVideo().then((res) => {
			console.log("asdfghjkl",res.contents);
			setSearchData(res?.contents);
		});
	};

	useEffect(() => {
		FetchSearchData();
	}, []);

	return (
		<Container>
			<Hold>
				<Button bg="transparent" cl="black" title='All' />
				<Button bg="black" cl="white" title='Music' />
				<Button bg="black" cl="white" title='Gaming' />
				<Button bg="black" cl="white" title='Sketch Comedy' />
				<Button bg="black" cl="white" title='Trailers' />
				<Button bg="black" cl="white" title='History' />
				<Button bg="black" cl="white" title='Jenifa' />
				<Button bg="black" cl="white" title='Podcasts' />
			</Hold>

			<Holder>
				{SearchData?.map((props) => (
					<Card props={props} bdd='' />
				))}
			</Holder>

			<h1>homepage</h1>
		</Container>
	);
};

export default HomeScreen;
