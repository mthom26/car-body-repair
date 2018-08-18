import React from 'react';

import Nav from '../components/Nav';
import Header from '../components/Header';

import '../styles/reboot.css';
import '../styles/main.scss';

const Index = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Nav />
      <Header image={data.header} />
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    header: file(relativePath: { eq: "images/headerImage.jpg"}) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;

export default Index;
