import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaDocker } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact size={40} className="text-teal-400" /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} className="text-teal-400" /> },
    { name: 'MySQL', icon: <FaDatabase size={40} className="text-teal-400" /> },
    { name: 'HTML5', icon: <FaHtml5 size={40} className="text-teal-400" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-teal-400" /> },
    { name: 'JavaScript', icon: <FaJsSquare size={40} className="text-teal-400" /> },
    { name: 'Git', icon: <FaGitAlt size={40} className="text-teal-400" /> },
    { name: 'Docker', icon: <FaDocker size={40} className="text-teal-400" /> },
  ];

  return (
    <section id="skills" className="w-full py-20 px-6 md:px-16 bg-[#0a192f]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold border-b-4 border-teal-500 inline-block mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              {skill.icon}
              <p className="text-white text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;