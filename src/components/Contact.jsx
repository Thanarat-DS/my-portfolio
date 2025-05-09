const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 px-6 md:px-16 bg-[#0a192f]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold border-b-4 border-teal-500 inline-block mb-8">Contact</h2>
        <p className="text-gray-300 mb-6">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
        </p>
        <a
          href="mailto:thanarat@example.com"
          className="inline-block mt-4 px-8 py-3 border border-teal-500 text-teal-400 rounded-xl hover:bg-teal-500 hover:text-white transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;