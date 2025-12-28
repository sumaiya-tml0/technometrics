import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Clock, Building } from "lucide-react";
import SolutionBanner from "@/components/common/SolutionBanner";
import { Button } from "@/components/ui/button";

import contactBg from "@/assets/images/home/contact-center-min.png";

const offices = [
  {
    name: "Uttara Office",
    address:
      "Rangs Naharz, 14 Shah Jalal Avenue, Sector: 04, Uttara, Dhaka, 1230",
    mapUrl: "http://tinyurl.com/technometrics",
  },
  {
    name: "Banani Office",
    address: "InnStar Tree House, House: 50, Road: 23, Banani, Dhaka, 1213",
    mapUrl: "https://goo.gl/maps/FgXRX6t7L4hL7T7w6",
  },
];

const contactInfo = {
  phone: "+88 02 4895 4441-2",
  email: "askus@technometrics.net",
  hours: "Sun - Thu: 9:00 AM - 6:00 PM",
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      <SolutionBanner
        title="Contact Us"
        subtitle="Get In Touch"
        bgImage={contactBg}
      />

      <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02b0f0] focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02b0f0] focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02b0f0] focus:border-transparent outline-none transition-all"
                      placeholder="+880 1XXX-XXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02b0f0] focus:border-transparent outline-none transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02b0f0] focus:border-transparent outline-none transition-all"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02b0f0] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-6 bg-[#02b0f0] hover:bg-[#02b0f0]/90 text-white font-semibold rounded-lg transition-all hover:scale-105 cursor-pointer"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Reach out to us through any of these channels.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <motion.a
                  href={`tel:${contactInfo.phone}`}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl hover:bg-[#02b0f0]/5 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-3 bg-[#02b0f0]/10 rounded-full group-hover:bg-[#02b0f0] transition-colors duration-300">
                    <Phone className="w-5 h-5 text-[#02b0f0] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-semibold text-gray-900 group-hover:text-[#02b0f0] transition-colors">
                      {contactInfo.phone}
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl hover:bg-[#02b0f0]/5 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-3 bg-[#02b0f0]/10 rounded-full group-hover:bg-[#02b0f0] transition-colors duration-300">
                    <Mail className="w-5 h-5 text-[#02b0f0] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-semibold text-gray-900 group-hover:text-[#02b0f0] transition-colors">
                      {contactInfo.email}
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl hover:bg-[#02b0f0]/5 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-3 bg-[#02b0f0]/10 rounded-full group-hover:bg-[#02b0f0] transition-colors duration-300">
                    <Clock className="w-5 h-5 text-[#02b0f0] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Business Hours</p>
                    <p className="font-semibold text-gray-900">
                      {contactInfo.hours}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Office Addresses */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                  <Building className="w-5 h-5 text-[#02b0f0]" />
                  Our Offices
                </h3>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <motion.a
                      key={index}
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="block p-5 bg-gray-50 rounded-xl hover:shadow-lg hover:bg-[#02b0f0]/5 transition-all duration-300"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {office.name}
                      </h4>
                      <p className="flex items-start gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-[#02b0f0] mt-0.5 shrink-0" />
                        {office.address}
                      </p>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-[400px] md:h-[500px]"
        >
          <iframe
            src="https://maps.google.com/maps?q=technometrics%20Limited&t=m&z=12&output=embed&iwloc=near"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          />
        </motion.div>
      </section>
    </>
  );
};

export default ContactUs;
