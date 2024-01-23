
import {
  AiOutlineFacebook, AiOutlineLinkedin,
} from "react-icons/ai";

const Hero = () => {

  const onClickButton = () =>{
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen flex flex-col justify-center text-white">
      <div className="container mx-auto grid  justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-5">
          <h1 className="text-6xl lg:text-7xl">
            Hi, <br />I am <span className="text-accent">Huu</span>Thien <br />
            a Software Developer
          </h1>

          <div className="flex my-6">
            <a
              href="https://www.facebook.com/thienho997/"
              className="pr-3 text-blue-800 hover:text-white"
            >
              {" "}
              <AiOutlineFacebook size={50} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/huu-ho/"
              className="pr-3 text-blue-800 hover:text-white"
            >
              {" "}
              <AiOutlineLinkedin size={50} />{" "}
            </a>
          </div>

          <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={onClickButton}>
            <div className="absolute inset-0 w-0 bg-blue-700 transition-all duration-[450ms] ease-out group-hover:w-full"></div>
            <span className="font-sans font-bold relative text-black group-hover:text-white">About Me</span>
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;