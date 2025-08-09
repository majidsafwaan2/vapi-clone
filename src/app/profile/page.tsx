import { createServerClient_ } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'

export default async function Profile() {
  const supabase = await createServerClient_()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gray-900 border border-gray-800 rounded-lg">
        <div className="px-6 py-4 border-b border-gray-800">
          <h1 className="text-2xl font-bold text-white">Profile</h1>
        </div>
        
        <div className="p-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <div className="text-white bg-gray-800 p-3 rounded-md">
                {session.user.email}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                User ID
              </label>
              <div className="text-white bg-gray-800 p-3 rounded-md font-mono text-sm">
                {session.user.id}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Account Created
              </label>
              <div className="text-white bg-gray-800 p-3 rounded-md">
                {new Date(session.user.created_at).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
