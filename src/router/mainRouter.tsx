import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import {
  MainContainer,
  MyPageContainer,
  HotContainer,
  LoginContainer,
  RecentContaier,
  ChatContainer,
  LoginSuccessContainer,
  ProductDetailContainer,
} from "../container";

const MainRouter: FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/hot" component={HotContainer} />
        <Route exact path="/mypage" component={MyPageContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/recent" component={RecentContaier} />
        <Route exact path="/chat" component={ChatContainer} />
        <Route exact path="/login/success" component={LoginSuccessContainer} />
        <Route exact path="/product/:id" component={ProductDetailContainer} />
      </Switch>
    </>
  );
};

export default MainRouter;
