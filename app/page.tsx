import Image from "next/image";
import Navbar from "./components/page";

export default function Home() {
  const projects = [
    {
      title: "Smart Safety Alert System",
      desc: "A real-time SOS alert system that sends location and voice clips to emergency contacts.",
      img: "/project1.jpg",
    },
    {
      title: "MERN Portfolio",
      desc: "A modern portfolio built using MERN stack with responsive UI and optimized backend APIs.",
      img: "/project2.jpg",
    },
  ];
  return (
    <main>
      <Navbar/>

      <section className="flex items-center justify-between min-h-screen bg-black px-10 text-white">
      
      {/* LEFT SIDE */}
      <div className="max-w-xl">
        <p className="text-violet-400 font-semibold mb-4">
          SOFTWARE DEVELOPER
        </p>

        <h1 className="text-5xl font-bold leading-tight mb-6">
          Hello, my name <br /> is Decendman Pohthmi
        </h1>

        <p className="text-gray-300 mb-6">
          I’m a Computer Science student passionate about building impactful 
          software solutions. I enjoy working with modern technologies like 
          React, Node.js, and databases to create scalable and user-friendly 
          applications. My goal is to bridge the digital gap by developing 
          innovative tech solutions for real-world problems.
        </p>

        <div className="flex gap-4">
          <button className="bg-violet-500 px-6 py-2 rounded-md font-medium hover:bg-violet-600">
            Projects
          </button>

          <button className="border border-violet-400 px-6 py-2 rounded-md hover:bg-violet-400 hover:text-black">
            LinkedIn
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative w-[400px] h-[500px]">
        <div className="absolute inset-0 bg-violet-500 rounded-[60%_40%_30%_70%]" />

        <Image
          src="/profile.png" // replace with your image
          alt="profile"
          fill
          className="object-contain"
        />
      </div>
    </section>

    {/* Project page */}
    <section 
          id="projects"
          className="bg-black-200 py-20 px-10" >
            {/* Title */}
            <h2 className="text-3xl font-bold text-center mb-16">
              Projects
              <div className="w-16 h-1 bg-violet-500 mx-auto mt-2"></div>
            </h2>
    
            {/* LOOP */}
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex items-center bg-white rounded-2xl overflow-hidden mb-12 shadow-md 
              ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
              >
                {/* IMAGE */}
                <div className="w-1/2 relative h-[300px]">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
    
                {/* TEXT */}
                <div className="w-1/2 p-10">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.desc}</p>
                  <button className="border px-4 py-2 rounded-full">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </section>
    </main>
  );
}
