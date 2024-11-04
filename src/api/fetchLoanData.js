const BASE_URL = "http://localhost:5000/bookmarks";

export const fetchLoanModalDetailsData = async (loanId) => {
  const response = await fetch("https://dummyjson.com/c/b156-7782-4aa6-9fa1/RESOURCE/?delay=3000");
  if (!response.ok) throw new Error("Failed to fetch bookmarks");
  return await response.json();
};
