
import Tilt from 'react-parallax-tilt';

import nasa from "../assets/nasa.png"
import smartBrain from "../assets/smart-brain.png"
import crownClothing from "../assets/crown-clothing.png"
import passwordManager from "../assets/password-manager.png"
import blogSite from "../assets/blog-site.png"

const projects = [
    {
      img: passwordManager,
      title: "Password Manager",
      desc: "A multi-user application which encrypts and store users account passwords",
      live: "",
      code: "https://github.com/johnnyho197/password-manager",
    },
    {
      img: smartBrain,
      title: "Smart Brain",
      desc: "A website which detects faces from a URL image input of the user. Handled face detection API calls by utilizing Clarifai Face Detection Model",
      live: "https://smart-brain-huuho.netlify.app/",
      code: "https://github.com/johnnyho197/smart-brain",
    },
    {
      img: crownClothing,
      title: "Crown Clothing",
      desc: "A robust and user-friendly e-commerce website. Utilized Firebase's real-time database capabilities to efficiently manage and store user data, product information, including inventory, pricing, and descriptions",
      live: "https://crown-clothing-huuho.netlify.app/",
      code: "https://github.com/johnnyho197/crown-clothing",
    },
    {
      img: blogSite,
      title: "Blog-Site",
      desc: "A user-friendly blogging website using modern front-end technologies, including React and React Router.",
      live: "",
      code: "https://github.com/johnnyho197/Blog-site",
    },
  ];

const Projects = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-5 py-32" id="projects">
      <h2 className="text-6xl text-black text-center font-bold mb-10">PROJECTS</h2>
      {projects.map((project) => {
        const { img, title, desc, live, code } = project;
        return (
          <div key={title} className="mx-auto grid grid-cols-2 py-10 w-3/4"> {/* Don't forget to provide a unique key */}
            <div className="flex flex-col justify-start items-left mx-auto">
              <h2 className="text-4xl mb-7 font-bold text-black">{title}</h2>
              <p className="text-2xl max-w-xl text-black">{desc}</p>
              <div className="font-bold mt-4">
                {live !== ""? <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex justify-center items-center h-10 w-36 overflow-hidden rounded-lg bg-white text-lg shadow mr-5"
                >
                  <div className="absolute inset-0 w-0 bg-blue-700 transition-all duration-300 ease-out group-hover:w-full"></div>
                  <span className="font-sans font-bold relative text-black group-hover:text-white">Live Demo</span>
                </a> : null}
                <a href={code} target="_blank" rel="noopener noreferrer" className="inline-block px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-700 transition duration-300">
                  Source Code
                </a>
              </div>

            </div>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}> 
              <img src={img} alt={title} className="w-full"/>
            </Tilt> 
          </div>
        );
      })}
    </section>
  );
};

export default Projects;