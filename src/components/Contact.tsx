import React from 'react';

const Contact = () => {
  return (
    <div id="contact-section" className="py-8 px-4 overflow-x-hidden">
      <h2 className="sr-only">Contact</h2>
        <iframe
          title="Contact Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSc9VuBSZRmA9ejli-KBqIjD3G7ndwZke0Dq3nnnJ9m7C-_Jsw/viewform?embedded=true"
          width="100%"
          height="800"
        >
          Loading…
        </iframe>
    </div>
  );
};

export default Contact;
