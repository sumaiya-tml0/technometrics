import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Award, Handshake } from "lucide-react";

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
};

const certifications = [
  { name: "ISO 20000-1:2011" },
  { name: "ISO 9001-2015" },
  { name: "ISO 27001-2013" },
];

const affiliations = [
  { name: "BASIS", href: "https://basis.org.bd/" },
  { name: "MCCI", href: "https://mccibd.org/" },
];

const GetTouch = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h3 className="inline-block border border-[#02b0f0] rounded-3xl px-4 py-1.5 text-sm sm:text-base font-semibold uppercase tracking-wider mb-4">
            <span
              style={{
                WebkitTextStroke: "1px #02b0f0",
                WebkitTextFillColor: "transparent",
              }}
            >
              _Get In Touch_
            </span>
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Start Your Journey to Better Business
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Column 1 - Office Addresses & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Offices */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#02b0f0]" />
                Our Offices
              </h4>
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
                  className="block p-5 bg-gray-50 rounded-xl hover:shadow-lg hover:bg-[#02b0f0]/5 transition-all duration-300 cursor-pointer mb-4"
                >
                  <h5 className="font-semibold text-gray-900 mb-2">
                    {office.name}
                  </h5>
                  <p className="flex items-start gap-2 text-sm text-gray-600 hover:text-[#02b0f0] transition-colors">
                    <MapPin className="w-4 h-4 text-[#02b0f0] mt-0.5 shrink-0" />
                    {office.address}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Phone & Email */}
            <div className="space-y-3">
              <motion.a
                href={`tel:${contactInfo.phone}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#02b0f0]/5 hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-2 bg-[#02b0f0]/10 rounded-full group-hover:bg-[#02b0f0] transition-colors duration-300">
                  <Phone className="w-4 h-4 text-[#02b0f0] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-medium text-gray-700 group-hover:text-[#02b0f0] transition-colors">
                  {contactInfo.phone}
                </span>
              </motion.a>

              <motion.a
                href={`mailto:${contactInfo.email}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#02b0f0]/5 hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-2 bg-[#02b0f0]/10 rounded-full group-hover:bg-[#02b0f0] transition-colors duration-300">
                  <Mail className="w-4 h-4 text-[#02b0f0] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-medium text-gray-700 group-hover:text-[#02b0f0] transition-colors">
                  {contactInfo.email}
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2 - Certifications & Affiliations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Certifications */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#02b0f0]" />
                Certifications
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {certifications.map((cert, index) => (
                  <p key={index} className="text-xs text-gray-500 mt-1">
                    {cert.name}
                  </p>
                ))}
              </div>
            </div>

            {/* Affiliations */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Handshake className="w-5 h-5 text-[#02b0f0]" />
                Affiliations
              </h4>
              <div className="flex flex-wrap gap-2">
                {affiliations.map((affiliation, index) => (
                  <motion.a
                    key={index}
                    href={affiliation.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    target="_blank"
                    className="px-4 py-2 bg-gray-100 hover:bg-[#02b0f0] hover:text-white rounded-full text-sm font-medium text-gray-700 transition-all duration-300 cursor-pointer"
                  >
                    {affiliation.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 3 - Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg h-[350px] md:h-full min-h-[350px] md:col-span-2 lg:col-span-1"
          >
            <iframe
              src="https://maps.google.com/maps?q=technometrics%20Limited&t=m&z=10&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetTouch;
