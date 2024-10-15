import React from 'react';


function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <div className="about-content">
        <div className="about-text">
          <p>Welcome to our house rental service! We provide comfortable and affordable rental homes to meet your needs, whether you're looking for a short-term or long-term stay.</p>
          <p>With a wide selection of properties across various locations, we aim to make finding your next home easier and more convenient. Our team is dedicated to helping you find the perfect rental space that fits your lifestyle and budget.</p>
          <p>Explore our website to learn more about our services, available rentals, and how we can help you find your next home!</p>
        </div>
        <div className="about-image">
          <img src="https://img.freepik.com/free-photo/three-dimensional-house-model_23-2151003966.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid" alt="Rental Homes" />
        </div>
      </div>
    </div>
  );
}

export default About;
