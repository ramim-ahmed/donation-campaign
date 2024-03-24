type TDonationProps = {
  children: React.ReactNode;
};
export default function CategoryLists({ children }: TDonationProps) {
  return <div className="max-w-[1320px] mx-auto px-3">{children}</div>;
}
