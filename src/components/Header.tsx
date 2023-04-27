import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import getRootUrl from '../utils/rootUrl';
import classes from './Header.module.scss';
import { sections } from './Section';

export default function Header() {
  const rootUrl = getRootUrl();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  function handleMobileMenuClick() {
    setIsOpen(!isOpen);
  }

  return (
    <header
      aria-label="Site Header"
      className="sticky top-0 z-50 border-b border-gray-100 bg-white text-gray-500"
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          {/* mobile hamburger */}
          <button
            type="button"
            className="p-2 lg:hidden"
            onClick={handleMobileMenuClick}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* mobile menu */}
          <div
            className={
              `${classes.menu} ${isOpen ? classes.menuOpen : ''}` +
              ' py-5 px-6 space-y-3'
            }
          >
            <button
              className="btn btn-square btn-outline mb-6"
              onClick={handleMobileMenuClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav aria-label="Main Nav" className="flex flex-col space-y-1">
              {sections.map((item) => (
                <Link key={item.anchor} href={item.anchor}>
                  <a
                    className={`${
                      router.pathname === item.anchor
                        ? 'text-primary font-extrabold'
                        : 'font-medium'
                    } block rounded-lg py-2`}
                  >
                    {item.title}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
          {/* logo */}
          <Link href="/">
            <a className="flex">
              <Image
                width="200px"
                height="50px"
                src={`${rootUrl}/assets/images/logo.svg`}
                className="header_and_footer_logo"
                alt="logo"
              ></Image>
            </a>
          </Link>
        </div>
        {/* desktop navigation */}
        <div className="flex flex-1 items-center justify-end gap-8 ">
          <nav
            aria-label="Site Nav"
            className="hidden lg:flex lg:gap-4 lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide"
          >
            {sections.map((item) => (
              <Link key={item.anchor} href={`#${item.anchor}`} passHref={true}>
                <div
                  className={`${
                    router.pathname === item.anchor
                      ? 'border-current  text-primary'
                      : 'border-transparent'
                  } cursor-pointer block h-16 border-b-4 leading-[4rem] hover:border-current hover:text-primary`}
                >
                  {' '}
                  {item.title}
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
