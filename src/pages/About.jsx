import React from "react";
import { motion } from "framer-motion";
import taj from "../assets/about/tajmahal.jpg";
import img1 from "../assets/about/img1.jpg";
import img2 from "../assets/about/img2.jpg";
import img3 from "../assets/about/room.avif";
import img4 from "../assets/about/saif.jpg";
import img5 from "../assets/about/img3.jpg";

const sectionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imageVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const textVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const contactVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.3, duration: 0.6 } },
};

const locationVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4, staggerChildren: 0.2 } },
};

const locationItemVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const About = () => {
  const sections = [
    {
      title: "Our Philosophy",
      image: img5,
      description:
        "Yatin’s kitchen is more than just a restaurant, it's a celebration of Indian culture and cuisine. We believe in using authentic ingredients and traditional cooking methods to create dishes that are not only delicious but also nourishing and healthy.",
    },
    {
      title: "Our Chef",
      image: img4,
      description:
        "Our head chef, Raj, has over 20 years of experience in the culinary industry. He has worked in some of the best Indian restaurants in the world and brings his expertise and passion to every dish he creates.",
    },
    {
      title: "Our Atmosphere",
      image: img3,
      description:
        "At Yatin’s kitchen, we believe that dining out should be a memorable experience. That’s why we have created a warm and inviting atmosphere that celebrates the beauty of Indian culture.",
    },
  ];
  return (
    <motion.div
      className="bg-orange-50 min-h-screen mt-18"
      initial="initial"
      animate="animate"
      variants={sectionVariants}
    >
      <section className="flex flex-wrap justify-center gap-10 py-12 px-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden text-center p-4"
            variants={sectionVariants}
          >
            <motion.img
              src={section.image}
              alt={section.title}
              className="w-full h-120 object-cover rounded-xl mb-4"
              variants={imageVariants}
              whileHover="hover"
            />
            <motion.h3
              className="text-xl font-bold text-amber-500 mb-2"
              variants={textVariants}
            >
              {section.title}
            </motion.h3>
            <motion.p
              className="text-sm text-gray-600 leading-relaxed"
              variants={textVariants}
            >
              {section.description}
            </motion.p>
          </motion.div>
        ))}
      </section>

      <motion.div
        className="bg-white py-10 px-4 flex flex-col items-center"
        variants={contactVariants}
      >
        <motion.img
          src={taj}
          alt="Taj Mahal through arch"
          className="w-full max-w-4xl rounded-xl shadow-lg mb-8"
          variants={imageVariants}
          whileHover="hover"
        />

        <div className="text-center max-w-2xl">
          <motion.h2
            className="text-xl font-semibold text-gray-800 mb-4"
            variants={textVariants}
          >
            Our Chef and Staff
          </motion.h2>
          <motion.p
            className="text-gray-600 text-sm leading-relaxed"
            variants={textVariants}
          >
            With 30 years of experience cooking in the finest restaurants, our
            chef is excited to present their vision to you and all our guests.
            Our caring and committed staff will ensure you have a fantastic
            experience with us.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="bg-white px-6 py-10 flex flex-col items-center"
        variants={contactVariants}
      >
        <div className="flex flex-col md:flex-row justify-center gap-10 mb-16">
          <motion.div
            className="max-w-sm text-center"
            variants={sectionVariants}
          >
            <motion.img
              src={img1}
              alt="Special Events"
              className="rounded-lg shadow-md mb-4 w-full h-80"
              variants={imageVariants}
              whileHover="hover"
            />
            <motion.h3
              className="text-lg font-semibold text-gray-800 mb-2"
              variants={textVariants}
            >
              Special Events and Catering
            </motion.h3>
            <motion.p
              className="text-gray-600 text-sm"
              variants={textVariants}
            >
              Our restaurant is available for private events: weddings, business
              lunches, dinners, cocktail receptions, and more. We would love to
              discuss how to be a part of your next event.
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-sm text-center"
            variants={sectionVariants}
          >
            <motion.img
              src={img2}
              alt="Seasonal and Local"
              className="rounded-lg shadow-md mb-4 h-80 w-full"
              variants={imageVariants}
              whileHover="hover"
            />
            <motion.h3
              className="text-lg font-semibold text-gray-800 mb-2"
              variants={textVariants}
            >
              Seasonal and Local
            </motion.h3>
            <motion.p
              className="text-gray-600 text-sm"
              variants={textVariants}
            >
              We refuse to compromise on quality in our restaurant. That’s why
              we source our fresh ingredients from local farmers' markets.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="w-full max-w-2xl text-center border-t border-orange-300 pt-10"
          variants={contactVariants}
        >
          <motion.h2 className="text-orange-500 text-xl font-semibold mb-4" variants={textVariants}>
            Contact Us
          </motion.h2>
          <motion.p className="text-gray-700 mb-6" variants={textVariants}>
            Drop us a line!
          </motion.p>
          <motion.form className="space-y-4" variants={textVariants}>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300"
            >
              Send Message
            </button>
            <p className="text-sm text-center text-gray-600">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
          </motion.form>
          <div className="text-center">
            <motion.h2 className="text-xl font-semibold mb-2 mt-20" variants={textVariants}>
              Better yet, see us in person!
            </motion.h2>
            <motion.p className="text-gray-700" variants={textVariants}>
              We love our customers, so feel free to visit during normal
              business hours.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-5 flex flex-col items-center justify-center bg-white text-gray-800 px-4 py-10"
        variants={locationVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <motion.div variants={locationItemVariants}>
            <h3 className="font-bold text-lg mb-2">Yatin's kitchen</h3>
            <p>1177 1st Medicine hat, Alberta, Canada,</p>
            <p>5216 c 50th avenue, Wetaskiwin, AB,</p>
            <p>Canada, Alberta</p>
            <p className="mt-2 text-orange-600">+1 (403)-527-9988</p>
            <p className="text-orange-600">+1 (780)-312-2121</p>
          </motion.div>

          <motion.div variants={locationItemVariants}>
            <h3 className="font-bold text-lg mb-2">Hours</h3>
            <p>
              Mon <span className="text-gray-600">06:00 a.m. – 11:00 p.m.</span>
            </p>
            <p>
              Tue <span className="text-gray-600 font-bold">06:00 a.m. – 11:00 p.m.</span>
            </p>
            <p>
              Wed <span className="text-gray-600 font-bold">06:00 a.m. – 11:00 p.m.</span>
            </p>
            <p>
              Thu <span className="text-gray-600">06:00 a.m. – 11:00 p.m.</span>
            </p>
            <p>
              Fri <span className="text-gray-600">06:00 a.m. – 11:00 p.m.</span>
            </p>
            <p>
              Sat <span className="text-gray-600">Closed</span>
            </p>
            <p>
              Sun <span className="text-gray-600">Closed</span>
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Monday to Sunday <br />
              11:00 am to 10:00 pm
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;