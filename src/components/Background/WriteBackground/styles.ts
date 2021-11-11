import styled from "@emotion/styled";
import { leftTopGreen, leftTopYellow, rightTopGreen, rightTopYellow, rightMedium } from '../../../assets/index'

export const LeftTopGreen = styled.div`
  position: absolute;
  top: 294px;
  width: 168px;
  height: 232px;
  background-image: url(${leftTopGreen});
`

export const LeftTopYellow = styled.div`
  position: absolute;
  top: 382px;
  width: 256px;
  height: 510px;
  background-image: url(${leftTopYellow});
`

export const RightTopGreen = styled.div`
  position: absolute;
  top: 85px;
  right: 0px;
  width: 343px;
  height: 909px;
  background-image: url(${rightTopGreen});
`

export const RightTopYellow = styled.div`
  position: absolute;
  top: 631px;
  right: 0px;
  width: 176px;
  height: 176px;
  background-image: url(${rightTopYellow});
`

export const GreenPolygon = styled.div`
  position: absolute;
  top: 1287px;
  right: 0px;
  width: 268px;
  height: 66px;
  background-image: url(${rightMedium});
`