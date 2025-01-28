import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")

  if (!token) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Your Dashboard</h1>
      <p className="text-xl mb-8">Start planning your next trip!</p>
      {/* Add more dashboard content here */}
    </div>
  )
}

