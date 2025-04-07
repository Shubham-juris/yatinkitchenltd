import React from "react";
import img from "../assets/home/img.jpg";
import img1 from "../assets/home/img1.jpg";
import chicken from "../assets/home/buttor.jpg";
import all from '../assets/home/all.webp'
import one from '../assets/home/one.jpg'
import tikka from '../assets/home/tikka.jpg'


import { FaFacebookF, FaInstagram, FaXTwitter, FaYelp } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div
        className="h-[90vh] bg-cover bg-center flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="w-72 h-72 bg-orange-400 text-center text-gray-900 rounded-full flex flex-col justify-center items-center px-6 shadow-lg">
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
        </div>
      </div>

      <div className="text-center py-12 px-4">
        <h2 className="text-2xl font-semibold text-orange-700 mb-6">
          Photo Gallery
        </h2>
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex gap-4 px-2 snap-x">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={img}
                alt={`Dish ${index + 1}`}
                className="h-60 rounded-lg shadow-md inline-block snap-start"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center py-12 px-4">
        <h2 className="text-2xl font-semibold text-orange-700 mb-6">
          Best Seller
        </h2>
        <div className="bg-white py-10 px-4 flex flex-col items-center">
               <img
                 src={tikka}
                 alt="Taj Mahal through arch"
                 className="w-full max-w-4xl rounded-xl shadow-lg mb-8"
               />
        </div>
        <h2 className="text-2xl font-semibold mt-8">Butter Chicken</h2>
        <p className="mt-8 px-4 md:px-20">
          Restaurant's worn Buttor chicken is TO DIE FOR! They definitely earned
          their spot on last year's Top Spot in Calgary, CANADA!
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 px-4 md:px-20">
        <div className="w-full md:w-[45%] text-center">
          <div className="rounded-xl shadow-md overflow-hidden">
            <img
              src={one}
              alt="Avenue Calgary"
              className="w-full h-[35rem] object-cover"
            />
          </div>
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
          <div className="rounded-xl shadow-md overflow-hidden">
            <img
              src={all}
              alt="Calgary Herald"
              className="w-full h-[35rem] object-cover"
            />
          </div>
          <div className="mt-4 px-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Calgary Herald
            </h3>
            <p className="mt-2 text-gray-600">
              "The chef knows their way around Tandoori chicken; one of the best
              food spots in Calgary, CANADA."
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 px-6 text-center mt-20">
        <h2 className="text-2xl font-semibold text-orange-800">Social</h2>
        <hr className="border-t-2 border-orange-400 w-1/2 mx-auto mb-4" />
        <div className="flex justify-center gap-6 text-3xl text-gray-700">
          {[FaFacebookF, FaInstagram, FaXTwitter, FaYelp].map((Icon, i) => (
            <a href="#" key={i} className="hover:opacity-75 transition">
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold text-center text-orange-800 mb-2">
            Visit Us
          </h1>
          <hr className="border-t-2 border-orange-400 w-1/2 mx-auto mb-4" />

          <div className="text-center mb-8">
            <h2 className="text-lg font-semibold mb-2">Special Requests?</h2>
            <p>
              Do you have dietary concerns? Questions about an upcoming event?
              Drop us a line, and we'll get back to you soon!
            </p>
          </div>

          <div className="text-center mb-8 space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Yatin's kitchen
              </h2>
              <p>5216 C 50th avenue, Wetaskiwin, AB, Canada, Alberta</p>
              <a
                href="tel:+17803122121"
                className="text-orange-600 font-medium block"
              >
                780-312-2121
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Yatin's gastropub</h3>
              <p>1177 1st SW, Medicine Hat, AB T1A 3Z5, Canada</p>
              <a
                href="tel:+14035279988"
                className="text-orange-600 font-medium block"
              >
                +1 403-527-9988
              </a>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Hours</h2>
            <p className="text-orange-700 mb-1">
              Open today{" "}
              <span className="font-medium">11:00 a.m. – 09:00 p.m.</span>
            </p>
            <p>Monday - Saturday: 11am - 9pm</p>
            <p>Sunday: 04.00pm - 9.00pm</p>
          </div>

          <div className="text-center mt-8">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
