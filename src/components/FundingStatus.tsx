import React from 'react'

const FundingStatus = () => {
  const totalNeeded = 3000000 // Update with actual amount needed
  const raised = 0 // Update this as funds are raised

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-4">Funding Status</h2>
      <div className="mb-4">
        <div className="text-3xl font-bold text-green-600">£{raised.toLocaleString()}</div>
        <div className="text-gray-600">raised of £{totalNeeded.toLocaleString()} goal</div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-green-600 h-2.5 rounded-full" 
          style={{ width: `${(raised/totalNeeded * 100)}%` }}
        ></div>
      </div>
    </div>
  )
}

export default FundingStatus
