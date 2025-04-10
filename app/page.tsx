"use client";

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
              <h4 className="text-[#d57e00] font-semibold text-lg md:text-xl font-medium mb-4">
                Math Club Competition
              </h4>
              <p className="text-white text-lg mb-6 max-w-2xl">
                The NCSSM Math Club Competition, or NC(SMC)<sup>2</sup>, is an annual math competition that brings together middle schoolers across North Carolina. The competition will be held virtually this year.
              </p>
              <a 
                onClick={() => window.open("https://forms.gle/BABr2xtG2Jewiej1A" )}
                className="inline-block px-6 py-3 bg-[#f4c300] hover:bg-[#f4c300]/90 text-gray-900 font-medium rounded-md transition-colors duration-200"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
