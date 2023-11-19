import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: [
    { duration: "12s", target: 150 },
    { duration: "56s", target: 150 },
    { duration: "12s", target: 0 },
  ],
};

export default () => {
  const urlRes = http.get("http://192.168.122.18/");
  sleep(1);
};
