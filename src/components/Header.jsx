import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "../assets/cifse-logo-no-bg2.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-gray-300 transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between max-w-[90rem] mx-auto px-4">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-12 w-auto max-h-20" />
          <div>
            <h1 className="text-xl font-bold">CIFSE</h1>
            <p className="text-xs text-muted-foreground">
              Excellence in Fire & Safety Education
            </p>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6 ">
          <Link to="#home" className="text-sm font-medium hover:text-red-600 transition-colors">
            Home
          </Link>
          <Link to="#about" className="text-sm font-medium hover:text-red-600 transition-colors">
            About
          </Link>
          <Link to="#courses" className="text-sm font-medium hover:text-red-600 transition-colors">
            Courses
          </Link>
          <Link to="#features" className="text-sm font-medium hover:text-red-600 transition-colors">
            Why Choose Us
          </Link>
          <Link to="#gallery" className="text-sm font-medium hover:text-red-600 transition-colors">
            Gallery
          </Link>
          <Link to="#contact" className="text-sm font-medium hover:text-red-600 transition-colors">
            Contact
          </Link>
        </nav>
        <Button className="bg-red-600 hover:bg-red-700 text-white">Apply Now</Button>
      </div>
    </header>
  );
};

export default Header;
