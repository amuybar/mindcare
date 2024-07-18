import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-4xl md:text-5xl text-sky-900 font-bold mb-4">
            Elevate Your Happiness With Expert Therapist Guidance.
          </h1>
          <p className="text-lg text-sky-900 mb-6">
            Your life being well with our compassionate experts. Were here to support you through challenges, stress relief, and personal growth.
          </p>
          <div className="flex mb-8">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md mr-4">
              Book an appointment
            </button>
            <button className="flex items-center text-orange-400 hover:text-orange-500 transition-colors">
              <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center mr-2 hover:bg-orange-500 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <span className="font-semibold">Watch</span>
            </button>
          </div>
          <div className="flex justify-between text-center">
            <div>
              <p className="text-3xl font-bold text-orange-400 border-b-2 border-b-gray-800  inline-block">1+</p>
              <p className="text-sm text-sky-800">Years of experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-400 border-b-2 border-yellow-400 inline-block">6+</p>
              <p className="text-sm text-sky-800">Patients received assistance this year</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-400 border-b-2  border-b-gray-800 inline-block">97%</p>
              <p className="text-sm text-sky-800">Client improve condition</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <div className="relative w-full aspect-[4/3] max-w-2xl">
            <div className="absolute top-0 left-0 w-[95%] h-[95%] bg-slate-800 rounded-lg"></div>
            <div className="absolute bottom-0 right-0 w-[95%] h-[95%] bg-neutral-900 rounded-lg"></div>
            <div className="absolute top-6 left-6 right-6 bottom-6 z-10">
              <Image
                src="/images/Default_A_contemplative_black_teenager_sitting_in_a_dimly_lit_3.jpg"
                alt="Therapist and client in session"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default HeroSection