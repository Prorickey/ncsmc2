"use client";

import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <section className="py-2 md:py-10 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="py-4 md:py-10 px-4 md:px-10">
              <h1 className="text-[#f4c300] text-5xl md:text-6xl font-bold mb-2">
                NC(SMC)<sup>2</sup>
              </h1>
              <h3 className="text-[#99caea] text-xl md:text-2xl font-semibold mb-2">
                North Carolina School of Science and Mathematics
              </h3>
              <h4 className="text-[#d57e00] font-semibold text-lg md:text-xl mb-4">
                Math Club Competition - May 10th
              </h4>
              <p className="text-white text-lg mb-3 max-w-2xl">
                The NCSSM Math Club Competition, or NC(SMC)<sup>2</sup>, is an annual math competition that brings together middle schoolers across North Carolina. The competition will be held virtually this year.
              </p>
              <p className='text-white text-lg mb-3 font-bold'>Registration deadline is 11:59 PM, May 8th</p>
              <p className="text-lg mb-3">Contact: <a href="mailto:ncsmc2@gmail.com" className="underline underline-offset-3 decoration-[#f4c300]">ncsmc2@gmail.com</a></p>
              <a 
                onClick={() => window.open("https://forms.gle/BABr2xtG2Jewiej1A" )}
                className="inline-block px-6 py-3 bg-[#f4c300] hover:bg-[#f4c300]/90 
                text-gray-900 font-medium rounded-md transition-colors duration-200 cursor-pointer"
              >
                Register
              </a>
            </div>
            <Image 
              src={'/contest-logo.png'} 
              alt={'Contest Logo'}
              height={500}
              width={500}
            />
          </div>
        </div>
      </section>
      <section className="py-10 text-white">
        <div className='w-[85%] p-10 pl-0 rounded-r-[5rem] bg-primary-blue'>
          <div className='flex flex-row'>
            <div className='h-1 rounded-r-md bg-secondary-orange w-1/6 my-auto mr-4'></div>
            <h1 className='text-4xl font-semibold text-nowrap'>Scoring</h1>
          </div>
          <div className='flex flex-row mt-2'>
            <div className='w-1/6 my-auto mr-4'></div>
            <p className='text-lg w-2/3'>
            There will be individual winners and team winners. The individual score = 
            (# of speed round questions correct) + 2 * (# of target round questions correct). 
            The team score = # of team round questions correct. If two teams tie for the team 
            score, then individual scores will be considered as a tiebreaker.
            </p>
          </div>
          <div className='flex flex-row mt-10'>
            <div className='h-1 rounded-r-md bg-secondary-blue w-1/6 my-auto mr-4'></div>
            <h1 className='text-4xl font-semibold text-nowrap'>Rules</h1>
          </div>
          <div className='flex flex-row mt-2'>
            <div className='w-1/6 my-auto mr-4'></div>
            <ul className='text-lg mt-2 space-y-2 w-5/6'>
              <li className='list-disc'>No calculators or compasses.</li>
              <li className='list-disc'>No giving or accepting unauthorized assistance of any kind.</li>
              <li className='list-disc'>No copying another's work to submit as your own.</li>
              <li className='list-disc'>No use of AI, machine learning tools, or automated problem solvers (e.g., ChatGPT, WolframAlpha, Symbolab, etc.).</li>
              <li className='list-disc'>No other items other than a writing utensil and paper except those specifically permitted by instructors.</li>
              <li className='list-disc'>No turning off camera or stopping screen sharing during the test.</li>
              <li className='list-disc'>No working on tests after the allotted time has ended.</li>
              <li className='list-disc'>No violations of this honor pledge, subject to disqualification.</li>
            </ul>
          </div>
          <div className='flex flex-row mt-10'>
            <div className='h-1 rounded-r-md bg-secondary-yellow w-1/6 my-auto mr-4'></div>
            <h1 className='text-4xl font-semibold text-nowrap'>Eligibility</h1>
          </div>
          <div className='flex flex-row mt-2'>
            <div className='w-1/6 my-auto mr-4'></div>
            <ul className='text-lg mt-2 space-y-2 w-5/6'>
              <li className='list-disc'>Students in grades 6-8 are eligible to compete.</li>
              <li className='list-disc'>Students must be residents of North Carolina.</li>
              <li className='list-disc'>Students must register by the deadline - May 8th.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
