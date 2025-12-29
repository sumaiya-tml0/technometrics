import React from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Award,
  Handshake,
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

import logo from "@/assets/images/logo_white.png";

import basis from "@/assets/images/basis.svg";
import mcci from "@/assets/images/mcci_logo.png";
import { Link } from "react-router";

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
  { image: basis, href: "https://basis.org.bd/" },
  { image: mcci, href: "https://mccibd.org/" },
];
const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/technometrics.net" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/technometrics-limited",
  },
  { icon: Youtube, href: "#" },
  { icon: Instagram, href: "#" },
];

const GetTouch = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-16 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="shrink-0">
              <img
                src={logo}
                alt="Technometrics"
                className="h-6 md:h-8 w-auto object-contain mb-10"
              />
            </Link>

            {/* Phone & Email */}
            <div className="space-y-4">
              <motion.a
                href={`tel:${contactInfo.phone}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 transition-all duration-300 group"
              >
                <div className="p-2 bg-[#02b0f0]/10 rounded-full group-hover:bg-[#02b0f0] transition-colors duration-300">
                  <Phone className="w-4 h-4 text-[#02b0f0] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-medium group-hover:text-[#02b0f0] transition-colors">
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
                className="flex items-center gap-3 transition-all duration-300 group"
              >
                <div className="p-2 bg-[#02b0f0]/10 rounded-full group-hover:bg-[#02b0f0] transition-colors duration-300">
                  <Mail className="w-4 h-4 text-[#02b0f0] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-medium group-hover:text-[#02b0f0] transition-colors">
                  {contactInfo.email}
                </span>
              </motion.a>
            </div>

            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s, index) => (
                <motion.a
                  key={index}
                  href={s.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  target="_blank"
                  className="cursor-pointer p-2 rounded-full bg-[#02b0f0]/10 hover:bg-[#02b0f0] transition-colors duration-300 text-[#02b0f0] hover:text-white mt-6"
                >
                  {s.icon && <s.icon className="w-6 h-6" />}
                </motion.a>
              ))}
            </div>
          </motion.div>
          {/* Column 1 - Office Addresses & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Offices */}
            <div>
              <h4 className="text-lg font-bold  flex items-center gap-2 mb-2">
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
                  className="block p-5 rounded-xl shadow-lg bg-[#02b0f0]/5 transition-all duration-300 cursor-pointer mb-4"
                >
                  <h5 className="font-semibold mb-2">{office.name}</h5>
                  <p className="flex items-start gap-2 text-sm text-[#02b0f0] transition-colors">
                    <MapPin className="w-4 h-4 text-[#02b0f0] mt-0.5 shrink-0" />
                    {office.address}
                  </p>
                </motion.a>
              ))}
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
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#02b0f0]" />
                Certifications
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {certifications.map((cert, index) => (
                  <p key={index} className="text-xs mt-1">
                    {cert.name}
                  </p>
                ))}
              </div>
            </div>

            {/* Affiliations */}
            <div>
              <h4 className="text-lg font-bold  mb-4 flex items-center gap-2">
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
                    className="cursor-pointer"
                  >
                    <img
                      src={affiliation.image}
                      alt={affiliation.name}
                      className="w-20 h-12 mr-2 "
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetTouch;
