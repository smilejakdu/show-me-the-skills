import styled from "styled-components";
import palette from "../../utils/palette"
import { Navbar, Container, Nav } from "react-bootstrap";


const NavbarBrandCustom = styled.a`
  color: none;
  text-decoration: none;
  color: ${palette.green[1]};
  font-size: 20px;

  &:hover {
    color:none;
    text-decoration: underline;
    color: ${palette.green[1]};
  }
`;

const NavLinkCustom = styled.a`
    text-decoration: none;
    margin-right: 20px;
    color: ${palette.base_color[2]};

    &:hover {
      cursor: pointer;
      text-decoration: underline;
      color: ${palette.base_color[2]};
    }
`;


export { NavLinkCustom, NavbarBrandCustom };