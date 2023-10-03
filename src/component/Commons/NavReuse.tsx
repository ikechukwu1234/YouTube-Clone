import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const IconHold = styled.div`
	display: flex;
	font-size: 17px;
	gap: 10px;
	cursor: pointer;
`;
const Hold = styled.div`
	margin-top: 20px;
	margin-left: 40px;
`;
const Span = styled.div``;

interface Iprops {
	text: string;
	icon: any;
	linkTo: string;
}

const NavReuse: React.FC<Iprops> = ({ text, icon, linkTo }) => {
	return (
		<Hold>
			<NavLink to={linkTo} style={{ color: "white", textDecoration: "none" }}>
				<IconHold>
					{icon}
					<Span>{text}</Span>
				</IconHold>
			</NavLink>
		</Hold>
	);
};

export default NavReuse;
