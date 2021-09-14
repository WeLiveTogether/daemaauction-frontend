import React,  { FC, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
const RegisterContainer = React.lazy(() => import('../container/Register'))

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Switch>
        <Route exact path="/" component={RegisterContainer}/>
      </Switch>
    </Suspense>
  );
};

export default MainRouter;