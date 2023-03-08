export const dec = () => ({ type: "DEC" });
export const inc = () => ({ type: "INC" });
export const rnd = () => {
  const payload = Math.floor(Math.random() * 10);
  return { type: "RND", payload };
};
export const asyncINC = () => (disparch) =>
  setTimeout(() => disparch({ type: "INC" }), 3000);
