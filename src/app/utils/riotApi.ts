export const getChampionRotation = async () => {
  const res = await fetch("api/rotation");
  return res;
};
