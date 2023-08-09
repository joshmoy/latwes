const options: Intl.DateTimeFormatOptions = {
  weekday: "short",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
};

export const dateFormatter = (date: Date | undefined) =>
  new Intl.DateTimeFormat(undefined, options).format(date);

export const daysDifference = (timeDifference: number) =>
  Math.floor(timeDifference / (1000 * 60 * 60 * 24));
