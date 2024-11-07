
export const fetchLoanModalDetailsData = async (loanId) => {
  const response = await fetch("https://dummyjson.com/c/56f0-b34b-4e96-aff7/RESOURCE/?delay=3000");
  if (!response.ok) throw new Error("Failed to fetch bookmarks");
  return await response.json();
};
