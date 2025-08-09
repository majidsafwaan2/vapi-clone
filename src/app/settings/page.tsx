import { createServerClient_ } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'

export default async function Settings() {
  const supabase = await createServerClient_()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gray-900 border border-gray-800 rounded-lg">
        <div className="px-6 py-4 border-b border-gray-800">
          <h1 className="text-2xl font-bold text-white">Settings</h1>
        </div>
        
        <div className="p-6">
          <div className="space-y-8">
            <div className="border-b border-gray-800 pb-6">
              <h3 className="text-lg font-medium text-white mb-4">
                Account Information
              </h3>
              <p className="text-gray-400 mb-4">
                Manage your account settings and preferences.
              </p>
              <div className="bg-gray-800 p-4 rounded-md">
                <p className="text-sm text-gray-300">
                  Email: {session.user.email}
                </p>
              </div>
            </div>
            
            <div className="border-b border-gray-800 pb-6">
              <h3 className="text-lg font-medium text-white mb-4">
                Security
              </h3>
              <p className="text-gray-400 mb-4">
                Manage your password and security settings.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-full text-sm font-medium">
                Change Password
              </button>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white mb-4">
                Danger Zone
              </h3>
              <p className="text-gray-400 mb-4">
                Permanently delete your account and all associated data.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
