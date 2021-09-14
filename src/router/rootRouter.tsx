import { BrowserRouter } from "react-router-dom";
import Mainroute from './mainRouter';

const RootRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Mainroute/>
    </BrowserRouter>
  );
};

export default RootRouter;