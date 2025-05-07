import React from 'react'

const Contactus = () => {
  return (
    <>
     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 mt-20">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-8">
          Contact Us
        </h2>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-semibold">First Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              rows="4"
              placeholder="Your message here..."
              className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
       {/* Google Map Embed for Wetaskiwin Location */}
<div className="ab">
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

    </div> 
    </>
  )
}

export default Contactus
