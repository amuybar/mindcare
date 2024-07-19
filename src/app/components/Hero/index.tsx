import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className="relative container mx-auto px-4 py-24">
      {/* Blurred background image for small screens */}
      <div className="absolute inset-0 lg:hidden">
      <Image
            src="/images/Default_A_contemplative_black_teenager_sitting_in_a_dimly_lit_0.jpg"
            alt="Therapy session"
            layout="responsive"
            width={600}
            height={400}
            className="rounded-lg shadow-md blur-sm"
          />
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-4xl md:text-5xl text-sky-900 font-bold mb-4">
            Discover a New Path to Wellness with Expert Guidance.
          </h1>
          <p className="text-lg text-sky-900 mb-6">
            At Mindcare, we are dedicated to supporting your mental health journey with personalized care and compassionate professionals. Whether youre seeking relief from stress or looking for guidance through lifes challenges, our experts are here to help.
          </p>
          <div className="flex mb-8">
            <Link href='/book-appointment' className="bg-blue-600 text-white px-6 py-2 rounded-md mr-4">
              Book an Appointment
            </Link>
            <button className="flex items-center text-orange-400 hover:text-orange-500 transition-colors">
              <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center mr-2 hover:bg-orange-500 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <span className="font-semibold">Learn More</span>
            </button>
          </div>
          <div className="flex justify-between text-center">
            <div>
              <p className="text-3xl font-bold text-orange-400 border-b-2 border-b-gray-800 inline-block">5+</p>
              <p className="text-sm text-sky-800">Years of Expertise</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-400 border-b-2 border-yellow-400 inline-block">200+</p>
              <p className="text-sm text-sky-800">Clients Supported This Year</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-400 border-b-2 border-b-gray-800 inline-block">98%</p>
              <p className="text-sm text-sky-800">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 hidden lg:block">
          <div className="relative w-full aspect-[4/3] max-w-2xl">
            <div className="absolute top-0 left-0 w-[95%] h-[95%] bg-slate-800 rounded-lg"></div>
            <div className="absolute bottom-0 right-0 w-[95%] h-[95%] bg-neutral-900 rounded-lg"></div>
            <div className="absolute top-6 left-6 right-6 bottom-6 z-10">
              <Image
                src="/images/Default_A_contemplative_black_teenager_sitting_in_a_dimly_lit_0.jpg"
                alt="Therapist and client in session"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
