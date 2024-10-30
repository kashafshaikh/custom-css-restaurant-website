"use client";

import About from "./about/page";
import Contact from "./contact/page";
import Menu from "./menu/page";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/menu'); 
  };

  return (
    <section>
      <div className="fullscreen-bg">
        <Image 
          src="/burger-home-bg.jpg" 
          alt="Home Page Background" 
          layout="fill" 
          objectFit="cover" 
          className="background-image"
          quality={100} 
        />
        {/* <Header /> */}
        <div className="header-overlay">
          <h1>
            "Discover the 
            <br></br>
            <span className="highlight">Taste of Happiness!"</span>
          </h1>
          <p>
            Welcome to our restaurant where we serve the most delicious meals. Ready to explore?
          </p>
          <button 
            className="explore-button"
            onClick={handleClick}
          >
            Explore Our Menu
          </button>
        </div>
      </div>

      <Menu />
      <About />
      <Contact />
    </section>
  );
}
