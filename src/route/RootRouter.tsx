import { BrowserRouter } from "react-router-dom";
import Mainroute from './MainRouter';

const RootRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Mainroute/>
    </BrowserRouter>
  );
};

export default RootRouter;