import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import {
  MainContainer,
  RegisterContainer,
  HotContainer,
  MyPageContainer,
} from '../container'

const MainRouter: FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/login" component={RegisterContainer} />
        <Route exact path="/hot" component={HotContainer} />
        <Route exact path="/mypage" component={MyPageContainer} />
      </Switch>
    </>
  );
};

export default MainRouter;
