import * as S from "./styles";
import defaultImg from "../../assets/images/testItem.svg";
import Slider from "../Slider/Slider";
import User from "../../assets/icons/count.svg";
import Time from "../../assets/icons/time.svg";

const ProductDetail = (): JSX.Element => {
  const imgList: JSX.Element[] = [
    <S.Image src={defaultImg} />,
    <S.Image src={defaultImg} />,
    <S.Image src={defaultImg} />,
    <S.Image src={defaultImg} />,
  ];

  return (
    <S.Container>
      <S.ImageContainer>
        <Slider items={imgList} />
      </S.ImageContainer>
      <S.HeaderContainer>
        <S.TitleContainer>
          <S.TitleInner>
            <S.Title>삼성노트북 I7 15.6인치 게임용노트북 사무용노트북</S.Title>
            <S.Gray>전자기기</S.Gray>
          </S.TitleInner>
          <S.Gray>김진근</S.Gray>
        </S.TitleContainer>
        <S.DetailContainer>
          <S.MoneyContainer>
            <S.NowMoney>현재가 : 250,000₩ &nbsp;</S.NowMoney>
            <S.GrayMid>/ 350,000₩</S.GrayMid>
          </S.MoneyContainer>
          <S.UserContainer>
            <img src={User} />
            <div>16명</div>
          </S.UserContainer>
        </S.DetailContainer>
        <S.TimeContainer>
          <img src={Time} />
          <div>11분 59초</div>
        </S.TimeContainer>
      </S.HeaderContainer>
    </S.Container>
  );
};

export default ProductDetail;
