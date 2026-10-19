import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" className="w-full border border-gray-300 p-2 rounded-lg" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="w-full border border-gray-300 p-2 rounded-lg" placeholder="Your Email" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea className="w-full border border-gray-300 p-2 rounded-lg" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
