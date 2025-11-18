import React from "react";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";

const ContactUsPage = () => {
  const contactInfo = [
    {
      icon: <MapPin className="text-orange-500" size={24} />,
      title: "Our Location",
      detail:
        "Plot 1, Rupnagor Abashik Mor, 27/ka Rupnagar,Dhaka 1216 (Located west of Mirpur 11 Metro Rail Station)",
    },
    {
      icon: <Phone className="text-orange-500" size={24} />,
      title: "Call Us (WhatsApp)",
      detail: "+8801805123116",
    },
    {
      icon: <Mail className="text-orange-500" size={24} />,
      title: "Email Us",
      detail: "primedtf71@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/primedtfbd",
      name: "Facebook",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.facebook.com/primedtfbd",
      name: "Instagram",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.facebook.com/primedtfbd",
      name: "LinkedIn",
    },
  ];

  return (
    <div className="min-h-screen text-[#bf2340] font-sans antialiased">
      <div className="py-20 text-center bg-[#fb9474] border-b border-gray-800">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          <span className="text-black">GET IN</span> TOUCH
        </h1>
        <p className="mt-4 text-xl text-gray-800 max-w-xl mx-auto">
          We&apos;re here to help you with your custom DTF transfer needs. Reach
          out to our team!
        </p>
      </div>

      {/* Main Content Area: Contact Details and Form */}
      <div className="container mx-auto px-4 py-16 lg:py-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Contact Details & Map (2/3rds width on desktop) */}
          <div className="lg:col-span-1 space-y-12">
            {/* Contact Information Cards */}
            <div className="bg-[#eaeaea] p-8 rounded-xl shadow-xl space-y-6">
              <h2 className="text-3xl font-bold border-b pb-3 border-gray-700 mb-6">
                Contact Info
              </h2>

              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-gray-700 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-lg">{item.detail}</p>
                  </div>
                </div>
              ))}

              {/* Opening Hours */}
              <div className="pt-6 border-t border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-gray-700 shrink-0">
                    <Clock className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Working Hours
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Sat - Thu: 10:30 AM to 8:30 PM
                    </p>
                    <p className="text-gray-700 text-lg">
                      Sat: 10:30 AM - 2:00 PM
                    </p>
                    <p className="text-gray-700 text-lg">Fri: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-0 pb-3 border-t border-gray-700">
                <h3 className="text-xl font-bold text-center my-4 text-gray-900">
                  Connect With Us
                </h3>
                <div className="flex items-center justify-center gap-7">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-500 transition duration-300 tooltip tooltip-bottom"
                      data-tip={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (2/3rds width on desktop) */}
          <div className="lg:col-span-2 h-full">
            <div className="bg-[#eaeaea] p-8 md:p-10 rounded-xl shadow-xl">
              <h2 className="text-3xl font-bold mb-6 border-b pb-3 border-gray-700">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                {/* Name & Email Group */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text text-gray-900 font-bold">
                        Your Name
                      </span>
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className="input input-bordered rounded mt-1 w-full bg-white border-2 border-gray-400 text-gray-900 focus:border-orange-500"
                      required
                    />
                  </label>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text text-gray-900 font-bold">
                        Your Email
                      </span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="email@example.com"
                      className="input input-bordered rounded mt-1 w-full bg-white border-2 border-gray-400 text-gray-900 focus:border-orange-500"
                      required
                    />
                  </label>
                </div>

                {/* Subject Field */}
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-gray-900 font-bold">
                      Subject
                    </span>
                  </div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Inquiry about custom transfers"
                    className="input input-bordered rounded mt-1 w-full bg-white border-2 border-gray-400 text-gray-900 focus:border-orange-500"
                    required
                  />
                </label>

                {/* Message Field */}
                <label className="form-control block my-5">
                  <div className="label">
                    <span className="label-text text-gray-900 font-bold">
                      Your Message
                    </span>
                  </div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    className="textarea textarea-bordered h-36 md:h-72 mt-1 rounded w-full bg-white border-2 border-gray-400 text-gray-900 focus:border-orange-500"
                    required
                  ></textarea>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn bg-orange-500 hover:bg-orange-600 text-white border-0 w-full text-lg shadow-lg shadow-orange-500/50 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="bg-[#eaeaea] py-16 shadow">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            Find Our Location
          </h2>
          <div className="w-full h-80 rounded-xl overflow-hidden shadow-2xl border-4 border-gray-700">
            {/* Placeholder for Google Map Embed */}
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0428577676644!2d90.35354897353888!3d23.8170749862168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c10043e50f41%3A0xb25a6438095c2291!2sPrime%20DTF!5e0!3m2!1sen!2sbd!4v1761982253169!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
