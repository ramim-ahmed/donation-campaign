/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";

/* eslint-disable prefer-const */
export const getDonations = () => {
  let donationsLists: never[] = [];
  const isDonation = localStorage.getItem("donations");
  if (isDonation) {
    return JSON.parse(isDonation);
  }
  return donationsLists;
};

export const saveDonation = (item: any) => {
  const donations = getDonations();
  const isExits = donations.find(
    (donation: { id: any }) => donation.id === item.id
  );
  if (isExits) {
    return toast.error("Already donated!!");
  }
  donations.push(item);
  localStorage.setItem("donations", JSON.stringify(donations));
  toast.success("Thanks for donated!!");
};
