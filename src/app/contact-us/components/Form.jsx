"use client";
import React, { useState } from "react";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [sendSucess, setsendSucess] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    setsendSucess(false);
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries([...formData.entries()]);
    fetch("https://prime-dtf-backend.vercel.app/api/v1/messages/send/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.email) {
          setsendSucess(true);
          e.target.reset();
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setsendSucess(false);
      });
  };

  {
    if (loading)
      return (
        <div className="fixed inset-0 z-50 bg-white bg-opacity-50 flex items-center justify-center">
          <div className="animate-spin h-20 w-20 border-b-4 border-orange-500 rounded-full">
            {/* Loading Spinner */}
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
  }
  return (
    <>
      {sendSucess && (
        <h3 className="text-3xl font-bold text-green-600 mb-6">
          Message sent successfully
        </h3>
      )}
      <form className="space-y-6" onSubmit={handleSubmit}>
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
            <span className="label-text text-gray-900 font-bold">Subject</span>
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
          Send Message
        </button>
        {sendSucess && (
          <h3 className="text-3xl font-bold text-green-600 mb-6">
            Message sent successfully
          </h3>
        )}
      </form>
    </>
  );
};

export default Form;
