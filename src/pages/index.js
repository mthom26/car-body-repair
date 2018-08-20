import React from 'react';

import Nav from '../components/Nav';
import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';

import '../styles/reboot.css';
import '../styles/main.scss';

const Index = ({ data }) => {
  //console.log(data)
  return (
    <div>
      <Nav />
      <Header image={data.header} />
      <About />
      <Services
        bodyImage={data.servicesBody}
        resprayImage={data.servicesRespray}
        wheelsImage={data.servicesWheels}
      />
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
    servicesBody: file(relativePath: { eq: "images/services-bodywork.jpg"}) {
      childImageSharp {
        sizes(maxWidth: 1080) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    servicesRespray: file(relativePath: { eq: "images/services-respray.jpg"}) {
      childImageSharp {
        sizes(maxWidth: 1080) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    servicesWheels: file(relativePath: { eq: "images/services-wheels.jpg"}) {
      childImageSharp {
        sizes(maxWidth: 1080) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;

export default Index;
