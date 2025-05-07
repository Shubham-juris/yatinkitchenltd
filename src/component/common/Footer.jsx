// import React from 'react'

// const Footer = () => {
//   return (
//     <>
//        <footer className="bg-black text-white mt-12 pt-8 pb-4 px-4">
//       <div className="text-center">
       
//         <p className="text-sm text-gray-400 mb-1">
//           Copyright © 2025 Yatin’s kitchen - All Rights Reserved.
//         </p>
//         <p className="text-sm text-gray-400">
//           Powered by <span className="text-white">KTL Software Inc.</span>
//         </p>
//       </div>
//     </footer>
//     </>
//   )
// }

// export default Footer
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const linkVariants = {
  hover: {
    scale: 1.1,
    color: '#f97316', // text-orange-500
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
};
{/* Google Map Embed for Wetaskiwin Location */}
<div className="mt-12">
  <iframe
    title="Trafficology Wetaskiwin Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.603588507815!2d-113.37349742300177!3d52.97238677179825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a9565b3f478dc3%3A0x3de25739e1be776!2s5216C%2050%20Ave%2C%20Wetaskiwin%2C%20AB%20T9A%200S8%2C%20Canada!5e0!3m2!1sen!2sca!4v1715082233802"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-lg shadow-md"
  />
</div>


const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white mt-12 py-8 px-6 md:px-12"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-orange-500 mb-2">Yatin's Kitchen</h3>
          <p className="text-sm text-gray-400 mb-1">
            Copyright © 2025 Yatin’s kitchen - All Rights Reserved.
          </p>
          <p className="text-sm text-gray-400">
            Powered by <span className="text-white">KTL Software Inc.</span>
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <motion.a
            href="https://facebook.com" // Replace with your Facebook link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-500 transition duration-300"
            variants={linkVariants}
            whileHover="hover"
          >
            <FaFacebook size={24} />
          </motion.a>
          <motion.a
            href="https://twitter.com" // Replace with your Twitter link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-500 transition duration-300"
            variants={linkVariants}
            whileHover="hover"
          >
            <FaTwitter size={24} />
          </motion.a>
          <motion.a
            href="https://instagram.com" // Replace with your Instagram link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-500 transition duration-300"
            variants={linkVariants}
            whileHover="hover"
          >
            <FaInstagram size={24} />
          </motion.a>
          <motion.a
            href="mailto:info@yatinskitchen.com" // Replace with your email address
            className="text-gray-400 hover:text-orange-500 transition duration-300"
            variants={linkVariants}
            whileHover="hover"
          >
            <FaEnvelope size={24} />
          </motion.a>
        </div>

        <div className="text-center md:text-right">
          <h4 className="text-sm font-semibold text-gray-400 mb-1">
            Follow Us
          </h4>
          {/* Social icons are already above */}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
