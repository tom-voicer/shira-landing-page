import React from 'react';

import Section, { sections, ISectionProps } from '../components/Section';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';

const Index = () => (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    {sections.map((section: ISectionProps) => (
      <Section key={section.anchor} {...section}></Section>
    ))}
  </Main>
);

export default Index;
