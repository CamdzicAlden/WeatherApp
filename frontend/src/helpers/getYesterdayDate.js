//Helper function for getting yesterday date
export default function getYesterdayDate() {
  const yesterday = new Date();
  //Getting yesterday date
  yesterday.setDate(yesterday.getDate() - 1);

  //Converting date to yyyy-mm-dd format
  const yyyy = yesterday.getFullYear();
  const mm = String(yesterday.getMonth() + 1).padStart(2, "0");
  const dd = String(yesterday.getDate()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
}
