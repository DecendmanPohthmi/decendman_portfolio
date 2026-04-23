import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white">
      <h1 className="text-xl font-bold">Decendman Pohthmi</h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}