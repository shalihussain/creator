import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const TYPING_TEXT = "Shali.Creator";

if (typeof window !== "undefined") {
  document.documentElement.style.scrollBehavior = "smooth";
}

const ShaliPortfolio = () => {
  if (typeof window === "undefined") return null;

  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (index <= TYPING_TEXT.length) {
      timeout = setTimeout(() => {
        setTypedText(TYPING_TEXT.slice(0, index));
        setIndex(index + 1);
      }, 150);
    } else {
      timeout = setTimeout(() => {
        setIndex(0);
        setTypedText("");
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [index]);

  const projects = [
    {
      title: "Brand Identity for EcoWave",
      description: "Empower artists to showcase their work globally.",
      year: "2022",
      image: "https://scontent.fhyd2-2.fna.fbcdn.net/v/t51.75761-15/466801091_18469240039018019_5470696743487353558_n.jpg"
    },
    {
      title: "UX Redesign for HealthTrack App",
      description: "From stunning websites to interactive digital exhibits.",
      year: "2023",
      image: "https://scontent.fhyd2-3.fna.fbcdn.net/v/t39.30808-6/473622851_122176717208262087_3801582047726129687_n.jpg"
    },
    {
      title: "Visual Identity for The Artisan Café",
      year: "2023",
      image: "https://scontent.fhyd2-3.fna.fbcdn.net/v/t51.75761-15/467028910_18469524109018019_9031491532866212792_n.jpg"
    },
    {
      title: "Dashboard for Finlytics",
      year: "2023",
      image: "https://scontent.fhyd2-2.fna.fbcdn.net/v/t51.75761-15/468424464_18471790762018019_3623082235397589111_n.jpg"
    },
    {
      title: "Packaging Design for Bloom Skincare",
      year: "2022",
      image: "https://scontent.fhyd2-3.fna.fbcdn.net/v/t51.75761-15/489423382_18497709835018019_3108693970528054988_n.webp"
    },
    {
      title: "Responsive Web App for Jobly",
      year: "2022",
      image: "https://scontent.fhyd2-3.fna.fbcdn.net/v/t39.30808-6/472852906_122175620288262087_2259558801803087964_n.jpg"
    }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-40 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-gray-800">
        <div className="text-xl font-bold font-mono bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">{typedText}<span className="animate-pulse text-white">|</span></div>
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="text-white hover:text-orange-400 transition">Home</a>
          <a href="#projects" className="text-white hover:text-orange-400 transition">Projects</a>
          <a href="#pricing" className="text-white hover:text-orange-400 transition">Pricing</a>
          <a href="#contact" className="text-white hover:text-orange-400 transition">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={24} className="text-white" />
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-black px-6 py-4 flex flex-col space-y-4 fixed top-16 left-0 right-0 z-40 border-t border-gray-800">
          <a href="#home" onClick={() => setMenuOpen(false)} className="text-white hover:text-orange-400">Home</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-white hover:text-orange-400">Projects</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="text-white hover:text-orange-400">Pricing</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-white hover:text-orange-400">Contact</a>
        </div>
      )}
      <div className="min-h-screen bg-black text-white scroll-smooth">
        <style>{`
          .flip-card {
            perspective: 1000px;
          }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 1rem;
          }
          .flip-card-back {
            background: #1f2937;
            color: white;
            transform: rotateY(180deg);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            text-align: center;
          }
        `}</style>

        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center text-center px-4 pt-24 bg-cover bg-center"
          style={{ backgroundImage: "url('https://scontent-maa2-1.xx.fbcdn.net/v/t39.30808-6/476152039_122180190290262087_4780137075399737870_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=z5WihLhMy3IQ7kNvwFjPJMQ&_nc_oc=Adkh5mYHwHgGhGcM1wA68Ze4Zd7x7Q39KCM62fw1-4UbkabGFNRgw78mZZ9UElHxBD4&_nc_zt=23&_nc_ht=scontent-maa2-1.xx&_nc_gid=6JaDtpjTbI8KCxqkQv_r3w&oh=00_AfHYD5ubXlMCpJ0ctffW7ZngXIk8qqOoiP-WokQ2N6W_oA&oe=67FD37BB')" }}
        >
          <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-5xl font-bold font-mono mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
              {typedText}<span className="animate-pulse text-white">|</span>
            </h1>
            <p className="text-lg text-gray-400">Welcome to my portfolio</p>
          </div>
        </section>

        <section id="projects" className="min-h-screen px-6 py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl font-bold">We provide cutting-edge digital</h2>
              <div className="border-t border-gray-700 pt-6">
                {projects.slice(0, 2).map((project, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-start py-4 ${idx !== 1 ? 'border-b border-gray-700' : ''}`}
                  >
                    <p className="text-sm text-gray-400">{project.description}</p>
                    <span className="text-sm text-gray-400">{project.year}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {projects.map((project, i) => (
                <div key={i} className="flip-card w-full aspect-square">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-2xl" />
                    </div>
                    <div className="flip-card-back">
                      <div>
                        <h4 className="font-bold text-md mb-1">{project.title}</h4>
                        <p className="text-sm">{project.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:col-span-2 mt-12 text-center">
              <h3 className="text-2xl font-semibold mb-2">Our innovative solutions are designed</h3>
              <p className="text-gray-400 mb-4">We designed to enhance your artistic journey & connect wider audience.</p>
              <button className="bg-white text-black px-6 py-2 rounded-md">Explore All</button>
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen px-6 py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>
          <form className="max-w-xl mx-auto grid gap-4">
            <input type="text" placeholder="Name" className="p-3 bg-black text-white border border-gray-700 rounded-lg" />
            <input type="email" placeholder="Email" className="p-3 bg-black text-white border border-gray-700 rounded-lg" />
            <textarea placeholder="Message" className="p-3 bg-black text-white border border-gray-700 rounded-lg" rows={5} />
            <button className="bg-white text-black px-6 py-2 rounded-md">Send</button>
          </form>
        </section>
      </div>
    </>
  );
};

export default ShaliPortfolio;
