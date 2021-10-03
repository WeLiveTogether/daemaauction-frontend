import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import {
  MainContainer,
  RegisterContainer,
  HotContainer
} from '../container'

const MainRouter: FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/login" component={RegisterContainer} />
        <Route exact path="/hot" component={HotContainer} />
      </Switch>
    </>
  );
};

export default MainRouter;
