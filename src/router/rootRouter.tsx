import React, { Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";
const MainRouter = React.lazy(() => import("./mainRouter"));

const RootRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>로딩중...</div>}>
        <MainRouter />
      </Suspense>
    </BrowserRouter>
  );
};

export default RootRouter;
