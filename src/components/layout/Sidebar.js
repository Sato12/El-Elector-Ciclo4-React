import React from "react";
import styled from "@emotion/styled";

const Sidebar = () => {
  return (
    <aside>
      <TitleSideBar>Candidatos y partidos</TitleSideBar>
    </aside>
  );
};

export default Sidebar;

const TitleSideBar = styled.h1`
  font-weight: 600;
  font-size: medium;
`;
