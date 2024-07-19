import Image from 'next/image';

const TherapyServices = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-sky-900 mb-2">Personalized Therapy</h3>
            <p className="text-gray-700 mb-4">
              Our expert therapists provide tailored sessions to help you overcome challenges and achieve personal growth.
            </p>
          </div>
          <div className="flex items-center mt-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex items-center justify-center">
              <span className="text-gray-600 text-xl font-semibold">BA</span>
            </div>
            <div>
              <p className="font-bold text-sky-900">Barrack Amuyunzu</p>
              <p className="text-sm text-gray-600">Physical Therapist</p>
            </div>
          </div>
        </div>

        <div className="bg-sky-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-sky-900 mb-2">Our Expertise</h2>
          <h3 className="text-xl font-semibold mb-4">2+ Specialist Doctors</h3>
          <p className="text-gray-700">
            Our team of experienced specialists is dedicated to diagnosing and treating various health conditions with personalized care.
          </p>
        </div>

        <div className="relative col-span-1 md:col-span-2 lg:col-span-1">
          <Image
            src="/images/Default_A_contemplative_black_teenager_sitting_in_a_dimly_lit_0.jpg"
            alt="Therapy session"
            layout="responsive"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="relative">
          <Image
            src="/images/Default_A_contemplative_black_teenager_sitting_in_a_dimly_lit_1.jpg"
            alt="Consultation session"
            layout="responsive"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
          <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-lg">
            <a href="#" className="text-blue-600 font-semibold flex items-center">
              Free Consultation
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-sky-900 mb-2">Contact Us</h3>
          <p className="text-gray-700 text-2xl font-bold mb-4">+254742812483</p>
          <p className="text-gray-700 mb-4">
            Schedule a consultation with our doctors for personalized treatment and support.
          </p>
          <button className="bg-sky-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-sky-600 transition-colors">
            Require Help?
          </button>
        </div>
      </div>
    </div>
  );
};

export default TherapyServices;
