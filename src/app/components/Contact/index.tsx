
'use client';

const ContactComponent: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <div className="bg-opacity-30 bg-blur-md bg-white backdrop-filter backdrop-blur-sm">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Contact Form */}
          <div className="mt-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-3 block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-3 block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 p-3 block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300 text-slate-900 rounded-md"
                  required
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-sky-500 text-white rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Newsletter Form and Social Media Icons */}

          <div className="mt-8 lg:mt-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Subscribe to Our Newsletter
            </h2>
            <form className="mt-6">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <input
                  type="email"
                  id="newsletter-email"
                  name="newsletter-email"
                  className="w-full p-3 sm:w-2/3 block shadow-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300 rounded-md"
                  placeholder="Enter your email address"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-sky-500 text-white rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600 sm:w-auto"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
