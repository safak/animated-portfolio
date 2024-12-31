import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_v6lr75a",
        "template_73lcr1w",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "xrpdWqWlkz4WhhAs-"
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-md mx-auto p-8 rounded-xl border border-transparent neon-border"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Mail className="w-12 h-12 mx-auto text-cyan-400 mb-4" />
          </motion.div>
          <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
          <p className="text-gray-400 mt-2">I'd love to hear from you!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-inherit border border-cyan-400 text-cyan-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 outline-none transition-all"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-inherit border border-cyan-400 text-cyan-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 outline-none transition-all"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-cyan-400 w-5 h-5" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={4}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-inherit border border-cyan-400 text-cyan-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 outline-none transition-all"
              />
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-cyan-400 hover:bg-pink-500 text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all neon-button"
          >
            <Send className="w-5 h-5" />
            <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
          </motion.button>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-green-400 text-center mt-4"
            >
              Message sent successfully!
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-red-400 text-center mt-4"
            >
              Failed to send message. Please try again.
            </motion.p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
