import Link from 'next/link'
import AuthButton from './AuthButton'

export default function Header() {
  return (
    <>
      {/* Newsletter Banner */}
      <div className="bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
            <span className="text-sm text-gray-300">Subscribe to Vapi&apos;s new newsletter and stay ahead of all the new developments in the Voice AI space.</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
          <button className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold">VAPI</div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/workflows" className="text-gray-300 hover:text-white text-sm font-medium">WORKFLOWS</Link>
                <Link href="/use-cases" className="text-gray-300 hover:text-white text-sm font-medium">USE CASES</Link>
                <Link href="/pricing" className="text-gray-300 hover:text-white text-sm font-medium">PRICING</Link>
                <Link href="/docs" className="text-gray-300 hover:text-white text-sm font-medium">DOCS</Link>
                <div className="flex items-center space-x-1">
                  <Link href="/resources" className="text-gray-300 hover:text-white text-sm font-medium">RESOURCES</Link>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
                <Link href="/careers" className="text-gray-300 hover:text-white text-sm font-medium">CAREERS</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <AuthButton />
              <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-full text-sm font-medium">
                OPEN DASHBOARD
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
