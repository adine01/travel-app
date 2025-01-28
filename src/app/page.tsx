import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Travel Planner</h1>
      <p className="text-xl mb-8">Plan your next adventure with ease!</p>
      <div className="space-x-4">
        <Link href="/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </Link>
        <Link href="/login" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Log In
        </Link>
      </div>
    </div>
  )
}

