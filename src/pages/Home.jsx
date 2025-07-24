import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/home/img1.jpg";
import img2 from "../assets/about/img1.jpg";
import img3 from "../assets/about/img2.jpg";
import img4 from "../assets/home/img4.jpeg";
import img5 from "../assets/home/img5.jpg";
import all from "../assets/home/dishes.avif";
import one from "../assets/home/one.jpg";
import tikka from "../assets/home/tikka.jpg";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYelp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const bannerVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const galleryVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.2 },
  },
};

const imageVariants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const bestSellerVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const reviewVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const socialVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delayChildren: 0.4, staggerChildren: 0.1 },
  },
};

const socialIconVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  hover: { scale: 1.1, transition: { duration: 0.2 } },
};

const visitUsVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.1 },
  },
};

const visitUsItemVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const Home = () => {
  const images = [img5, img2, img4, img3, tikka];

  return (
    <motion.div
      className="font-sans mt-17"
      initial="initial"
      animate="animate"
      variants={visitUsVariants}
    >
      <motion.div
        className="h-[90vh] bg-cover bg-center flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${img1})` }}
        variants={bannerVariants}
      >
        <motion.div
          className="w-[60vw] h-[60vw] max-w-[300px] max-h-[300px] bg-orange-500 text-center text-gray-900 rounded-full flex flex-col justify-center items-center px-6 shadow-lg"
          variants={bannerVariants}
        >
          <h2 className="text-lg font-semibold mb-3">
            Welcome to
            <br />
            Yatin's kitchen
          </h2>
          <p className="text-sm mb-4">Join us for great home-style cooking!</p>
          <button
            onClick={() => (window.location.href = "tel:+17803122121")}
            className="bg-black text-white py-2 px-4 rounded-full text-sm hover:bg-gray-800 transition"
          >
            Call to order
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="text-center py-12 px-4 "
        variants={galleryVariants}
      >
        <h2 className="text-3xl font- bold text-orange-500 mb-6">
          Photo Gallery
        </h2>
        <motion.div
          className="overflow-x-auto whitespace-nowrap scrollbar-hide className flex flex-wrap justify-center gap-10 py-12 px-6"
          variants={galleryVariants}
        >
          <div className="flex gap-4 px-2 snap-x">
            {images.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Dish ${index + 1}`}
                className="h-100 w-150 rounded-lg shadow-md inline-block snap-start object-cover"
                variants={imageVariants}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="text-center py-12 px-4"
        variants={bestSellerVariants}
      >
        <h2 className="text-3xl font-semibold text-orange-500 mb-6">
          Best Seller
        </h2>
        <div className="bg-white py-10 px-4 flex flex-col items-center">
          <motion.img
            src={tikka}
            alt="Butter Chicken"
            className="w-full max-w-4xl rounded-xl shadow-lg"
            variants={imageVariants}
          />
        </div>
        <h2 className="text-2xl font-semibold">Butter Chicken</h2>
        <p className="mt-8 px-4 md:px-20">
          Restaurant's worn Buttor chicken is TO DIE FOR! They definitely earned
          their spot on last year's Top Spot in Calgary, CANADA!
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center items-center bg-amber-100 gap-10 px-4 md:px-20 py-12"
        variants={reviewVariants}
      >
        <div className="w-full md:w-[45%] text-center">
          <motion.div
            className="rounded-xl shadow-md overflow-hidden"
            variants={imageVariants}
          >
            <img
              src={one}
              alt="Avenue Calgary"
              className="w-full h-[35rem] object-cover flex flex-wrap justify-center gap-10 py-12 px-6"
            />
          </motion.div>
          <div className="mt-4 px-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Avenue Calgary
            </h3>
            <p className="mt-2 text-gray-600">
              "I couldn't believe the wait to be seated here, but after tasting
              their Naan bread, I get the wait!"
            </p>
          </div>
        </div>

        <div className="w-full md:w-[45%] text-center">
          <motion.div
            className="rounded-xl shadow-md overflow-hidden"
            variants={imageVariants}
          >
            <img
              src={all}
              alt="Calgary Herald"
              className="w-full h-[35rem] object-cover flex flex-wrap justify-center gap-10 py-12 px-6"
            />
          </motion.div>
          <div className="mt-4 px-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Calgary Herald
            </h3>
            <p className="mt-2 text-gray-600">
            "The chef truly knows their craft — one of the best food spots in Calgary, CANADA."
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-white py-12 px-6 text-center mt-20"
        variants={socialVariants}
      >
        <h2 className="text-2xl font-semibold text-orange-500">Social</h2>
        <hr className="border-t-2 border-orange-500 w-1/2 mx-auto mb-4" />
        <motion.div
          className="flex justify-center gap-6 text-3xl text-gray-700"
          variants={socialVariants}
        >
          {[FaFacebookF, FaInstagram, FaXTwitter, FaYelp].map((Icon, i) => (
            <motion.a
              href="#"
              key={i}
              className="hover:opacity-75 transition"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="min-h-screen bg-white text-gray-800 px-6 py-12"
        variants={visitUsVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-3xl font-semibold text-center text-orange-500 mb-2"
            variants={visitUsItemVariants}
          >
            Visit Us
          </motion.h1>
          <motion.hr
            className="border-t-2 border-orange-400 w-1/2 mx-auto mb-4"
            variants={visitUsItemVariants}
          />

          <motion.div
            className="text-center mb-8"
            variants={visitUsItemVariants}
          >
            <h2 className="text-lg font-semibold mb-2">Special Requests?</h2>
            <p>
              Do you have dietary concerns? Questions about an upcoming event?
              Drop us a line, and we'll get back to you soon!
            </p>
          </motion.div>

          <div className="text-center mb-8 space-y-4">
            <motion.div variants={visitUsItemVariants}>
              <h2 className="text-xl font-semibold text-gray-900">
                Yatin's kitchen
              </h2>
              <p>5216 C 50th avenue, Wetaskiwin, AB, Canada, Alberta</p>
              <a
                href="tel:+17803122121"
                className="text-orange-500 font-medium block"
              >
                780-312-2121
              </a>
            </motion.div>
            <motion.div variants={visitUsItemVariants}>
              <h3 className="font-semibold text-gray-900">Yatin's gastropub</h3>
              <p>1177 1st SW, Medicine Hat, AB T1A 3Z5, Canada</p>
              <a
                href="tel:+14035279988"
                className="text-orange-600 font-medium block"
              >
                +1 403-527-9988
              </a>
            </motion.div>
          </div>

          <motion.div className="text-center" variants={visitUsItemVariants}>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Hours</h2>
            <p className="text-orange-700 mb-1">
              Open today{" "}
              <span className="font-medium">11:00 a.m. – 09:00 p.m.</span>
            </p>
            <p>Monday - Saturday: 11am - 9pm</p>
            <p>Sunday: 04.00pm - 9.00pm</p>
          </motion.div>

          <motion.div
            className="text-center mt-8"
            variants={visitUsItemVariants}
          >
            <Link
              to="/Contactus"
              className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition inline-block"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
