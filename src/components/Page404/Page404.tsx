import { useLayoutEffect } from "react";
import { useHistory } from "react-router";

const Page404 = (): JSX.Element => {
  const { push } = useHistory();
  useLayoutEffect(() => {
    push("/");
  }, []);

  return <div>404</div>;
};

export default Page404;
