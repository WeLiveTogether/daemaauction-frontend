import RootRouter from "./route";
import { Global } from "@emotion/react";
import { reset } from "./styles/globalStyle";

const App = ():JSX.Element => {
  return (
    <>
      <Global styles={reset} />    
      <RootRouter />
    </>
  );
}

export default App;