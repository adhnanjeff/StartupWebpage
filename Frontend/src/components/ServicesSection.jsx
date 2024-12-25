import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { Particles } from "react-tsparticles"; // Import react-tsparticles
import "./ServicesSection.css"; // Use CSS Modules or adjust to your preference

const services = [
  {
    title: "GenAI",
    description: "Generative AI Technology",
  },
  {
    title: "ML/DL",
    description: "Machine & Deep Learning",
  },
  {
    title: "Analytics",
    description: "Data Analytics + AI",
  },
  {
    title: "Web",
    description: "Website Technologies",
  },
  {
    title: "Marketing",
    description: "Digital Marketing",
  },
  {
    title: "App's",
    description: "Android and iOS App",
  },
  {
    title: "Testing",
    description: "Business Software Testing",
  },
];

const ServicesSection = () => {
  const tiltRefs = useRef([]); // Array of refs for all cards

  useEffect(() => {
    // Initialize VanillaTilt for each card
    tiltRefs.current.forEach((tiltRef) => {
      if (tiltRef) {
        VanillaTilt.init(tiltRef, {
          scale: 1.1,
          speed: 400,
          max: 15,
          glare: true,
          "max-glare": 0.5,
        });
      }
    });

    // Cleanup on unmount
    return () => {
      tiltRefs.current.forEach((tiltRef) => {
        if (tiltRef?.vanillaTilt) {
          tiltRef.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <section className="services-section bg-[#00031D] relative">
      {/* Add particles background */}
      <Particles 
        id="tsparticles" 
        options={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
              }
            },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: true,
                mode: "push"
              }
            }
          },
          retina_detect: true
        }}
      />
      
      <hr className="border-slate-300" />
      <div className="services-header">
        <div className="services-header-left">
          <p>-------Services</p>
          <h1>What We Cook / Services</h1>
          <p>Know more about what we build and our services</p>
        </div>
        <div className="services-header-right">
          <img src="../assets/images/hand.png" alt="Hand" />
        </div>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            ref={(el) => (tiltRefs.current[index] = el)} // Assign ref to each card
          >
            <div className="service-icon">
              {/* Replace with actual icons or images */}
              <span>🔷</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="domains">
        <div className="domains-left">
          <img src="hand1.png" alt="Hand" />
        </div>
        <div className="domains-right">
          <h3>Domains We Handle</h3>
          <p>ML/DL, Gen-AI, Web Development, App Development, Data Analytics, Testers, UI/UX, Digital Media.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
