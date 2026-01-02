"use client";

import React, { useState } from "react";
import Image from "next/image";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a successful submission
    setStatus("✅ Message sent successfully!");
    setFormData({ name: "", mobile: "", email: "", message: "" });
  };

  return (
    <>
      <section className="heading">
        <h3>Contact Us</h3>
      </section>

      {/* CONTACT INFO */}
      <section className="contact1">
        <div className="icons">
          <i className="fas fa-phone"></i>
          <h3>Our Number</h3>
          <p>+92-26673678</p>
          <p>+92-36726495</p>
        </div>

        <div className="icons">
          <i className="fas fa-envelope"></i>
          <h3>Our Email</h3>
          <p>SweetTreats@gmail.com</p>
        </div>

        <div className="icons">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Our Address</h3>
          <p>Gujrat, Pakistan - 50700</p>
        </div>
      </section>

      {/* MESSAGE FORM */}
      <section className="message">
        <div className="form-container">
          <div className="form-image">
            <img src="image/foot.png" alt="Contact Us" />
          </div>

          <div className="form">
            <form>
              <h3>Send us your Query</h3>
              <input type="text" placeholder="Your Name*" required />
              <br />
              <input type="number" placeholder="Your Mobile*" required />
              <br />
              <input type="email" placeholder="Your Email*" required />
              <br />
              <textarea
                placeholder="Enter details here"
                cols="30"
                rows="10"
                required
              ></textarea>
              <br />
              <input type="submit" value="Send Message" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
