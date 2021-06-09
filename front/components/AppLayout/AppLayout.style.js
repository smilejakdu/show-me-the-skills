import styled from "styled-components";
import palette from "../../utils/palette"
import { Navbar, Container, Nav } from "react-bootstrap";


const NavbarBrandCustom = styled.a`
  color: none;
  color: ${palette.green[1]};
  font-size:20px;
  text-decoration: none;
`;

const NavLinkCustom = styled.a`
  color:none;
  text-decoration: none;
  padding: 10px;
  color: ${palette.base_color[2]};

  &:hover {
    text-decoration: underline;
    color: ${palette.base_color[2]};
  }
`;


export { NavLinkCustom, NavbarBrandCustom };