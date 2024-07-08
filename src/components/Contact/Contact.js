import React from 'react';
import { Container} from 'react-bootstrap';

export default function Contact() {
  return (
    <div id="Contact" className="tabcontent">
      <Container>
        <div className="row">
          <iframe
            title="Contact Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSc9VuBSZRmA9ejli-KBqIjD3G7ndwZke0Dq3nnnJ9m7C-_Jsw/viewform?embedded=true" 
            width="100%" 
            height="800"
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0">
            Loading…
          </iframe>
        </div>
      </Container>
    </div>
  );
}
