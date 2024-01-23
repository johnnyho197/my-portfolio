
import Portrait from "../assets/my-portrait.jpg";

const About = () => {
  const onClickButton = () =>{
    const resumeURL = 'https://drive.google.com/file/d/1PsjStRXORzI2wR71jQwL_5tuW2z33fcL/view?usp=sharing';

    window.open(resumeURL);
  }
  return (
    <section className="bg-white-800 h-50% text-white px-5 py-32" id="about">
      <h2 className="text-6xl text-black text-center font-bold mb-10">ABOUT ME</h2>
      <div className="container mx-auto grid grid-cols-2 items-center justify-center">
        <div className="about-info">
          <p className="pb-5 text-2xl text-black">
            Hi, My Name is Huu Thien Ho everyone calls me Thien. I am a
            Software Developer.
          </p>
          <p className="pb-5 text-2xl text-black">
              I am passionate about software development and technology. With a diverse skill set that includes React, Python, JavaScript, HTML/CSS, Node.js, and Java.
          </p>

          <p className="pb-5 text-2xl text-black">I am always ready to tackle exciting challenges and create innovative solutions.</p>
          <p className="pb-5 text-2xl text-black">I am currently looking for an internship that I can apply all the skills that I have had so far to help me gain more work experience, work with extremely talented people, and collaborate to make products that could make instant impact. </p>

          <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-lg shadow" onClick={onClickButton}>
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