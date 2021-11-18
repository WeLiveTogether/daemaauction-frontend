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
    const minuteString = `${minute.toString().padStart(2, "0")}분 `;
    const secondString = `${second.toString().padStart(2, "0")}초`;

    return `${hourString}${minuteString}${secondString}`;
  };

  useLayoutEffect(() => {
    let timeout;
    (timeout = () => {
      const diff = new Date(new Date(to).getTime() - new Date().getTime());
      console.log(new Date(to));

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
