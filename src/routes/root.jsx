import { useCallback  } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import linkedinLogo from '../assets/LI-In-Bug.png'
import particlesConfig from '../assets/particles.json'

function Root() {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(() => {}, []);

    return (
      <>
      <div className='main-container'>
        <div className='particles-container'>
          <Particles id="tsparticles" options={particlesConfig} init={particlesInit} loaded={particlesLoaded} />
        </div>
        <div className='info-container'>
          <h1>Sitio web en mantenimiento</h1>
          <p>Actualmente se está trabajando en el sitio web.</p>
          <a href="https://www.linkedin.com/in/rudy-boock-vito/">
            <img src={linkedinLogo} className="linkedin-logo" alt="Linkedin logo" />
            /rboockv
          </a>
        </div>
      </div>
      </>
    );
  }

  export default Root