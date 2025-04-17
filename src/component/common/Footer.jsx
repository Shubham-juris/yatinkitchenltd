// import React from 'react'

// const Footer = () => {
//   return (
//     <>
//        <footer className="bg-black text-white mt-12 pt-8 pb-4 px-4">
//       <div className="text-center">
       
//         <p className="text-sm text-gray-400 mb-1">
//           Copyright © 2018 Yatin’s kitchen - All Rights Reserved.
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
            Copyright © 2018 Yatin’s kitchen - All Rights Reserved.
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
