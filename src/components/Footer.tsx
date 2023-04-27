import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import getRootUrl from '../utils/rootUrl';

export default function Footer() {
  const rootUrl = getRootUrl();

  return (
    <footer
      aria-label="Site Footer"
      className="bg-neutral text-white invisible"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          {/* logo */}
          <Link href="/">
            <a className="flex">
              <Image
                width="100px"
                height="50px"
                src={`${rootUrl}/assets/images/welcome-logo-white.svg`}
                className="header_and_footer_logo"
                alt="logo"
              ></Image>
            </a>
          </Link>{' '}
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed ">
          חברת Welcome מתמחה בייזום פרויקטים במסגרת התחדשות עירונית, בניית
          קהילות Co-living, חידוש ושדרוג שכונות.
        </p>
        <p className="mt-10 text-center text-xs/relaxed ">
          © כל הזכויות שמורות
        </p>
      </div>
    </footer>
  );
}
