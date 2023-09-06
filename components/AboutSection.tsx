import React from "react"
import Image from "next/image"
import resumeImg from "../public/resume.png"

const skills = [
  { skill: "Python" },
  { skill: "C/C++" },
  { skill: "Javascript" },
  { skill: "HTML/CSS" },
  { skill: "SQL" },
  { skill: "NumPy" },
  { skill: "Pandas" },
  { skill: "PyTorch" },
  { skill: "OpenSSL" },
  { skill: "React" },
  { skill: "Express" },
  { skill: "Next" },
  { skill: "VirtualBox" },
  { skill: "Firebase" },
  { skill: "MySQL" },
  { skill: "Jira" },
  { skill: "TCPdump" },
];

const certs = [
  { cert: "Google Cyberseucity Professional" },
  // { cert: "Security+" },
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
              I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in New York City. Currently pursing a BS in Computer Science
              at City College Grove School of Engineering, anticipated May 2024.
              My hobbies and interests include programming, fishing, chess, and
              creating art.
            </p>
            <br />
            <a
              href="/resume.pdf"
              download
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
            <h1 className="text-2xl font-bold mb-6" style={{marginTop: "50px"}}>My Certifications</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {certs.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.cert}
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
