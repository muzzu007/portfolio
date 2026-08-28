import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-12 px-[8%] bg-slate-900/50 border-t border-white/10 text-center">
      <div className="max-w-7xl mx-auto">
        <p className="text-slate-400 text-sm flex items-center justify-center gap-1 flex-wrap">
          © {new Date().getFullYear()} Muzammil. Made with{" "}
          <FaHeart className="text-red-500 animate-pulse" /> in India
        </p>
        <p className="text-slate-500 text-xs mt-2">
          Built with React, Vite & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;