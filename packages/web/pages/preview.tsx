import React, { useEffect, useState } from 'react';
import { getSdk } from '@answersai-marketing/graphql-sdk';
import { GraphQLClient } from 'graphql-request';
import { useRouter } from 'next/dist/client/router';
import ContentPreview from '@last-rev/component-library/dist/components/ContentPreview/ContentPreview';
import contentMapping from '@answersai-marketing/components/src/contentMapping';
import useSWR from 'swr';
import { ContentModuleProvider } from '@last-rev/component-library/dist/components/ContentModule/ContentModuleContext';

let client;

const fetchPreview = async (id: string, locale: string, environment: string) => {
  const previewGqlClient = new GraphQLClient(
    `${process.env.NODE_ENV === 'development' ? 'http://localhost:5000/graphql' : '/api/graphql'}?env=${environment}`
  );
  const sdk = getSdk(previewGqlClient);
  return sdk.Preview({ id, locale });
};
const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;

interface Action {
  type: 'OVERRIDE_VALUES' | 'REFRESH_CONTENT';
  payload: any;
}
export default function Preview({}: any) {
  const { query } = useRouter();
  const {
    environment,
    id,
    locale = 'en-US'
  } = query as {
    environment?: string;
    id: string;
    locale?: string;
  };

  const { data, error, mutate } = useSWR(id ? [id, locale, environment, 'preview', spaceId] : null, fetchPreview);
  const content = data?.data?.content;
  const isLoadingInitialData = !data && !error;

  const [override, setOverride] = React.useState<any>();
  React.useLayoutEffect(() => {
    window.addEventListener(
      'message',
      (event) => {
        const action: Action = event.data;

        if (action.type === 'OVERRIDE_VALUES') {
          setOverride(action.payload);
        }
        if (action.type === 'REFRESH_CONTENT') {
          setOverride(null);
          mutate();
        }
      },
      false
    );
  }, [mutate]);

  return (
    <ContentModuleProvider contentMapping={contentMapping}>
      <ContentPreview
        id={id}
        loading={isLoadingInitialData}
        content={{ ...content, ...override }}
        error={error}
        environment={environment as string}
        locale={locale as string}
        spaceId={spaceId as string}
      />
    </ContentModuleProvider>
  );
}
