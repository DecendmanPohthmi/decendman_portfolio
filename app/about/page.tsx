import Navbar from "../components/page";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black text-white px-10 py-20 flex items-center justify-center">
        
        <div className="max-w-5xl grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT - IMAGE */}
          <div className="relative w-full h-[400px]">
            <div className="absolute inset-0 bg-violet-500 rounded-[60%_40%_30%_70%]" />

            <Image
              src="/profile.png"
              alt="profile"
              fill
              className="object-contain"
            />
          </div>

          {/* RIGHT - TEXT */}
          <div>
            <h1 className="text-4xl font-bold mb-6">
              About Me
              <div className="w-16 h-1 bg-violet-500 mt-2"></div>
            </h1>

            <p className="text-gray-300 mb-4">
              I am a Computer Science student with a strong passion for building
              impactful and scalable software solutions. I enjoy working with modern
              technologies like React, Node.js, and databases to create efficient
              applications.
            </p>

            <p className="text-gray-300 mb-4">
              I have experience in full-stack development and love solving real-world
              problems through code. My focus is on writing clean, optimized, and
              maintainable code.
            </p>

            <p className="text-gray-300">
              My goal is to bridge the digital divide in rural areas by building
              technology that improves access to education, healthcare, and essential
              services.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}