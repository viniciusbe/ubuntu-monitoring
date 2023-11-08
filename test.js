import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: [
    { duration: "20s", target: 50 },
    { duration: "40s", target: 50 },
    { duration: "20s", target: 0 },
  ],
};

export default () => {
  const urlRes = http.get("http://192.168.122.22/");
  sleep(1);
};
