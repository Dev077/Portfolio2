import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-6 px-4 md:px-12">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Your Name</h1>
          <p className="text-sm text-gray-400">Software Engineering @ Western Ontario</p>
        </div>
        <div className="hidden md:block">
          <p className="text-right">London, Ontario</p>
        </div>
      </div>
    </header>
  );
}