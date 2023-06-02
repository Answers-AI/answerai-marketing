import React from 'react';
import ContentModule from '@last-rev/component-library/dist/components/ContentModule';
import { styled } from '@mui/material/styles';
import sidekick from '@last-rev/contentful-sidekick-util';

import { PageProps } from './Page.types';

const Page = ({ header, hero, contents, footer, breadcrumbs, sidekickLookup }: PageProps) => {
  return (
    <>
      {header ? <ContentModule {...(header as any)} /> : null}

      {hero ? <ContentModule {...(hero as any)} breadcrumbs={breadcrumbs} /> : null}

      <Main {...sidekick(sidekickLookup, 'contents')}>
        {contents?.map((content: any) => (
          <ContentModule key={content?.id} {...content} component="section" />
        ))}
      </Main>

      {footer ? <ContentModule {...(footer as any)} /> : null}
    </>
  );
};

const Main = styled('main', {
  name: 'Page',
  slot: 'Main',
  overridesResolver: (_, styles) => [styles.root]
})``;

export default Page;
