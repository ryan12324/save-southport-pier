import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-700 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Save Southport Pier</h1>
          <nav className="mt-4">
            <a href="/" className="mr-4 hover:text-blue-200">Home</a>
            <a href="/history" className="mr-4 hover:text-blue-200">History</a>
            <a href="/project-plan" className="mr-4 hover:text-blue-200">Project Plan</a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Save Southport Pier Campaign</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
