import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <p>There is no food here!</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default NotFoundPage
