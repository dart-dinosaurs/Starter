import React, { Fragment } from 'react';

import Layout from '@components/layout';
import LandingPic from '@components/Landing/LandingPic'

const LandingPage = () => (
  <Fragment>
    <LandingPic />
  </Fragment>
);

export default () => (
  <Layout>
    <LandingPage />
  </Layout>
);
