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
      image: "https://scontent.fhyd2-2.fna.fbcdn.net/v/t51.75761-15/466801091_18469240039018019_5470696743487353558_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=54-XavoxbO0Q7kNvwH1KxzL&_nc_oc=AdlvRUgp3STKuNyRmD-rTGH0wZchFF9lI8fWchpL7GMydWvboEgbdo0L3aa8SoNtx3o&_nc_zt=23&_nc_ht=scontent.fhyd2-2.fna&_nc_gid=ChSdmPdx2EBEUxit5b670A&oh=00_AfEJoc_AVDlxfqfby-2WpyehiVGpguztbovS4AgLukl9ww&oe=67FC9701"
    },
    {
      title: "UX Redesign for HealthTrack App",
      description: "From stunning websites to interactive digital exhibits.",
      year: "2023",
      image: "https://scontent.fhyd2-3.fna.fbcdn.net/v/t39.30808-6/473622851_122176717208262087_3801582047726129687_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hKT7WOYZHCYQ7kNvwF26YPb&_nc_oc=Adkm5ZvvRnW7O_WAkTnhYd6NHlr8okzIigwioN7GKZ7GwtbwmS5_3Xm0zmDSSUwc5x8&_nc_zt=23&_nc_ht=scontent.fhyd2-3.fna&_nc_gid=_cvhhlS2iRB8fI6ZcR3s-g&oh=00_AfGo5aOZTtgulq4YJ4-wTjCAqxvtKUcMMEPBS7NV9YIQfQ&oe=67FCA711"
    },
    {
      title: "Visual Identity for The Artisan Café",
      year: "2023",
      image: "https://scontent.fhyd2-3.fna.fbcdn.net/v/t51.75761-15/467028910_18469524109018019_9031491532866212792_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KUqUEWWliA4Q7kNvwHW0Fng&_nc_oc=AdkODKe2kqW8-McKB0fkUnapC3BW9BuBdF4qhZT8_cLPpw-2BAIADV7iv09Xiuu9NuM&_nc_zt=23&_nc_ht=scontent.fhyd2-3.fna&_nc_gid=v0sd6yC0UcFz94-ldfToAw&oh=00_AfHOOnlRBP693qOikwgglgpK74orf-_2BO_BwatzEwaRAw&oe=67FCB46E"
    },
    {
      title: "Dashboard for Finlytics",
      year: "2023",
      image: "https://scontent.fhyd2-2.fna.fbcdn.net/v/t51.75761-15/468424464_18471790762018019_3623082235397589111_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yIdI0oa9mcMQ7kNvwGf_v27&_nc_oc=AdlCK-CVypBedicKJFkS1SG8NaZBlroP-lxD6CKWmZCBhFk3f84M3WDbNCfXhmZPNQw&_nc_zt=23&_nc_ht=scontent.fhyd2-2.fna&_nc_gid=SRMh6g4KDoYuslekluDx-Q&oh=00_AfEBSTlTaIHL5hVLUcR89v-xgRUA4y5d6kq2eyrs3k3b7Q&oe=67FCC640"
    },
    {
      title: "Packaging Design for Bloom Skincare",
      year: "2022",
      image: "https://scontent.fhyd2-3.fna.fbcdn.net/v/t51.75761-15/489423382_18497709835018019_3108693970528054988_n.webp?stp=dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3QejRfvF20sQ7kNvwFlTXD1&_nc_oc=Adk6ysSzDybo4F7w_s43gBoztQzochmytxqacufZsIalelrHBR-3CsXotWvK4h7ULdc&_nc_zt=23&_nc_ht=scontent.fhyd2-3.fna&_nc_gid=S8_ItNQr9DC1HNgRI2yLGA&oh=00_AfHimrjRupYO8cwJm3xVeIxilWFwwdV5W3-VTOkhPCwu2A&oe=67FC9159"
    },
    {
      title: "Responsive Web App for Jobly",
      year: "2022",
      image: "https://scontent.fhyd2-3.fna.fbcdn.net/v/t39.30808-6/472852906_122175620288262087_2259558801803087964_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=LaIroX8GfmkQ7kNvwFphvBK&_nc_oc=AdmGs3FBPFkMq-szrv9Zd95B_ymYkNTsuOcK1sjeyE9hpg1bEhYcrXjPAEMoBhz6RbM&_nc_zt=23&_nc_ht=scontent.fhyd2-3.fna&_nc_gid=AKkRKW1W3gt5-diV3Dpxdw&oh=00_AfE9sDwbaRXsB9XrmsYgDEFPxG_hUP67AW820mYJLauSjQ&oe=67FC99CB"
    }
  ];

  return (
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

      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-24">
        <h1 className="text-5xl font-bold font-mono mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
          {typedText}<span className="animate-pulse text-white">|</span>
        </h1>
        <p className="text-lg text-gray-400">Welcome to my portfolio</p>
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
  );
};

export default ShaliPortfolio;
