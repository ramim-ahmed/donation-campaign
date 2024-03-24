import { useState } from "react";
import heroBg from "../assets/hero-bg.png";
type THeroProps = {
  handleSearchByCategory: (category: string) => void;
};
export default function Hero({ handleSearchByCategory }: THeroProps) {
  const [inputText, setInputText] = useState<string>("");

  const handleSearch = () => {
    handleSearchByCategory(inputText);
  };

  return (
    <div className="min-h-[400px]">
      <div
        style={{ backgroundImage: `url(${heroBg})` }}
        className="object-cover flex justify-center items-center min-h-[400px]"
      >
        <div className="flex flex-col items-center">
          <div>
            <h1 className="lg:text-5xl md:text-3xl text-2xl text-[#0B0B0B] font-bold">
              I Grow By Helping People In Need
            </h1>
          </div>
          <div className="flex lg:mt-10 mt-6">
            <div>
              <input
                onChange={(e) => setInputText(e.target.value)}
                type="text"
                placeholder="search by category"
                className="px-2 py-2 border border-gray-200 rounded rounded-r-none outline-none"
              />
            </div>
            <div className="bg-[#FF444A] rounded-r">
              <button
                onClick={() => handleSearch()}
                className="px-6 py-2 text-white text-base font-semibold"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
