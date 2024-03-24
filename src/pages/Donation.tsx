import DonationGrid from "@/components/DonationGrid";
import DonationGrids from "@/components/DonationGrids";
import { TDonation } from "@/types";
import { getDonations } from "@/utils/LocalStorage";
import { useEffect, useState } from "react";

export default function Donation() {
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    const donationsList = getDonations();
    setDonations(donationsList);
  }, []);
  return (
    <div>
      <DonationGrids>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          {donations.map((item: TDonation) => (
            <DonationGrid key={item.id} item={item} />
          ))}
        </div>
      </DonationGrids>
    </div>
  );
}
