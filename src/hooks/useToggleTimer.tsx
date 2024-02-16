import { useEffect } from "react";

export default function useToggleTimer(
  toggleTarget: boolean,
  setUseStateTime: any
) {
  useEffect(() => {
    let interval: any;
    if (toggleTarget) {
      interval = setInterval(() => {
        setUseStateTime((prevTime: any) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [toggleTarget]);
}
