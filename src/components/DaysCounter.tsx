import React from 'react'

const DaysCounter = () => {
  const closureDate = new Date('2023-07-24') // Update this to actual closure date
  const today = new Date()
  const diffTime = Math.abs(today.getTime() - closureDate.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return (
    <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-8">
      <div className="text-red-700">
        <span className="text-4xl font-bold">{diffDays}</span>
        <span className="text-xl ml-2">days since Southport Pier closed</span>
      </div>
    </div>
  )
}

export default DaysCounter
