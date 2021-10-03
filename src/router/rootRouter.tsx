import React, { Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";
const Mainroute = React.lazy(() => import('./mainRouter'));

const RootRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>로딩중...</div>}>
        <Mainroute/>
      </Suspense>
    </BrowserRouter>
  );
};

export default RootRouter;
