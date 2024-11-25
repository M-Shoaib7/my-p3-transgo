import React from 'react';
function Mypage() {
  return (
    <main className="overflow-x-hidden">
      {/* Header Section */}
      <header className="bg-blue-900 text-white p-3 md:p-5 sticky top-0 z-50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-2xl md:text-3xl font-bold">TransGo.</div>
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8">
              <li><a href="#home" className="hover:text-yellow-400 transition-colors font-semibold">Home</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors font-semibold">Services</a></li>
              <li><a href="#about" className="hover:text-yellow-400 transition-colors font-semibold">About</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition-colors font-semibold">Contact</a></li>
            </ul>
          </nav>
          <a href="#book" className="bg-yellow-400 text-blue-900 px-5 py-2 rounded-full hover:bg-yellow-500 transition-colors">Book Now</a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-cover bg-center h-[60vh] md:h-screen relative" style={{ backgroundImage: 'url("https://thumbs.dreamstime.com/b/supply-chain-radar-digital-map-highlighting-current-data-various-factors-such-as-transportation-costs-lead-times-319314861.jpg?w=992")' }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50 px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Reliable Transportation Services at Your Fingertips</h1>
            <p className="text-lg md:text-xl mt-4">Fast, Safe, and Affordable</p>
            <a href="#quote" className="bg-yellow-400 text-blue-900 px-4 md:px-6 py-2 md:py-3 mt-5 inline-block text-base md:text-lg rounded-full hover:bg-yellow-500 transition-colors">Get a Quote</a>
          </div>
        </div>
      </section>


      {/* about section */}

      <section>
        {/* About Section */}
<section id="about" className="py-12 md:py-20 bg-gray-50 px-4">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Our Journey Since 2004</h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          For over two decades, TransGo has been revolutionizing the transportation industry with innovative solutions and unwavering commitment to excellence. What started as a small local operation has grown into a global transportation leader, serving thousands of satisfied customers worldwide.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">20+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">5000+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-900">Why Choose TransGo?</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span className="text-gray-600">24/7 Customer Support</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span className="text-gray-600">Real-time Tracking</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span className="text-gray-600">Nationwide Coverage</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative h-[400px] md:h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
          alt="TransGo facility" 
          className="w-full h-full object-cover rounded-lg shadow-xl"
        />
        <div className="absolute bottom-4 left-4 bg-blue-900 text-white p-4 rounded-lg shadow-lg">
          <p className="text-lg font-semibold">ISO 9001:2015 Certified</p>
          <p className="text-sm">Quality Management System</p>
        </div>
      </div>
    </div>
  </div>
</section>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 bg-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Our Services</h2>
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
            <div className="service-card p-4 md:p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5eqiAPVVF88iASyhTB4WCm_Ize2DnI6vGW9rPe4GfJcCKu_pyekElO387jgpXb-ya2P0&usqp=CAU" alt="Trucking" className="mx-auto h-24 md:h-30 object-cover rounded"></img>
              <h3 className="text-lg md:text-xl font-semibold mt-4 md:mt-6">Nationwide Freight Shipping</h3>
              <p className="mt-2 text-gray-600 text-sm md:text-base">We offer fast and reliable nationwide shipping for all your freight needs.</p>
            </div>
            <div className="service-card p-4 md:p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEPP8bXgMSsowuabZHILUKkGS_qd3_ncrJrg&s" alt="Cargo Shipping" className="mx-auto h-24 md:h-30 object-cover rounded"></img>
              <h3 className="text-lg md:text-xl font-semibold mt-4 md:mt-6">Global Cargo Transport</h3>
              <p className="mt-2 text-gray-600 text-sm md:text-base">We manage international cargo shipping with care and efficiency.</p>
            </div>
            <div className="service-card p-4 md:p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src="https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/blue-bus?qlt=82&wid=1024&ts=1660212095501&dpr=off&fit=constrain" alt="Passenger Transport" className="mx-auto h-24 md:h-30 object-cover rounded"></img>
              <h3 className="text-lg md:text-xl font-semibold mt-4 md:mt-6">Comfortable Passenger Services</h3>
              <p className="mt-2 text-gray-600 text-sm md:text-base">Travel in comfort with our premium passenger transport options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-blue-900 text-white py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">What Our Clients Say</h2>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 mt-8 md:mt-12 justify-center">
            <div className="testimonial p-4 md:p-6 bg-gray-800 rounded-lg shadow-lg max-w-xs mx-auto md:mx-0 hover:bg-gray-700 transition-colors">
              <p className="text-base md:text-lg">"The best service we've ever used! Quick and reliable. Definitely recommend!"</p>
              <p className="mt-4 font-semibold">Hassan Zaidi</p>
              <p className="text-yellow-400">CEO, Techno Logistics</p>
            </div>
            <div className="testimonial p-4 md:p-6 bg-gray-800 rounded-lg shadow-lg max-w-xs mx-auto md:mx-0 hover:bg-gray-700 transition-colors">
              <p className="text-base md:text-lg">"Safe, efficient, and easy to book. We'll always use TransGo for our deliveries!"</p>
              <p className="mt-4 font-semibold">Samad Tabani</p>
              <p className="text-yellow-400">Manager, Swift Freight</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}

      <section>
        {/* Contact Form Section */}
<section id="contact" className="py-12 md:py-20 bg-gray-50 px-4">
  <div className="container mx-auto">
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Get In Touch</h2>
      <p className="text-gray-600 mt-4">Have questions? We'd love to hear from you.</p>
    </div>
    
    <div className="max-w-3xl mx-auto">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Required</label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
            required
          >
            <option value="">Select a service</option>
            <option value="freight">Nationwide Freight Shipping</option>
            <option value="cargo">Global Cargo Transport</option>
            <option value="passenger">Passenger Services</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
            placeholder="Tell us about your transportation needs"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-colors font-semibold inline-flex items-center space-x-2"
          >
            <span>Send Message</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</section>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8 md:py-10 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-5">
            <h3 className="text-xl md:text-2xl font-bold">About TransGo</h3>
            <p className="text-sm md:text-base">We provide fast, secure, and affordable transportation solutions across the globe. With over 20 years of experience, we are the trusted choice for businesses and individuals alike.</p>
          </div>
          <div className="flex justify-center space-x-6 md:space-x-8 mt-6">
            <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">Facebook</a>
            <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">Twitter</a>
            <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">LinkedIn</a>
          </div>
          <p className="mt-6 text-gray-400 text-sm">&copy; 2024 TransGo. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}

export default Mypage;