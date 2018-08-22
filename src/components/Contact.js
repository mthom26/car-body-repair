import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

import Container from './utils/Container';

import emailIcon from '../images/e-mail.svg';
import phoneIcon from '../images/phone.svg';

// view docs here https://tomchentw.github.io/react-google-maps/ 
const MyMapComponent = withScriptjs(withGoogleMap(() => {
  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 54.343, lng: -7.6315 }}
    >
      <Marker position={{ lat: 54.3433, lng: -7.6315 }}/>
    </GoogleMap>
  );
}));

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactDetails">
        <Container width="xs">
          <h2>Quality Repairs</h2>
          <hr className="w-50" style={{marginLeft: 0}}/>
          <p>Get in touch via email or phone and we will get back to you as soon as possible.</p>
          <div className="contactDetailsPair">
            <img
              src={phoneIcon}
              width="28px"
              height="28px"
              style={{marginRight: '1rem'}}
            />
            <p>000 123456789</p>
          </div>
          <div className="contactDetailsPair">
            <img
              src={emailIcon}
              width="28px"
              height="28px"
              style={{marginRight: '1rem'}}
            />
            <p>info@autobodyrepairs.com</p>
          </div>
        </Container>
      </div>
      <div className="googleMap">
        <MyMapComponent
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
      </div>
    </div>
  );
};

export default Contact;
