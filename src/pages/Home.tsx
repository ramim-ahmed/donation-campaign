import DonationGrid from "@/components/DonationGrid";
import DonationGrids from "@/components/DonationGrids";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mt-20">
        <DonationGrids>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
            <DonationGrid />
            <DonationGrid />
            <DonationGrid />
            <DonationGrid />
          </div>
        </DonationGrids>
      </div>
    </>
  );
}
