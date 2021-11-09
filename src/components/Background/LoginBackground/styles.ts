import styled from "@emotion/styled";
import { leftGroup, rightHalf, rightPolygon } from '../../../assets/index'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
`

export const LeftGroup = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) scale(0.9);
  width: 841px;
  height: 965px;
  background-image: url(${leftGroup});
`

export const RightHalf = styled.div`
  position: absolute;
  bottom: 0;
  right: 5vw;
  transform-origin: bottom;
  transform: scale(0.9);
  width: 302px;
  height: 195px;
  background-image: url(${rightHalf});
`

export const RightPolygon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: scale(0.9);
  width: 434px;
  height: 434px;
  background-image: url(${rightPolygon});
  `