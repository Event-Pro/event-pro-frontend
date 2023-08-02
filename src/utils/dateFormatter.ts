const dateFull = (dateTime: string) => {
  let date = new Date(dateTime);
  const formattedFullDateTime = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date);
  return formattedFullDateTime;
};

const partialDate = (dateTime: string) => {
  let date = new Date(dateTime);
  return date.toISOString().slice(0, 10);
};

const partialTime = (dateTime: string) => {
  let date = new Date(dateTime);
  let formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date);
  return formattedTime;
};

export { dateFull, partialDate, partialTime };
