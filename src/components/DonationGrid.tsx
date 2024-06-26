import { TDonation } from "@/types";
import { Link } from "react-router-dom";
type TDonationGridProps = {
  item: TDonation;
};
export default function DonationGrid({ item }: TDonationGridProps) {
  const { id, picture, title, card_bg, category, color, category_bg } = item;
  return (
    <Link
      to={`/donation-details/${id}`}
      style={{ backgroundColor: `${card_bg}` }}
      className="lg:flex items-center"
    >
      <div>
        <img
          src={picture}
          alt=""
          className=" lg:w-72 w-full h-[194px] object-cover"
        />
      </div>
      <div className="p-4">
        <div>
          <button
            style={{ backgroundColor: `${category_bg}`, color: `${color}` }}
            type="button"
            className={`px-2 text-sm font-medium rounded`}
          >
            {category}
          </button>
          <h3
            style={{ color: `${color}` }}
            className={`text-xl font-semibold mt-3`}
          >
            {title}
          </h3>
        </div>
        <div className="mt-3">
          <p style={{ color: `${color}` }} className="text-base font-semibold">
            $290.00
          </p>
          <button
            style={{ backgroundColor: `${color}` }}
            className={`mt-3 px-5 py-1 rounded text-white text-lg font-semibold`}
          >
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}
