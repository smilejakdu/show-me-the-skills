import React from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import styled from "styled-components";

const Body = styled.div`
  margin-top: 10px;
  font-size: 28px;
  width: 100%;
`;

const BodyCenter = styled.div`
  margin: 0 auto;
  font-size: 28px;
  width: 60%;
`;

const MentoringPage = () => {
  return (
    <AppLayout>
      <Body>
        <BodyCenter>Mentoring page</BodyCenter>
      </Body>
    </AppLayout>
  );
};

export default MentoringPage;
