import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import P from '../components/P';
import A from '../components/A';

const IndexPage = () => (
  <Layout>
    <P>Solving the greatest threat to workplace sanity.</P>
    <P>Ordering lunch!</P>
    <A href="https://github.com/hehk/lunch">Currently under active development</A>
  </Layout>
)

export default IndexPage
