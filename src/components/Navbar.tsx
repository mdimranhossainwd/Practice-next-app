import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Navbar() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="w-full">
      {/* Top section with site name, tagline, and date */}
      <div className="text-center py-6 bg-white">
        <h1 className="text-4xl font-serif font-bold text-black italic">
          The Dragon News
        </h1>
        <p className="text-gray-500 mt-1">Journalism Without Fear or Favour</p>
        <p className="text-sm font-semibold text-gray-700 mt-1">{today}</p>
      </div>

      {/* Navigation bar */}
      <nav className="bg-black text-white">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2 text-red-600 font-bold text-lg">
            <Image src="/assets/logo.png" alt="Logo" width={100} height={120} />
          </div>

          {/* Menu items */}
          <ul className="flex gap-6 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pages">Pages</Link>
            </li>
            <li>
              <Link href="/category">Category</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/post">Post</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          {/* Social icons */}
          <div className="flex gap-3 text-lg">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
