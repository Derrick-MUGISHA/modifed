 
 import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
 
 const Footer = () => {
    return (
      <footer className="bg-cover bg-center bg-gray-800 text-white p-10 w-full relative text-center">
        <div className="container mx-auto w-11/12 max-w-6xl flex flex-col z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="flex flex-col items-start p-4">
              <img src="https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" alt="Kigali view" className="w-full max-w-[150px] mb-4 opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-opacity duration-300" />
              <p className="text-lg mb-4">A Top 10 Best Big City in the Africa<br />One of the Best Secured Cities in the World<br />One of the Friendliest Cities</p>
            </div>
            <div className="flex flex-col items-start p-4">
              <h3 className="text-lg mb-4">Quick Links</h3>
              <ul>
                <li><a href="/media" className="text-sm text-white hover:text-gray-400 transition-colors duration-300">Trending Places in Kigali / Events</a></li>
                <li><a href="/partnership" className="text-sm text-white hover:text-gray-400 transition-colors duration-300">Up Calming Games</a></li>
                <li><a href="/about-us" className="text-sm text-white hover:text-gray-400 transition-colors duration-300">Five Stars Hotels in Rwanda</a></li>
                <li><a href="/contact" className="text-sm text-white hover:text-gray-400 transition-colors duration-300">Best Restaurants in Kigali</a></li>
              </ul>
            </div>
            <div className="flex flex-col items-start p-4">
              <h3 className="text-lg mb-4">Contact Us</h3>
              <p className="text-lg mb-4">277 Kabuye St., Kigali, Rwanda<br />Kigali, Rwanda</p>
              <p className="text-lg">+250 614 221 662<br />+250 800 354 2657</p>
            </div>
          </div>
          <div className="flex gap-4 justify-center mt-4">
            <a href="http://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-300">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://x.com/__derr1ck__?t=P-KqVcqqOZeB5lJUN04PLQ&s=03" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-300">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://www.instagram.com/d.e.r.r.1.c.k?igsh=ZHYwZTg3M3Q2NDJs" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-300">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/mugisha-derrick-479788332/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-300">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-300">
              <FaYoutube className="text-2xl" />
            </a>
          </div>
          <div className="mt-4 self-end">
            <select className="bg-gray-700 text-white p-2 rounded cursor-pointer">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
          <div className="border-t border-gray-600 pt-6 mt-6 flex flex-col items-center md:flex-row md:justify-between">
            <p>&copy; 2025 All Rights Reserved.</p>
            <div className="flex gap-4">
              <a href="/privacy-policy" className="text-white hover:text-gray-400 transition-colors duration-300">Privacy Policy</a>
              <a href="/terms-conditions" className="text-white hover:text-gray-400 transition-colors duration-300">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;