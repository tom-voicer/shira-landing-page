import React, { ReactNode } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-3 md:px-0">
    {props.meta}

    <Header />

    <div className="p-5 container mx-auto max-w-screen-xl">
      {props.children}
    </div>

    <Footer />
  </div>
);

export { Main };
