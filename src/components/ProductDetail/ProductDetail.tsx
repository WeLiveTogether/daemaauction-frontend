import * as S from "./styles";
import defaultImg from "../../assets/images/testItem.svg";
import Slider from "../Slider/Slider";

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
      <S.TitleContainer>
        <S.TitleInner>
          <S.Title>삼성노트북 I7 15.6인치 게임용노트북 사무용노트북</S.Title>
          <S.Gray>전자기기</S.Gray>
        </S.TitleInner>
        <S.Gray>김진근</S.Gray>
      </S.TitleContainer>
    </S.Container>
  );
};

export default ProductDetail;
