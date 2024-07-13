import React from "react";
const SmallCard = () => {
  return (
    <div className="w-[200px] h-[150px] bg-gray-500 rounded-2xl z-30">
      <img src="" alt="" />
    </div>
  );
};
const BigCard = () => {
  return (
    <div className="w-[380px] h-[150px] bg-gray-500 rounded-2xl z-30">
      <img src="" alt="" />
    </div>
  );
};
const MarketCards = () => {
  return (
    <div className="mx-28 my-10 flex flex-wrap gap-10 ">
      <BigCard />
      <SmallCard /> <SmallCard />
      <BigCard />
      <SmallCard />
      <BigCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard /> <BigCard />
      <BigCard />
    </div>
  );
};

export default MarketCards;
