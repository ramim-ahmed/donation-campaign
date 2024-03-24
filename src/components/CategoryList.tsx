import { TDonation } from "@/types";
import { Link } from "react-router-dom";
type TDonationGridProps = {
  item: TDonation;
};
export default function CategoryList({ item }: TDonationGridProps) {
  const { id, picture, title, card_bg, category, color, category_bg } = item;
  return (
    <Link
      to={`/donation-details/${id}`}
      style={{ backgroundColor: `${card_bg}` }}
    >
      <div>
        <img
          src={picture}
          alt=""
          className="w-full h-[194px] object-cover rounded-t"
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
            className={`text-xl font-semibold mt-1`}
          >
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
