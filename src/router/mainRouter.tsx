import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import {
  MainContainer,
  HotContainer,
  LoginContainer
} from '../container'

const MainRouter: FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/hot" component={HotContainer} />
        <Route exact path="/login" component={LoginContainer}/>
      </Switch>
    </>
  );
};

export default MainRouter;
