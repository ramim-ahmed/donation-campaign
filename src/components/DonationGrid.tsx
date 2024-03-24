import gridImg from "../assets/Rectangle 4287-1.png";
export default function DonationGrid() {
  return (
    <div className="bg-[#FF444A26] rounded">
      <div>
        <img
          src={gridImg}
          alt=""
          className="w-full h-[194px] object-cover rounded"
        />
      </div>
      <div className="ml-4 mt-4">
        <button
          type="button"
          className="bg-[#FF444A33] px-2 text-[#F87147] rounded"
        >
          Education
        </button>
        <h3 className="text-xl font-semibold text-[#F87147] mt-2">
          Good education
        </h3>
      </div>
    </div>
  );
}
