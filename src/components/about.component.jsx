
import Portrait from "../assets/my-portrait.jpg";

const About = () => {
  const onClickButton = () =>{
    const resumeURL = 'https://docs.google.com/document/d/1zy266DxQ0KGPWsZPyFZfzReFvoTTSkMB28teyhi_xeI/edit?usp=sharing';

    window.open(resumeURL);
  }
  return (
    <section className="bg-white-800 h-50% text-white px-5 py-32" id="about">
      <h2 className="text-6xl text-black text-center font-bold mb-20">ABOUT ME</h2>
      <div className="container mx-auto grid grid-cols-2 items-center justify-center">
        <div className="about-info">
          <p className="pb-5 text-2xl text-black">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Hello! I'm Huu Thien Ho, known simply as Thien. As a dedicated Full Stack Engineer
          </p>
          <p className="pb-5 text-2xl text-black">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
             I'm deeply passionate about crafting robust and scalable web applications using a diverse array of technologies, including React, TypeScript, Next.js, Python, Flask, JavaScript, HTML/CSS, Node.js, and Java.
          </p>

          <p className="pb-5 text-2xl text-black">Driven by a thirst for challenges, I thrive in dynamic environments where I can apply my skills to solve complex problems.</p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="pb-5 text-2xl text-black">Currently, I'm actively seeking a full-time position where I can leverage my experience and collaborate with talented peers to create impactful products. I am eager to contribute to projects that not only showcase my abilities but also drive meaningful change and innovation. </p>

          <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-lg shadow mt-10" onClick={onClickButton}>
            <div className="absolute inset-0 w-0 bg-teal-400 transition-all duration-[450ms] ease-out group-hover:w-full"></div>
            <span className="font-sans font-bold relative text-black group-hover:text-white">View Resume</span>
          </button>
        </div>

        <div className="about-img flex justify-center items-center">
          <img
            src={Portrait}
            className="w-3/4 h-2/4 lg:w-2/4 lg:h-2/4"
          />
        </div>
      </div>
    </section>
  );
};

export default About;