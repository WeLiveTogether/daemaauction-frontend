import styled from "@emotion/styled";
import { color } from "../../../styles/color";

export const InnerItemList = styled.div<{ display: string }>`
  margin-top: 6px;
  display: ${(props) => props.display};
  color: ${color.black};
`;

export const InnerItem = styled.div`
  padding: 4px 8px;
  background-color: ${color.white};
  color: ${color.black};
  display: flex;
  align-items: center;
  column-gap: 4px;
  :hover {
    div:first-child {
      background-color: ${color.white};
    }
    color: ${color.white};
    background-color: ${color.green};
  }
  :first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  :last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  background-color: ${color.black};
  border-radius: 50%;
`;

export const DotNone = styled.div`
  width: 4px;
  height: 4px;
  background-color: transparent !important;
  border-radius: 50%;
`;
