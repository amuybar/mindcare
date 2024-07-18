import Image from 'next/image';

const TherapyServices = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-navy-900 text-slate-700 p-6 rounded-lg">
          <blockquote className="mb-4">
            ``Physical therapy is crucial for rectifying, enhancing mobility and strength to help patients regain their independence and improve their quality of life.``
          </blockquote>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
            <div>
              <p className="font-bold text-slate-700">Barrack Amuyunzu</p>
              <p className="text-sm text-slate-700">Physical Therapist</p>
            </div>
          </div>
        </div>

        <div className="bg-peach-200 p-6 rounded-lg text-slate-700">
          <h2 className="text-4xl font-bold mb-2">2+</h2>
          <h3 className="text-xl font-semibold mb-2">Specialist Doctors</h3>
          <p>Therapy specialists diagnose and treat health conditions, providing personalized care for optimal well-being.</p>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-1 relative">
          <Image
            src="/images/Default_A_contemplative_black_teenager_sitting_in_a_dimly_lit_0.jpg"
            alt="Therapy session"
            layout="responsive"
             width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

        <div className="relative">
          <Image
            src="/images/Default_A_contemplative_black_teenager_sitting_in_a_dimly_lit_1.jpg"
            alt="Consultation session"
            layout="responsive"
             width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

        <div className="bg-navy-900 text-slate-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Give us a call</h3>
          <p className="text-2xl font-bold mb-4">+254742812483</p>
          <p className="mb-4">Book a consultation with our doctors for personalized treatment.</p>
          <button className="bg-peach-200 text-orange-500 px-4 py-2 rounded-lg font-semibold">
            Require Help?
          </button>
        </div>

        <div className="relative">
          <Image
            src="/images/Default_A_contemplative_black_teenager_sitting_in_a_dimly_lit_2.jpg"
            alt="Free consultation"
            layout="responsive"
             width={600}
            height={400}
            className="rounded-lg"
          />
          <div className="absolute bottom-4 right-4">
            <a href="#" className="text-blue-600 font-semibold flex items-center">
              Free Consultation
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyServices;
