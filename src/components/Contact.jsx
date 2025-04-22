import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_q20774u", // your service ID
        "template_5jy6czz", // your template ID
        formData,
        "c1Zts-d1i8cQ_SvAO" // your public key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-100 to-blue-100 px-4 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Contact Me</h2>
      <motion.form
        onSubmit={sendEmail}
        className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-md px-4 py-2"
          required
          value={formData.user_name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-md px-4 py-2"
          required
          value={formData.user_email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border border-gray-300 rounded-md px-4 py-2 h-32"
          required
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md font-semibold transition"
        >
          Send Message
        </button>
        {status && <p className="text-sm text-green-600">{status}</p>}
      </motion.form>
    </section>
  );
};

export default Contact;
