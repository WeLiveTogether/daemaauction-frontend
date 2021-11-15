import styled from "@emotion/styled";

export const Container = styled.div<{ active: boolean }>`
  padding: 16px;
  background-color: ${(props) => (props.active ? "#1CD0A1" : "#FFFFFF")};
  box-sizing: border-box;
  width: 100%;
  border-radius: 5px;
  color: ${(props) => (props.active ? "#ffffff" : "#576574")};
  font-weight: 300;
  cursor: pointer;
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const TitleContainer = styled.div`
  display: flex;
  column-gap: 2px;
`;

export const Content = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  margin-top: 8px;
`;
