import React from "react";
import taj from "../assets/about/tajmahal.jpg";
import img1 from "../assets/about/img1.jpg";
import img2 from "../assets/about/img2.jpg";
import img3 from "../assets/about/room.jpg";
import img4 from "../assets/about/saif.jpg";
import img5 from "../assets/about/img3.jpg";

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
    <div className="bg-orange-50 min-h-screen">
      <section className="flex flex-wrap justify-center gap-10 py-12 px-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden text-center p-4"
          >
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-120 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold text-amber-700 mb-2">
              {section.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {section.description}
            </p>
          </div>
        ))}
      </section>

      <div className="bg-white py-10 px-4 flex flex-col items-center">
        <img
          src={taj}
          alt="Taj Mahal through arch"
          className="w-full max-w-4xl rounded-xl shadow-lg mb-8"
        />

        <div className="text-center max-w-2xl">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Our Chef and Staff
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            With 30 years of experience cooking in the finest restaurants, our
            chef is excited to present their vision to you and all our guests.
            Our caring and committed staff will ensure you have a fantastic
            experience with us.
          </p>
        </div>
      </div>

      <div className="bg-white px-6 py-10 flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center gap-10 mb-16">
          <div className="max-w-sm text-center">
            <img
              src={img1}
              alt="Special Events"
              className="rounded-lg shadow-md mb-4 w-full h-80"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Special Events and Catering
            </h3>
            <p className="text-gray-600 text-sm">
              Our restaurant is available for private events: weddings, business
              lunches, dinners, cocktail receptions, and more. We would love to
              discuss how to be a part of your next event.
            </p>
          </div>

          <div className="max-w-sm text-center">
            <img
              src={img2}
              alt="Seasonal and Local"
              className="rounded-lg shadow-md mb-4 h-80 w-full"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Seasonal and Local
            </h3>
            <p className="text-gray-600 text-sm">
              We refuse to compromise on quality in our restaurant. That’s why
              we source our fresh ingredients from local farmers' markets.
            </p>
          </div>
        </div>

        <div className="w-full max-w-2xl text-center border-t border-orange-300 pt-10">
          <h2 className="text-orange-600 text-xl font-semibold mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-6">Drop us a line!</p>
          <form className="space-y-4">
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
          </form>
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2 mt-20">
              Better yet, see us in person!
            </h2>
            <p className="text-gray-700">
              We love our customers, so feel free to visit during normal
              business hours.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col items-center justify-center bg-white text-gray-800 px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h3 className="font-bold text-lg mb-2">Yatin's kitchen</h3>
              <p>1177 1st Medicine hat, Alberta, Canada,</p>
              <p>5216 c 50th avenue, Wetaskiwin, AB,</p>
              <p>Canada, Alberta</p>
              <p className="mt-2 text-orange-600">+1 (403)-527-9988</p>
              <p className="text-orange-600">+1 (780)-312-2121</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Hours</h3>
              <p>
                Mon{" "}
                <span className="text-gray-600">06:00 a.m. – 11:00 p.m.</span>
              </p>
              <p>
                Tue{" "}
                <span className="text-gray-600 font-bold">
                  06:00 a.m. – 11:00 p.m.
                </span>
              </p>
              <p>
                Wed{" "}
                <span className="text-gray-600 font-bold">
                  06:00 a.m. – 11:00 p.m.
                </span>
              </p>
              <p>
                Thu{" "}
                <span className="text-gray-600">06:00 a.m. – 11:00 p.m.</span>
              </p>
              <p>
                Fri{" "}
                <span className="text-gray-600">06:00 a.m. – 11:00 p.m.</span>
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
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
