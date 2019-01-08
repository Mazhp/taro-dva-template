import Request from "../utils/request";

export function demo(data) {
  return Request({ url: "url", method: "POST", data });
}
