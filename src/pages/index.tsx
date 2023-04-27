import React from 'react';

import { GetStaticProps } from 'next';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';
import { sections } from '../components/Section';
import Section, { ISectionProps } from '../components/Section';


const Index = () => (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
      {sections.map((section: ISectionProps) => (
        <Section key={section.anchor} {...section}
        ></Section>
      ))}
  </Main>
);



export default Index;
