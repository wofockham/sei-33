import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default (props) => (
  <Layout>
    <h1>About {props.data.site.siteMetadata.title}</h1>
    <p>
      Bill Murray is the acclaimed star of Ghostbusters and Lost in Translation.
    </p>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
