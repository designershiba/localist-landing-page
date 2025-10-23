import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-4">
      <h1 className="text-6xl font-extrabold text-indigo-600 mb-4 tracking-tight">
        Localist
      </h1>
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Our New App is Coming Soon!
      </h2>
      <p className="text-xl text-center max-w-lg mb-10">
        We're working hard to bring you the best local experience. Stay tuned for
        the launch of Localist!
      </p>
      {/* Optional: Add a simple form for email sign-up later */}
      <form className="flex space-x-2">
        <input
          type="email"
          placeholder="Enter your email to get notified"
          className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-full sm:w-80"
          aria-label="Email for notification"
          disabled
        />
        <button
          type="submit"
          className="px-4 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-150 ease-in-out disabled:opacity-50"
          disabled
        >
          Notify Me
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-500">
        (Email notification feature coming soon!)
      </p>
      
      {/* Optional: Social Media or Placeholder Icon */}
      <div className="mt-8 text-2xl text-gray-400">
        📍
      </div>
    </div>
  );
}
