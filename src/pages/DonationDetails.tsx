/* eslint-disable @typescript-eslint/no-explicit-any */

import { TDonation } from "@/types";
import { saveDonation } from "@/utils/LocalStorage";
import { useLoaderData } from "react-router-dom";

export default function DonationDetails() {
  const item: any = useLoaderData();
  const { picture, price, description, title, color } = item;
  const handleLocalStorageSave = (item: TDonation) => {
    saveDonation(item);
  };
  return (
    <div className="max-w-[1320px] mx-auto px-3 py-3">
      <div className="relative">
        <img className="w-full h-[500px] object-cover" src={picture} alt="" />
        <div className="absolute bottom-0 bg-[#0B0B0B80] w-full py-5">
          <button
            onClick={() => handleLocalStorageSave(item)}
            style={{ backgroundColor: `${color}` }}
            className="text-white px-9 py-3 ml-8 rounded font-semibold text-xl"
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-4xl font-bold">{title}</h3>
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
}
