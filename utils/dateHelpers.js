export const getCurrentUnixStamp = () => {
  return new Date().getTime();
};

export const getDateFromUnixStamp = (stamp) => {
  return new Date(stamp);
};
