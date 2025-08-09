import { createServerClient_ } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const supabase = await createServerClient_()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h1 className="text-3xl font-bold text-white mb-4">Dashboard</h1>
        <p className="text-gray-300 mb-6">
          Welcome back, {session.user.email}!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-900/20 border border-blue-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              Projects
            </h3>
            <p className="text-blue-300">Manage your projects</p>
          </div>
          
          <div className="bg-green-900/20 border border-green-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-green-400 mb-2">
              Analytics
            </h3>
            <p className="text-green-300">View your statistics</p>
          </div>
          
          <div className="bg-purple-900/20 border border-purple-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-400 mb-2">
              Settings
            </h3>
            <p className="text-purple-300">Configure your account</p>
          </div>
        </div>
      </div>
    </div>
  )
}
