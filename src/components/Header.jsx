import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Destinations", id: "destinations" },
    { name: "Packages", id: "packages" },
    { name: "About Us", id: "about-us" },
    { name: "Contact Us", id: "contact-us" },
  ];

  return (
<header className="bg-gray-900   text-white shadow-lg">      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <a href="/">
              <img src='1.png' alt="Athar Tourism and Travel Logo" className="h-12 w-auto" />
            </a>
            <div>
              <h1 className="text-2xl font-bold text-yellow-400">{t("Athar Tourism and Travel")}</h1>
              <p className="text-sm text-gray-200">{t("Explore the world with us")}</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80} // Adjust this value based on your header height
                className="hover:text-yellow-400 transition duration={300} cursor-pointer"
              >
                {t(item.name)}
              </Link>
            ))}
          </nav>

          {/* Auth and Language */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-white px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition duration-300"
              onClick={() => navigate("sign-up")}
            >
              {t("Sign Up")}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-white transition duration-300"
              onClick={() => navigate("login")}
            >
              {t("Login")}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="text-xl text-yellow-400"
            >
              <FaGlobe /> {language}
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl focus:outline-none text-yellow-400">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-gradient-to-r from-blue-600 to-indigo-800"
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80} // Adjust this value based on your header height
                className="hover:text-yellow-400 transition duration-300 cursor-pointer"
                onClick={() => setIsMenuOpen(false)} // Close menu after clicking
              >
                {t(item.name)}
              </Link>
            ))}
            <button
              className="bg-yellow-400 text-white px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition duration-300"
              onClick={() => {
                navigate("sign-up");
                setIsMenuOpen(false);
              }}
            >
              {t("Sign Up")}
            </button>
            <button
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-white transition duration-300"
              onClick={() => {
                navigate("login");
                setIsMenuOpen(false);
              }}
            >
              {t("Login")}
            </button>
            <button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="flex items-center space-x-2 text-yellow-400"
            >
              <FaGlobe /> <span>{language}</span>
            </button>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
