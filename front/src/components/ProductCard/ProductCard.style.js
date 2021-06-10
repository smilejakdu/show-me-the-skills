import styled from "styled-components";
import palette from "../../utils/palette";
import { IoEllipseSharp } from "react-icons/io5";

export const CardBorder = styled.div`
	width: 35%;
	border:1px solid ${palette.gray[3]};
	border-bottom:1px solid ${palette.gray[6]};
	box-shadow: 10px;
	border-radius:5px;

	img {
		height: auto;
		max-width: 100%;
	}

	&:hover{
		cursor: pointer;
	}
`
export const CardTitle = styled.p`
  font-size: 14px;
`;

export const CardContent = styled.p`
	font-size: 20px;
`;

export const CardBottomBorder = styled.div`
	font-size:15px;

	.register {
		font-style: bolder;
	}
`;