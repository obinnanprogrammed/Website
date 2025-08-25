import { useState } from 'react';
import { clsx } from 'clsx';

const logo = require('../images/logo.png').default;
const logoNav = require('../images/logo-navbar.png').default;

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ['Highlights', '/highlights'],
    ['About', '/about'],
    ['Projects', '/projects']
  ];
  
  const sidebarClass = clsx(
    "transition-right duration-500 h-screen fixed top-0 bg-white z-20 w-40 shadow-lg",
    {
      "-right-80": !open,
      "right-0": open,
    }
  );

  const overlayClass = clsx(
    "fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 z-10",
    {
      "opacity-0 pointer-events-none": !open,
      "opacity-100": open,
    }
  );

  return (
    <>
      <div className="max-h-16 flex justify-between items-center">
        <div className="flex text-white items-center">
          <a href="/">
            <img className="h-auto max-h-16 w-auto object-contain" src={logo} alt="Logo" />
          </a>
          <p className="md:text-3xl">obinna nwakwue</p>
        </div>
        <div className="text-white justify-center">
          <nav className="hidden md:flex space-x-4">
            {
              links.map(([title, url]) => (
                <a key={title} href={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-white hover:text-black">{title}</a>
              ))
            }
          </nav>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={overlayClass} onClick={() => setOpen(false)}>
      </div>
      <div className={sidebarClass}>
        <button className="md:hidden text-black focus:outline-none mt-2" 
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              strokeWidth={2} d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="mt-2 space-y-2 px-4 pb-4">
          {links.map(([title, url]) => (
            <a key={title} href={url} 
              className="block px-3 py-2 rounded-lg text-black font-medium hover:bg-navy hover:text-white transition duration-300"
            >
              {title}
            </a>
          ))}
        </nav>
        <a href="/">
          <img src={logoNav} alt="Logo" className="object-size-down max-w-50" />
        </a>
      </div>
    </>
  );
};

