import moment from "moment";

export function formatDate(timestamp: number) {
  return moment.unix(timestamp).format("DD/MM/YYYY");
}
