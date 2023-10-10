// components/Navbar.js
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? 'opacity-0' : 'opacity-100'
      } transition-opacity duration-300 ease-in-out fixed left-0 right-0 bg-white p-4 flex justify-between items-center`}
    >
      <div className="text-2xl font-bold">Logo</div>
      {/* Menu items */}
      {!isScrolled && (
        <ul className="space-x-4">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
