import React, { useState } from "react";
import Contents from "../components/StartContentsTitle";
import Slogan from "../components/Slogan";
import ListBox from "../components/common/listbox/ListBox";
import Stacs from "../components/stac/Stacs";
import Projects from "../components/project/Projects";
import Link from "../components/link/Link";
import Footer from "../components/Footer/Footer";

function App() {
  const [sloganHeight, setSloganHeight] = useState<number>(0);
  return (
    <>
      <Slogan setSloganHeight={setSloganHeight} />
      <Contents
        title="안녕하세요👋 성장하는 개발자 배경민입니다."
        context="현재 대구소프트웨어마이스터고에 재학중이며 프론트엔드 개발자를 꿈꾸고 있습니다."
      />
      <Stacs />
      <ListBox index={0} />
      <Projects />
      <ListBox index={1} />
      <Link />
      <p>실패를 두려워하지 않는 개발자</p>
      <p>저의 포트폴리오를 봐주셔서 감사합니다.</p>
      <Footer />
    </>
  );
}

export default App;
