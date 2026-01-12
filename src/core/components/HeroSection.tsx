import Image from "next/image";
import heroBanner from "../../assets/hero-banner.jpg";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <Image
        src={heroBanner}
        alt="Hero Banner"
        className="w-full h-full object-cover rounded-2xl mb-12 shadow-2xl z-0"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-2xl mb-6">
          My Road
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl drop-shadow-lg">
          A collection of thoughts, achievements, and lessons learned along the
          way.
        </p>

        <div className="flex items-center justify-center gap-4 my-8">
          <a
            href="#"
            className="px-6 py-3 border-2 border-amber-400 text-lg text-amber-400 rounded-full hover:bg-amber-400 hover:text-gray-900 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* The overlayers on the image */}
      <div className="hero-section-overlay"></div>
    </section>
  );
}
