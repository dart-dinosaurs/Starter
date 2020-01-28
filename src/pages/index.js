import React, { Fragment } from 'react';

import Layout from '@components/layout';
import LandingPic from '@components/Landing/LandingPic'
import LandingCards from '@sections/Landing/LandingCards'
import Footer from '@components/Footer/Footer'

const LandingPage = () => (
  <Fragment>
    <LandingPic />
    <LandingCards />
    <Footer />
  </Fragment>
);

export default () => (
  <Layout>
    <LandingPage />
  </Layout>
);
