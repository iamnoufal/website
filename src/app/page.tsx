import dynamic from 'next/dynamic'

// Lazy load heavy components to reduce initial bundle size and prevent server startup memory issues
const GreetingScreen = dynamic(() => import('@/components/GreetingScreen'), {
  ssr: false, // Client-side only to prevent server memory issues with animations
  loading: () => <div className="min-h-screen bg-black" /> // Minimal loading state
})

const NewHome = dynamic(() => import('@/components/Home'), {
  ssr: false, // Client-side only due to heavy animations and API calls
  loading: () => null
})

export default function Home() {
  return (
    <GreetingScreen>
      <NewHome />
    </GreetingScreen>
  )
}
