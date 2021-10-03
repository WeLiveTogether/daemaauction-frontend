import styled from "@emotion/styled";

export const Header = styled.div`
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  padding: 0 2%;
  background-color: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    width: 657px;
    display: flex;
    justify-content: space-around;
  }
  * {
    vertical-align: middle;
  }
  & img {
    margin-right: 10px;
  }
`;
export const ProfileCircle = styled.div`
  width: 36px;
  height: 36px;
  background-color: #c8d6e5;
  border-radius: 50%;
  margin-right: 10px;
`;
export const MyProfile = styled.div`
  display: flex;
  align-items: center;
  & span {
    height: 20px;
  }
`;
