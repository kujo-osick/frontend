import type { NextPage } from 'next';
import React from 'react';

import type { Route } from 'nextjs-routes';
import type { Props } from 'nextjs/getServerSideProps';
import PageNextJs from 'nextjs/PageNextJs';

import Address from 'ui/pages/Address';

const pathname: Route['pathname'] = '/address/[hash]';

const Page: NextPage<Props<typeof pathname>> = (props: Props<typeof pathname>) => {
  return (
    <PageNextJs pathname="/address/[hash]" query={ props.query } apiData={ props.apiData }>
      <Address/>
    </PageNextJs>
  );
};

export default Page;
