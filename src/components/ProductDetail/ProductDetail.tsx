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
    </S.Container>
  );
};

export default ProductDetail;
