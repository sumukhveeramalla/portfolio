// src/sections/Contact.jsx

import React, { useState } from "react";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    setSubmitted(true);

    // Allow FormSubmit to proceed after a short delay
    setTimeout(() => {
      e.target.submit();
    }, 400);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-4 md:px-16 py-24 bg-transparent text-inherit"
    >
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-6">
          Feel free to reach out via email or LinkedIn for collaborations,
          research, or opportunities.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-lg mb-10">
          <a href="mailto:sumukhveeramalla2345@gmail.com">
            <Mail className="text-red-400 hover:scale-110 transition" />
          </a>
          <a
            href="https://linkedin.com/in/veeramalla-sumukh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="text-blue-400 hover:scale-110 transition" />
          </a>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          action="809beb15b63ca6e4165befe434482f7a"
          method="POST"
          className="flex flex-col gap-4 text-left bg-white/10 p-6 rounded-lg backdrop-blur-md border border-white/20"
        >
          {/* FormSubmit hidden settings */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for contacting me! I'll get back to you soon."
          />

          {/* Name */}
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Subject */}
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            required
            className="p-3 rounded bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            className="p-3 rounded bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className={`font-semibold py-2 px-4 rounded transition duration-300 ${
              submitted
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
