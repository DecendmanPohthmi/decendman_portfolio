import Image from "next/image";
import Navbar from "../components/page";

export default function Projects() {
  // ✅ JSON DATA
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
    <>
      <Navbar />
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
    </>
  );
}
