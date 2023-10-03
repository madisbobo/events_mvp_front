export const formatDate = (dateTime: string) => {
  const date = new Date(dateTime);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${day}.${month}.${date.getFullYear()}`;
};

export const formatTime = (dateTime: string) => {
  const date = new Date(dateTime);
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};