import React from "react";
import Contents from "../components/StartContentsTitle";
import Slogan from "../components/Slogan";
import ListBox from "../components/common/ListBox";
import Stacs from "../components/stac/Stacs";

function App() {
  return (
    <>
      <Slogan />
      <Contents title="안녕하세요! 만나서 반가워요" context="프론트 잼있음" />
      <Stacs />
      <ListBox />
    </>
  );
}

export default App;
