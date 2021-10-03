import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
const RegisterContainer = React.lazy(() => import('../container/Register'))
const MainContainer = React.lazy(() => import('../container/Main'))

const MainRouter: FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainContainer}/>
        <Route exact path="/login" component={RegisterContainer}/>
      </Switch>
    </>
  );
};

export default MainRouter;
