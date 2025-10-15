import React from "react";
import { motion } from "framer-motion";
import "./projects.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      {/* Animated background blobs */}
      <motion.div
        className="floating-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="blob blob1"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="blob blob2"
          animate={{
            x: [0, -60, 60, 0],
            y: [0, 40, -40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="blob blob3"
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Contact Form */}
      <div className="container1">
        <h2>Contact Us Form</h2>

        <form
          action="https://formspree.io/f/mzblbjpk"
          method="POST"
        >
          <div className="row100">
            <div className="col">
              <div className="inputBox">
                <input type="text" name="first_name" required />
                <span className="text">First Name</span>
                <span className="line"></span>
              </div>
            </div>

            <div className="col">
              <div className="inputBox">
                <input type="text" name="last_name" required />
                <span className="text">Last Name</span>
                <span className="line"></span>
              </div>
            </div>
          </div>

          <div className="row100">
            <div className="col">
              <div className="inputBox">
                <input type="email" name="email" required />
                <span className="text">Email</span>
                <span className="line"></span>
              </div>
            </div>

            <div className="col">
              <div className="inputBox">
                <input type="number" name="phone" required />
                <span className="text">Mobile</span>
                <span className="line"></span>
              </div>
            </div>
          </div>

          <div className="row100">
            <div className="col">
              <div className="inputBox textarea">
                <textarea name="message" required></textarea>
                <span className="text">Type your message here...</span>
                <span className="line"></span>
              </div>
            </div>
          </div>

          <div className="row100">
            <div className="col">
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
