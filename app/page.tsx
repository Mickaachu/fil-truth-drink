import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Welcome to Truth or Drink</h1>
      <Link href="/truth-or-drink ">
        <div className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600">
        Start Playing
        </div>
      </Link>
    </div>
  );
}
