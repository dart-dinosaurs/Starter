import React, { Fragment } from 'react';

import Layout from '@components/layout';
import LandingPic from '@components/Landing/LandingPic'
import LandingCards from '@sections/Landing/LandingCards'

const LandingPage = () => (
  <Fragment>
    <LandingPic />
    <LandingCards />
  </Fragment>
);

export default () => (
  <Layout>
    <LandingPage />
  </Layout>
);
