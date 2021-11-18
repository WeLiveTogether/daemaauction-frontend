import * as S from "./styles";
import defaultImg from "../../assets/images/testItem.svg";
import Slider from "../Slider/Slider";
import User from "../../assets/icons/count.svg";
import Time from "../../assets/icons/time.svg";
import { color } from "../../styles/color";

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
            <img src={User} alt="user" />
            <div>16명</div>
          </S.UserContainer>
        </S.DetailContainer>
        <S.TimeContainer>
          <img src={Time} alt="time" />
          <div>11분 59초</div>
        </S.TimeContainer>
      </S.HeaderContainer>
      <S.Content>
        삼성노트북 I7 2세대 2.20GHz 15.6인치
        <br />
        인텔hd 그래픽3000,지포스 gt 540m
        <br />
        화질 좋고요.
        <br />
        램8기가
        <br />
        삼성 860 evo 256SSD
        <br />
        13년도 구입
        <br />
        사용적어 완전깨끗해요.
        <br />
        내외관A급
        <br />
        가격대비 성능 및 외관자부합니다.
        <br />
        <br />
        윈도우10,오피스2020설치되있으며
        <br />
        게임 및 사무용으로 손색없어요.
        <br />
        부팅 엄청빠르고 모든기능 잘되고
        <br />
        배터리상태좋고 빠릿빠릿해요.
        <br />
        <br />
        오락실1000가지게임 넣어놨어요.
        <br />
        pc게임을 안해서 어떤게임까지
        <br />
        돌아가는줄은 몰라요.
        <br />
        사양보세요.
        <br />
        <br />
        구성품은 본체,정품아답터,
        <br />
        정품가방,로지텍 게이밍 무선마우스
        <br />
        사용적어 모든 상태좋아요.
        <br />
        연락주세요.
        <br />
      </S.Content>
      <S.ButtonContainer>
        <S.Button color={color.green}>260,000₩에 경매 참여</S.Button>
        <S.Button color={color.yellow}>350,000₩에 즉시 구매</S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default ProductDetail;
