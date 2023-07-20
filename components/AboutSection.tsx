import React from "react"
import Image from "next/image"
import resumeImg from "../public/resume.png"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Python" },
  { skill: "C" },
  { skill: "C++" },
  { skill: "SQL" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Node.js" },
  { skill: "OpenSSL" },
  { skill: "Numpy" },
  { skill: "Git" },
  { skill: "MySQL" },
  { skill: "Jupyter Notebooks" },
  { skill: "Virtualbox" },
  { skill: "Firebase" },
  { skill: "Jira" },
  { skill: "Burp Suite" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Resume
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Markus and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Brooklyn, NY. Currently pursing a BS in Computer Science at City
              College Grove School of Engineering, anticipated May 2024. My hobbies and interests include programming, fishing, chess, and creating art.
            </p>
            <br />
            <a
              href="/resume.pdf" download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={resumeImg} alt="Resume" width={400} height={600} />
            </a>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection
