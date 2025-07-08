import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900/70 shadow-[0px_15px_15px_-5px_rgba(0,_0,_0,_0.5)]">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row  justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-white">
              © {new Date().getFullYear()} Ryan Gomes Portfolio. All rights
              reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/RRyanDEV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-white/70"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rryandev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-white/70"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/reeal_ryaan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-white/70"
            >
              <FaInstagram />
            </a>

            <a
              href="https://t.me/ryaanreeal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-white/70"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
