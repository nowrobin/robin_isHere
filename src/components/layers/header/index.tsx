'use client';
import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const smoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target && target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener('click', smoothScroll));

    return () => {
      links.forEach((link) => link.removeEventListener('click', smoothScroll));
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary bg-opacity-90 text-quaternary">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <a href="#hero" className="hover:text-tertiary transition-colors">
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-tertiary transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-tertiary transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-tertiary transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-tertiary transition-colors"
            >
              Experience
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
