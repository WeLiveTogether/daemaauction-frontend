import { useLayoutEffect, useState } from "react";

interface PropsType {
  to: Date;
  interval: number;
}

const Timer = ({ to, interval }: PropsType): JSX.Element => {
  const [timeString, setTimeString] = useState<string>();

  const dateToString = (date: Date) => {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const hourString = hour > 0 ? `${hour}시 ` : "";
    const minuteString = minute > 0 ? `${minute}분 ` : "";
    const secondString = second > 0 ? `${second}초` : "";

    return `${hourString}${minuteString}${secondString}`;
  };

  useLayoutEffect(() => {
    let timeout;
    (timeout = () => {
      console.log(to);

      const diff = new Date(new Date(to).getTime() - new Date().getTime());
      console.log(diff);

      setTimeString(dateToString(diff));
    })();

    const iv = setInterval(timeout, interval);

    return () => {
      clearInterval(iv);
    };
  }, [to, interval]);

  return <div>{timeString}</div>;
};

export default Timer;
