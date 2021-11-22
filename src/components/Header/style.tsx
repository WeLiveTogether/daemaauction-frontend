import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { color } from "../../styles/color";
export const Header = styled.div`
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  padding: 0 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  * {
    vertical-align: middle;
    color: ${color.black};
    text-decoration: none;
  }
  & img {
    margin-right: 10px;
  }
  nav {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const Logo = styled(Link)`
  font-size: 20px;
  font-weight: 600;
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
export const Chatting = styled(Link)`
  & span {
    margin-right: 15px;
  }
`;

export const NavWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  & {
    z-index: 2;
  }
`;
export const NavItem = styled.div`
  line-height: 65px;
  text-align: center;
  width: 120px;
  &:hover .navItem {
    display: block;
  }
  .navItemTitle {
    display: flex;
    justify-content: center;
  }
`;
export const NavItemInner = styled.div`
  background-color: ${color.background};
  display: none;
  height: 40px;
  line-height: 40px;
  :hover {
    background-color: ${color.green};
    cursor: pointer;
    color: ${color.white};
  }
`;
export const LogoutBtn = styled.button`
  width: 90px;
  height: 30px;
  border: 1px solid ${color.black};
  background: none;
  border-radius: 20px;
  :hover {
    cursor: pointer;
  }
`;
export const UserInfo = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
