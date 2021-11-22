import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import Page404 from "../components/Page404/Page404";
import {
  MainContainer,
  MyPageContainer,
  HotContainer,
  LoginContainer,
  RecentContaier,
  ChatContainer,
  LoginSuccessContainer,
  WritingContainer,
  ProductDetailContainer,
  CategoryContainer,
} from "../container";

const MainRouter: FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/daemaauction-frontend/" component={MainContainer} />
        <Route
          exact
          path="/daemaauction-frontend/hot"
          component={HotContainer}
        />
        <Route
          exact
          path="/daemaauction-frontend/mypage"
          component={MyPageContainer}
        />
        <Route
          exact
          path="/daemaauction-frontend/login"
          component={LoginContainer}
        />
        <Route
          exact
          path="/daemaauction-frontend/recent"
          component={RecentContaier}
        />
        <Route
          exact
          path="/daemaauction-frontend/chat"
          component={ChatContainer}
        />
        <Route
          exact
          path="/daemaauction-frontend/login/success"
          component={LoginSuccessContainer}
        />
        <Route
          exact
          path="/daemaauction-frontend/writing"
          component={WritingContainer}
        />
        <Route
          exact
          path="/daemaauction-frontend/product/:id"
          component={ProductDetailContainer}
        />
        <Route
          exact
          path="/daemaauction-frontend/category"
          component={CategoryContainer}
        />
        <Route component={Page404} />
      </Switch>
    </>
  );
};

export default MainRouter;
