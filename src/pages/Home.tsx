import CategoryList from "@/components/CategoryList";
import CategoryLists from "@/components/CategoryLists";
import Hero from "@/components/Hero";
import { TDonation } from "@/types";
import { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { HashLoader } from "react-spinners";

export default function Home() {
  const donationLists = useLoaderData();
  const navigation = useNavigation();
  const [categoryInput, setCategoryInput] = useState<string>("");
  const handleSearchByCategory = (category: string) => {
    setCategoryInput(category);
  };
  if (navigation.state === "loading") {
    return (
      <div className="flex justify-center min-h-[500px] items-center">
        <HashLoader color="#36d7b7" size={100} />
      </div>
    );
  }
  return (
    <>
      <Hero handleSearchByCategory={handleSearchByCategory} />
      <div className="my-6">
        <CategoryLists>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
            {categoryInput.length
              ? donationLists
                  ?.filter(
                    (item: TDonation) =>
                      item.category.toLocaleLowerCase() ===
                      categoryInput.toLocaleLowerCase()
                  )
                  ?.map((item: TDonation) => (
                    <CategoryList key={item.id} item={item} />
                  ))
              : donationLists?.map((item: TDonation) => (
                  <CategoryList key={item.id} item={item} />
                ))}
          </div>
        </CategoryLists>
      </div>
    </>
  );
}
