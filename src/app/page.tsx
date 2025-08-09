import { createServerClient_ } from '@/lib/supabase-server'
import Link from 'next/link'
import AudioVisualizer from '@/components/AudioVisualizer'

export default async function Home() {
  const supabase = await createServerClient_()
  const { data: { session } } = await supabase.auth.getSession()

  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-12 leading-tight">
            Voice AI agents<br />
            for developers
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            {session ? (
              <>
                <Link
                  href="/dashboard"
                  className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-full text-sm font-medium flex items-center space-x-2"
                >
                  <span>OPEN DASHBOARD</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
                <Link
                  href="/docs"
                  className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-full text-sm font-medium flex items-center space-x-2"
                >
                  <span>READ THE DOCS</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/auth/signup"
                  className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-full text-sm font-medium flex items-center space-x-2"
                >
                  <span>SIGN UP</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
                <Link
                  href="/docs"
                  className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-full text-sm font-medium flex items-center space-x-2"
                >
                  <span>READ THE DOCS</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </Link>
              </>
            )}
          </div>

          {/* Voice Interface */}
          <div className="mb-20">
            <div className="bg-gray-100 text-black px-8 py-4 rounded-full inline-flex items-center space-x-3 text-sm font-medium">
              <span>TALK TO VAPI</span>
              <div className="grid grid-cols-3 gap-1">
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Audio Visualizer */}
          <AudioVisualizer />

          {session && (
            <div className="mt-16">
              <p className="text-xl text-gray-300 mb-8">
                Welcome back, {session.user.email}!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Link 
                  href="/dashboard"
                  className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-gray-700 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Dashboard
                  </h3>
                  <p className="text-gray-400">
                    Access your main dashboard
                  </p>
                </Link>
                
                <Link 
                  href="/profile"
                  className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-gray-700 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Profile
                  </h3>
                  <p className="text-gray-400">
                    Manage your profile information
                  </p>
                </Link>
                
                <Link 
                  href="/settings"
                  className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-gray-700 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Settings
                  </h3>
                  <p className="text-gray-400">
                    Configure your account settings
                  </p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
