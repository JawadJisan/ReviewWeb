export const getBaseUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://review-web-backend.vercel.app/"
  );
};
// export const getBaseUrl = (): string => {
//   return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1";
// };
