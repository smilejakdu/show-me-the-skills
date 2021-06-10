import styled from "styled-components";
import palette from "../../utils/palette";

export const HeaderBody = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const CategoryLink = styled.div`
  width: 60%;
  display: flex;
  margin: 0 auto;
  z-index: 1;
  justify-content: space-between;
  background-color: white;
  overflow-x: hidden;
`;

export const CategoryRouterItem = styled.div`
  padding: 6px 8px 6px 16px;
  margin-right: 3px;
  font-size: 18px;
  color: ${(p) => (p.active ? `${palette.base_color[2]}` : `${palette.gray[6]}`)};

  &:hover {
    color: ${palette.base_color[2]};
    cursor: pointer;
  }

  @media (max-width: 850px) {
    font-size: 18px;
  }
`;
