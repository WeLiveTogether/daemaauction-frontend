import styled from "@emotion/styled";

export const Container = styled.div<{ x: number }>`
  display: flex;
  position: absolute;
  transform: translateX(${(props) => props.x}px);
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  column-gap: 30px;
`;

export const HiddenContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 642px;
`;

export const ChevronContainer = styled.div`
  width: 100%;
  top: 50%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  transform: translateY(-50%);
`;

export const PrevChevron = styled.img`
  position: relative;
  transform: translateX(-48px);
`;

export const NextChevron = styled.img`
  position: relative;
  transform: translateX(48px);
`;
