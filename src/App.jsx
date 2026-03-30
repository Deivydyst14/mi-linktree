import { useState, useEffect } from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

const PROFILE = {
  name: "ANTEIKU DEV/>",
  username: "@Deivydyst14",
  bio: "Futuro Desarrollador de software y paginas web.",
  avatar: "https://github.com/Deivydyst14.png",
  socials: [
    {
      id: "instagram",
      label: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/tuusuario",
      color: "#E1306C",
    },
    {
      id: "twitter",
      label: "Twitter / X",
      icon: <FaXTwitter />,
      url: "https://x.com/tuusuario",
      color: "#e8e8f0",
    },
    {
      id: "github",
      label: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/tuusuario",
      color: "#6e40c9",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/tuusuario",
      color: "#0A66C2",
    },
    {
      id: "tiktok",
      label: "TikTok",
      icon: <FaTiktok />,
      url: "https://tiktok.com/@tuusuario",
      color: "#ff0050",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      icon: <FaWhatsapp />,
      url: "https://wa.me/57TUNUMERO",
      color: "#25D366",
    },
  ],
  links: [
    {
      id: 1,
      label: "🚀 Mi Portafolio",
      url: "https://github.com/Deivydyst14?tab=repositories",
      description: "Proyectos y trabajos",
    },

    {
      id: 4,
      label: "La mejor cancion de todas!!!",
      url: "https://www.youtube.com/watch?v=OMOGaugKpzs&list=RDH53EoZ3oUJA&index=5",
      description: "The Police - Every Breath You Take ",
    },
  ],
};

function useTypewriter(text, speed = 60) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return displayed;
}

export default function Linktree() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);
  const bio = useTypewriter(PROFILE.bio, 40);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (id) => {
    setClicked(id);
    setTimeout(() => setClicked(null), 600);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #080810;
          font-family: 'DM Mono', monospace;
          color: #e8e8f0;
          min-height: 100vh;
        }

        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 48px 20px 80px;
          position: relative;
          overflow: hidden;
        }

        .bg-orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
          transition: opacity 1s ease;
        }
        .orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #3b0764 0%, transparent 70%);
          top: -150px; left: -100px;
          opacity: 0.6;
        }
        .orb-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, #0c1a4a 0%, transparent 70%);
          bottom: -100px; right: -80px;
          opacity: 0.7;
        }
        .orb-3 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, #1a0533 0%, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.4;
        }

        .page::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.5;
          pointer-events: none;
          z-index: 0;
        }

        .container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 480px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        .avatar-wrapper {
          position: relative;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(-20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .avatar-wrapper.visible { opacity: 1; transform: translateY(0); }

        .avatar-ring {
          width: 96px; height: 96px;
          border-radius: 50%;
          padding: 2px;
          background: linear-gradient(135deg, #7c3aed, #2563eb, #7c3aed);
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
          box-shadow: 0 0 30px rgba(124, 58, 237, 0.4);
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .avatar-img {
          width: 100%; height: 100%;
          border-radius: 50%;
          background: #13131f;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
          border: 2px solid #13131f;
        }
        .avatar-img img { width: 100%; height: 100%; object-fit: cover; }

        .avatar-badge {
          position: absolute;
          bottom: 2px; right: 2px;
          width: 20px; height: 20px;
          background: #22c55e;
          border-radius: 50%;
          border: 2px solid #080810;
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.6);
        }

        .profile-name {
          font-family: 'Syne', sans-serif;
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, #ffffff 40%, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
        }
        .profile-name.visible { opacity: 1; transform: translateY(0); }

        .profile-username {
          font-size: 20px;
          color: #6b6b8a;
          letter-spacing: 2px;
          text-transform: none;
          margin-top: 4px;
          margin-bottom: 16px;
          opacity: 0;
          transition: opacity 0.6s ease 0.35s;
        }
        .profile-username.visible { opacity: 1; }

        .profile-bio {
          font-size: 18px;
          color: #9898b8;
          text-align: center;
          line-height: 1.7;
          max-width: 340px;
          min-height: 44px;
          margin-bottom: 32px;
          font-style: italic;
        }

        .socials {
          display: flex;
          gap: 14px;
          margin-bottom: 20px;
          opacity: 0;
          transition: opacity 0.6s ease 0.5s;
        }
        .socials.visible { opacity: 1; }

        .social-btn {
          width: 60px; height: 60px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.03);
          font-size: 18px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.25s ease;
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }
        .social-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: currentColor;
          opacity: 0;
          transition: opacity 0.25s;
        }
        .social-btn:hover::before { opacity: 0.1; }
        .social-btn:hover {
          border-color: rgba(255,255,255,0.15);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
        }

        .divider {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          opacity: 0;
          transition: opacity 0.6s ease 0.6s;
        }
        .divider.visible { opacity: 1; }
        .divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent);
        }
        .divider-text {
          font-size: 20px;
          letter-spacing: 3px;
          color: #4a4a6a;
          text-transform: uppercase;
        }

        .links {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .link-btn {
          width: 100%;
          padding: 16px 20px;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.025);
          backdrop-filter: blur(10px);
          color: #e8e8f0;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          opacity: 0;
          transform: translateX(-16px);
          position: relative;
          overflow: hidden;
        }
        .link-btn.visible { opacity: 1; transform: translateX(0); }
        .link-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(124,58,237,0.08), rgba(37,99,235,0.08));
          opacity: 0;
          transition: opacity 0.25s;
        }
        .link-btn:hover {
          border-color: rgba(124,58,237,0.4);
          transform: translateX(4px) scale(1.01);
          box-shadow: 0 8px 32px rgba(124,58,237,0.15), inset 0 1px 0 rgba(255,255,255,0.08);
        }
        .link-btn:hover::before { opacity: 1; }
        .link-btn.clicked {
          transform: scale(0.97);
          background: rgba(124,58,237,0.15);
        }

        .link-left { display: flex; flex-direction: column; gap: 3px; }
        .link-label {
          font-family: 'fancy text', sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: -0.2px;
        }
        .link-desc {
          font-size: 15px;
          color: #5a5a7a;
          letter-spacing: 0.3px;
        }
        .link-arrow {
          color: #4a4a6a;
          font-size: 18px;
          transition: transform 0.25s, color 0.25s;
        }
        .link-btn:hover .link-arrow {
          transform: translateX(4px);
          color: #a78bfa;
        }

        .footer {
          margin-top: 49px;
          font-size: 20px;
          color: #3a3a5a;
          letter-spacing: 1px;
          opacity: 0;
          transition: opacity 0.6s ease 1.2s;
        }
        .footer.visible { opacity: 1; }
      `}</style>

      <div className="page">
        <div className="bg-orb orb-1" />
        <div className="bg-orb orb-2" />
        <div className="bg-orb orb-3" />

        <div className="container">
          <div className={`avatar-wrapper ${mounted ? "visible" : ""}`}>
            <div className="avatar-ring">
              <div className="avatar-img">
                <img src={PROFILE.avatar} alt="avatar" />
              </div>
            </div>
            <div className="avatar-badge" />
          </div>

          <div className={`profile-name ${mounted ? "visible" : ""}`}>
            {PROFILE.name}
          </div>
          <div className={`profile-username ${mounted ? "visible" : ""}`}>
            {PROFILE.username}
          </div>

          <div className="profile-bio">
            {bio}
            <span style={{ opacity: 0.4 }}>|</span>
          </div>

          <div className={`socials ${mounted ? "visible" : ""}`}>
            {PROFILE.socials.map((s) => (
              <a
                key={s.id}
                href={s.url}
                className="social-btn"
                title={s.label}
                style={{ color: s.color }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className={`divider ${mounted ? "visible" : ""}`}>
            <div className="divider-line" />
            <span className="divider-text">Links</span>
            <div className="divider-line" />
          </div>

          <div className="links">
            {PROFILE.links.map((link, i) => (
              <a
                key={link.id}
                href={link.url}
                className={`link-btn ${mounted ? "visible" : ""} ${clicked === link.id ? "clicked" : ""}`}
                style={{ transitionDelay: `${0.65 + i * 0.1}s` }}
                onMouseEnter={() => setHovered(link.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleClick(link.id)}
              >
                <div className="link-left">
                  <span className="link-label">{link.label}</span>
                  <span className="link-desc">{link.description}</span>
                </div>
                <span className="link-arrow">→</span>
              </a>
            ))}
          </div>

          <div className={`footer ${mounted ? "visible" : ""}`}>
            hecho con ♥ por Deivyd :)
          </div>
        </div>
      </div>
    </>
  );
}
