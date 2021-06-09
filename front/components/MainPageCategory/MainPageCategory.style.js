import styled from "styled-components";
import palette from "../../utils/palette";
import Link from "next/link";

const HeaderBody = styled.div`
  width: 100%;
`;

const CategoryLink = styled.div`
  width: 60%;
  display: flex;
  margin: 0 auto;
  z-index: 1;
  justify-content: space-between;
  background-color: white;
  overflow-x: hidden;
`;

const CategoryLinkItem = styled(Link)`
  padding: 6px 8px 6px 16px;
  margin-right: 3px;
  text-decoration: none;
  font-size: 18px;
  color: black;
  display: block;
  &.hover {
    border-bottom: 3px solid ${palette.base_color[2]};
  }
  &.active {
    color: black;
    font-weight: bold;
    border-bottom: 3px solid ${palette.base_color[2]};
  }
  @media (max-width: 850px) {
    font-size: 18px;
  }
`;

export { CategoryLinkItem, CategoryLink, HeaderBody };