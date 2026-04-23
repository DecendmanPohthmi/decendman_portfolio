import Navbar from "../components/page";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        
        <div className="w-full max-w-2xl">
          
          {/* Title */}
          <h1 className="text-4xl font-bold text-center mb-10">
            Contact Me
            <div className="w-20 h-1 bg-violet-500 mx-auto mt-2"></div>
          </h1>

        </div>
      </section>
    </>
  );
}