import React from "react";

interface WalletCardProps {
  name: string;
  address: string;
}

const WalletCard: React.FC<WalletCardProps> = ({ name, address }) => {
  return (
    <div className="flex items-center bg-gray-100 p-4 border border-gray-300 rounded-lg max-w-xs shadow-md">

      <h2>{name}</h2>
      <p>{address}</p>
    </div>
  );
};

export default WalletCard;
