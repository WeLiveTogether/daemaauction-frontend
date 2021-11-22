import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";

const LoginSuccess = () => {
  const query = new URLSearchParams(useLocation().search);
  const { push } = useHistory();

  const addMinutes = (date: Date, minutes: number) => {
    date.setMinutes(date.getMinutes() + minutes);
    return date;
  };

  useEffect(() => {
    const token = query.get("token");
    if (token) {
      localStorage.setItem("expire_at", addMinutes(new Date(), 30).toString());
      localStorage.setItem("access_token", token);

      push("/");
    } else {
      localStorage.removeItem("expire_at");
      localStorage.removeItem("access_token");
      push("/login");
      alert("로그인 실패");
    }
  }, []);

  return <div></div>;
};

export default LoginSuccess;
