import moment from "moment";

export function formatDate(timestamp: number) {
  return moment.unix(timestamp).format("MMMM DD, YYYY");
}
