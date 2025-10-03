'use client'
import React, { useState } from "react";
import { WalletButton } from "@vechain/dapp-kit-react";

const App: React.FC = () => {
  // State variables
  const [userAddress, setUserAddress] = useState("");
  const [subscriptionFeeInput, setSubscriptionFeeInput] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-800 space-y-8">
      <h1 className="text-3xl font-bold">Membership Contract Frontend</h1>
      <WalletButton/>

      {/* Subscribe */}
      <div className="p-4 bg-black rounded-xl shadow-md w-full max-w-md space-y-3">
        <h2 className="text-xl font-semibold">Subscribe</h2>
        <button className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
          Pay Subscription Fee
        </button>
      </div>

      {/* Check Subscription */}
      <div className="p-4 bg-black rounded-xl shadow-md w-full max-w-md space-y-3">
        <h2 className="text-xl font-semibold">Check Subscription</h2>
        <input
          type="text"
          placeholder="Enter User Address"
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Check Subscription
        </button>
      </div>

      {/* Update Subscription Fee (Owner) */}
      <div className="p-4 bg-black rounded-xl shadow-md w-full max-w-md space-y-3">
        <h2 className="text-xl font-semibold">Update Subscription Fee</h2>
        <input
          type="number"
          placeholder="New Fee (in Wei)"
          value={subscriptionFeeInput}
          onChange={(e) => setSubscriptionFeeInput(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button className="w-full p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          Update Fee
        </button>
      </div>

      {/* Withdraw Funds (Owner) */}
      <div className="p-4 bg-black rounded-xl shadow-md w-full max-w-md space-y-3">
        <h2 className="text-xl font-semibold">Withdraw Funds</h2>
        <button className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600">
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default App;
