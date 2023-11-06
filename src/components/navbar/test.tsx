// components/Navbar.js
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
      if (currentScrollY > prevScrollY) {
        // Scrolling down, hide menu
        setIsScrolled(true);
      } else {
        // Scrolling up, show menu
        setIsScrolled(false);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <nav
      className={`${
        isScrolled ? 'opacity-0' : 'opacity-100'
      } transition-opacity duration-300 ease-in-out fixed top-0 left-0 right-0 bg-white p-4 flex justify-between items-center z-10`}
    >
      <div className="text-2xl font-bold">Logo</div>
      {/* Menu items */}
      <ul className={`space-x-4 ${isScrolled ? 'hidden' : 'block'}`}>
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
