import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CRUD from '../components/CRUD'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
   
   
    <CRUD />
  </Layout>
)

export default IndexPage
