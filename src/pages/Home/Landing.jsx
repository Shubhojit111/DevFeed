import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function Landing() {

  useEffect(() => {
  const bubbles = gsap.utils.toArray(".bubble");
  let W = window.innerWidth;
  let H = window.innerHeight;

  window.addEventListener("resize", () => {
    W = window.innerWidth;
    H = window.innerHeight;
  });

  bubbles.forEach(b => {
    const size = gsap.utils.random(80, 150);
    b.vx = gsap.utils.random(-0.18, 0.18);
    b.vy = gsap.utils.random(-0.18, 0.18);

    gsap.set(b, {
      width: size,
      height: size,
      borderRadius: "50%",
      position: "absolute",
      x: gsap.utils.random(0, W - size),
      y: gsap.utils.random(0, H - size),
      background: `
        radial-gradient(circle at 28% 28%, rgba(255,255,255,.9), rgba(255,255,255,.15) 40%, rgba(255,255,255,.02) 70%),
        radial-gradient(circle at 70% 75%, rgba(255,255,255,.15), transparent 60%)
      `,
      border: "1px solid rgba(255,255,255,.25)",
      boxShadow: `
        inset -12px -18px 25px rgba(255,255,255,.15),
        inset 12px 18px 30px rgba(0,0,0,.12),
        0 0 60px rgba(255,255,255,.25)
      `,
      backdropFilter: "blur(12px)",
      mixBlendMode: "screen"
    });
  });

  gsap.ticker.add(() => {
    bubbles.forEach(b => {
      let x = gsap.getProperty(b, "x");
      let y = gsap.getProperty(b, "y");
      const s = b.offsetWidth;

      if (x <= 0 || x + s >= W) b.vx *= -1;
      if (y <= 0 || y + s >= H) b.vy *= -1;

      gsap.set(b, { x: x + b.vx, y: y + b.vy });
    });
  });
}, []);




  return (
    <div className="relative h-screen w-full bg-[#0F141A] overflow-hidden">

      {/* Bubble Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <span key={i} className="bubble" />
        ))}

        

      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">
        <h1 className="text-6xl font-display">Dev<span className="text-blue-500">Feed</span></h1>
        <h2 className="text-3xl text-[#0DA2E7] mt-3">Connect. Build. <span className="text-white">Get Hired.</span></h2>
        <p className="max-w-xl text-gray-400 mt-4">
          A social platform designed for developers to showcase work, build presence and connect with opportunities.
        </p>

        <div className="mt-8 flex gap-4">
          <Link to="/app" className="bg-[#0DA2E7] text-black px-7 py-3 rounded-xl hover:scale-95 transition">
            Go to App <ArrowRight className="inline ml-1" size={18}/>
          </Link>
          <button className="border border-white/20 px-7 py-3 rounded-xl hover:bg-white/5 transition">
            Explore Features
          </button>
        </div>
      </div>

    </div>
  );
}
