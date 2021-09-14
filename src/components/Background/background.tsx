import * as S from './styles'

const Background = (): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.LeftTopYellow/>
        <S.LeftTopGreen/>
        <S.RightTopGreen/>
        <S.RightTopYellow/>
        <S.GreenPolygon/>
        <S.YellowHalf/>
      </S.Container>
    </>
  )
}

export default Background;