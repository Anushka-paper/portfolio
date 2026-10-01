import { useEffect, useState } from "react";
import dayjs from "dayjs";

const Clock = () => {
  const [now, setNow] = useState(() => dayjs());

  useEffect(() => {
    const id = setInterval(() => setNow(dayjs()), 1000);
    return () => clearInterval(id);
  }, []);

  return <time>{now.format("ddd MMM D h:mm A")}</time>;
};

export default Clock;
