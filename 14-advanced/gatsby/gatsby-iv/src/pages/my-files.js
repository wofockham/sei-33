import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default (props) => {
  console.log(props.data);

  return (
    <Layout>
      <div>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySite</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {props.data.allFile.edges.map(({node}, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath,
          prettySize,
          extension,
          birthTime(fromNow: true)
        }
      }
    }
  }
`;
