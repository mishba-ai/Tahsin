import { Link } from 'expo-router'

export default function NotFound() {
  return (
    <div className="container flex h-full flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="text-gray-500">Page not found</p>
      <Link href="/" className="rounded-md bg-blue-500 px-4 py-2 text-white">
        Go Home
      </Link>
    </div>
  )
}

