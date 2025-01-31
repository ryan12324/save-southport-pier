import React, { useState } from 'react'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add newsletter signup logic here
    console.log('Newsletter signup:', email)
  }

  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
      <p className="mb-4">Sign up for updates on our campaign to save Southport Pier</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsletterSignup
