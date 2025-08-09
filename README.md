# VAPI Clone - Voice AI Agents for Developers

A Next.js 15 application that clones the VAPI interface with full authentication system using Supabase.

## Features

- 🎤 **Voice AI Interface**: VAPI-style dark theme with audio visualizer
- 🔐 **Authentication**: Complete Supabase auth with SSR support
- 🛡️ **Protected Routes**: Middleware-based route protection
- 📱 **Responsive Design**: Mobile-friendly with Tailwind CSS
- ⚡ **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/majidsafwaan2/vapi-clone.git
   cd vapi-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

### Environment Variables for Production

For deployment platforms (Vercel, Netlify, etc.), set these environment variables:

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key

### Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from Settings > API
3. Update your `.env.local` or deployment environment variables

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── dashboard/         # Protected dashboard page
│   ├── profile/           # User profile page
│   ├── settings/          # Settings page
│   └── layout.tsx         # Root layout with dark theme
├── components/            # Reusable components
│   ├── Header.tsx         # VAPI-style header with auth
│   ├── AuthButton.tsx     # Authentication button
│   └── AudioVisualizer.tsx # Voice interface visualizer
├── lib/                   # Utilities
│   ├── supabase.ts        # Browser Supabase client
│   └── supabase-server.ts # Server Supabase client
├── pages/                 # Pages Router for auth
│   └── auth/              # Authentication pages
└── middleware.ts          # Route protection
```

## Protected Routes

The following routes require authentication:
- `/` - Home page
- `/dashboard` - User dashboard
- `/profile` - User profile
- `/settings` - Account settings

## Authentication Flow

- **Sign Up**: Create new account with email/password
- **Sign In**: Login with existing credentials  
- **Password Reset**: Reset password via email
- **Route Protection**: Automatic redirects for unauthorized access

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Supabase Auth with SSR
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Ready for Vercel, Netlify, or any Node.js platform

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## License

MIT License - feel free to use this project for your own applications.