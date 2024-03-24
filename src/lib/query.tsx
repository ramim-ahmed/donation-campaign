export const fetchDonationLists = async () => {
  const res = await fetch(
    "https://mock-json-server-apis.vercel.app/donationsLists"
  );
  const data = await res.json();
  return data;
};

export const fetchDontionDetails = async (id: string) => {
  const res = await fetch(
    `https://mock-json-server-apis.vercel.app/donationsLists/${id}`
  );
  const data = await res.json();
  return data;
};
