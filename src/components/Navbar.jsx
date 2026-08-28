import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-3 left-1/2 -translate-x-1/2 w-[92%] max-w-[1350px] flex justify-between items-center px-6 md:px-10 py-4 md:py-5 bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-300 z-50 shadow-lg ${
        scrolled ? "py-3 md:py-4 bg-slate-900/90 shadow-2xl" : ""
      }`}
    >
      {/* Logo */}
      <div className="text-white text-3xl font-bold tracking-wide transition-transform hover:scale-105 cursor-pointer">
        Mohammed Muzammil<span className="text-blue-500">.</span>
      </div>

      {/* Nav Links - Desktop */}
      <ul className="hidden md:flex gap-10 items-center list-none">
        {["about", "skills", "projects", "contact"].map((section) => (
          <li key={section}>
            <Link
              activeClass="!text-blue-500 !font-medium after:!w-full" // keep font-weight same, underline full width
              to={section}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="relative text-slate-300 text-base font-medium transition-all hover:text-white hover:-translate-y-0.5 cursor-pointer after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-0 after:h-0.5 after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons - Desktop */}
      <div className="hidden md:flex gap-4 text-white text-xl">
        <a href="https://github.com/muzzu007" target="_blank" rel="noreferrer" className="hover:text-blue-500 hover:-translate-y-1 hover:scale-110 transition-all">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/orgmuzzu" target="_blank" rel="noreferrer" className="hover:text-blue-500 hover:-translate-y-1 hover:scale-110 transition-all">
          <FaLinkedin />
        </a>
      </div>

      {/* Hamburger */}
      <div className="md:hidden text-white text-3xl cursor-pointer hover:text-blue-500 transition" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-x-0 top-[72px] bg-slate-900/98 backdrop-blur-xl border border-white/10 rounded-b-2xl transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 list-none">
          {["about", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <Link
                activeClass="!text-blue-500 !font-medium"
                to={section}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
                className="text-slate-300 text-xl font-medium hover:text-white transition cursor-pointer"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
          <div className="flex gap-8 mt-2 text-white text-2xl">
            <a href="https://github.com/muzzu007" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/orgmuzzu" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;