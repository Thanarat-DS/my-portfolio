const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-start px-6 md:px-16 bg-[#0a192f]">
      <p className="text-teal-400 text-lg">Hi, my name is</p>
      <h1 className="text-4xl sm:text-6xl font-bold text-white mt-2">Thanarat Srihapol</h1>
      <h2 className="text-2xl sm:text-4xl text-gray-400 mt-2">I'm a Full Stack Developer</h2>
      <p className="text-gray-300 max-w-xl mt-4">
        I build scalable and maintainable web applications with modern technologies such as React, Node.js, and MySQL. I'm passionate about solving problems and writing clean, efficient code.
      </p>
      <div className="mt-6">
        <a href="#projects" className="px-6 py-2 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition-all">View Projects</a>
        <a href="/resume.pdf" className="ml-4 px-6 py-2 border border-teal-500 text-teal-400 rounded-xl hover:bg-teal-500 hover:text-white transition-all">Download Resume</a>
      </div>
    </section>
  );
};

export default Hero;