import ContentsTitle from "../common/ContentsTitle";
import * as S from "../../styles/Project.style";
import ChartBox from "../common/chartbox/ChartBox";
import LinkValue from "./LinkValue.json";

const Link = () => {
  return (
    <S.MainNav>
      <ContentsTitle
        title="블로그 및 깃허브"
        context="저의 소중한 경험과 배움이 담겨있습니다."
      />
      <S.ChartWrap>
        {LinkValue.values.map((value, index) => {
          return (
            <ChartBox
              key={index}
              isLink={true}
              title={value.title}
              index={index}
              url={value.url}
            />
          );
        })}
      </S.ChartWrap>
    </S.MainNav>
  );
};

export default Link;
