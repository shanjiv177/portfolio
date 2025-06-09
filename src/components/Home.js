import React from "react";
import Image from "next/image";
import BlogCard from "@/app/blogs/BlogCard";
import { getAllBlogs } from "@/lib/blogs";
import { getAllProjects } from "@/lib/projects";
import ProjectCard from "@/app/projects/ProjectCard";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import Script from "next/script";

function ViewAllCard({ href, label }) {
  return (
    <Link href={href} className="w-full">
      <div className="w-full flex items-center justify-center border border-neutral-700 rounded-md bg-neutral-900/40 hover:bg-neutral-800/60 transition-colors cursor-pointer py-3 mt-2">
        <span className="text-blue-400 font-semibold text-sm">
          {label} &rarr;
        </span>
      </div>
    </Link>
  );
}

function HomePage() {
  const blogs = getAllBlogs()
    .sort((a, b) => {
      // Parse datePublished as YYYY-MM-DD or DD-MM-YYYY
      const parseDate = (d) => {
        if (!d) return new Date(0);
        const [d1, d2, d3] = d.split("-");
        if (d3 && d3.length === 4) return new Date(`${d3}-${d2}-${d1}`); // DD-MM-YYYY
        return new Date(d); // fallback
      };
      return parseDate(b.datePublished) - parseDate(a.datePublished);
    })
    .slice(0, 3);

  const projects = getAllProjects()
    .sort((a, b) => {
      const wa =
        typeof a.weight === "number" ? a.weight : Number.MAX_SAFE_INTEGER;
      const wb =
        typeof b.weight === "number" ? b.weight : Number.MAX_SAFE_INTEGER;
      return wa - wb;
    })
    .slice(0, 3);

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution:
        "National Institute of Technology Karnataka (NITK), Surathkal",
      year: "2023 - 2027",
      grade: "CGPA: 8.96",
    },
  ];

  const experience = [
    {
      company: "IRIS, NITK",
      logo: "/logos/iris.png",
      positions: [
        {
          role: "Systems Developer",
          period: "March 2024 – Present",
          description: [
            "Contributed to IRIS, the official student-led ERP system of NITK, serving 15K+ active users.",
            "Conducted performance benchmarking and load testing of key endpoints using k6, with a focus on optimizing the Hostels Module.",
            "Designed and deployed a comprehensive systems monitoring solution leveraging the Proxmox Metrics API and Telegraf, integrating real-time data into InfluxDB.",
            "Developed interactive Grafana dashboards to visualize system performance metrics and enhance observability.",
            "Working on MySQL Group Replication strategies to ensure high availability, scalability, and fault tolerance in database systems.",
            "Dockerized applications to streamline deployment and enhance portability across environments.",
            "Explored Zabbix for monitoring infrastructure, gaining hands-on experience with its alerting and visualization features.",
          ],
        },
      ],
    },
  ];

  const extracurriculars = [
    {
      company: "WebClub, NITK",
      logo: "/logos/webclub.png",
      positions: [
        {
          role: "Secretary, Systems and Security SIG",
          period: "March 2025 – Present",
          description: [
            "Organized a workshop on Docker fundamentals, covering containerization, virtualization, and core concepts.",
            "Conducted hands-on demonstration on Docker Compose, container networking, and storage management.",
            "Actively contribute to systems projects and security discussions.",
          ],
        },
        {
          role: "Member, Systems and Security SIG",
          period: "September 2024 – March 2025",
          description: [
            "Hosted a session on Docker fundamentals, covering containerization, virtualization, and core concepts.",
            "Conducted hands-on demonstration on Docker Compose, container networking, and storage management.",
            "Actively contribute to systems projects and security discussions.",
          ],
        },
      ],
    },
    {
      company: "IEEE, NITK",
      logo: "/logos/ieee.png",
      positions: [
        {
          role: "Executive Member, CompSoc SIG",
          period: "October 2024 – Present",
          description: [
            "Served as Point of Contact for IEEE’s flagship fresher’s event Eureka, including a CTF and a Black Box contest.",
            "Contributed to a session on the inner working of the Internet and an introduction to Web Development.",
            "Provided insights into various tools and technologies for programming.",
            "Working on an Emulator for the Nintendo Entertainment System.",
          ],
        },
      ],
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4">
      {/* Hero Section */}
      <section className="min-h-[60vh] mt-24 z-0 flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="rounded-xl overflow-hidden bg-gradient-to-brp-8 flex flex-col justify-center w-full md:w-2/3">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Hi, I&apos;m Shanjiv
          </h1>
          <p className="text-gray-200 mb-6 max-w-2xl text-balance">
            I&apos;m an aspiring software engineer with a strong interest in
            systems and infrastructure. I am always curious to explore and learn
            how things work under the hood. I love to build things that help
            people solve problems and for fun to. <br />
            Feel free to <span className="italic">explore me</span> xd
          </p>
          <div>
            <ul className="mx-auto flex flex-col sm:flex-row items-center justify-start gap-4">
              <li className="flex gap-1 justify-center items-center hover:text-blue-400">
                <Link
                  href="https://github.com/shanjiv177"
                  target="_blank"
                  rel="noopener"
                  className="transition-colors"
                >
                  <Github className="w-4 h-4" />
                </Link>
              </li>
              <li className="flex gap-1 justify-center items-center hover:text-blue-400">
                <Link
                  href="https://linkedin.com/in/shanjiv"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
              </li>
              <li className="flex gap-1 justify-center items-center hover:text-blue-400">
                <Link
                  href="https://x.com/shanjiv177"
                  target="_blank"
                  rel="noopener"
                  className="transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/main-pic.jpg"
            alt="Shanjiv A"
            width={500}
            height={1500}
            className="rounded-md shadow-lg w-60 md:w-96"
            priority
          />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Education</h2>
        <div className="flex flex-col gap-3">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="border border-neutral-800 rounded-md bg-neutral-900/40 p-4"
            >
              <div className="text-lg font-bold text-blue-300">
                {edu.degree}
              </div>
              <div className="text-gray-200">{edu.institution}</div>
              <div className="text-gray-400 text-sm">{edu.year}</div>
              <div className="text-gray-400 text-sm">{edu.grade}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Experience</h2>
        <div className="flex flex-col gap-3">
          {experience.map((job, idx) => (
            <div
              key={idx}
              className="border border-neutral-800 rounded-md bg-neutral-900/40 p-4 flex items-start gap-3"
            >
              {job.logo && (
                <Image
                  src={job.logo}
                  alt={job.company + " logo"}
                  width={40}
                  height={40}
                  className="rounded object-contain p-1"
                />
              )}
              <div className="flex-1">
                <div className="text-lg font-bold text-green-300 flex items-center gap-2">
                  {job.company}
                </div>
                {job.positions.map((pos, posIdx) => (
                  <div
                    key={posIdx}
                    className="mt-2 pl-2 border-l-2 border-green-700"
                  >
                    <div className="font-semibold text-green-200">
                      {pos.role}
                    </div>
                    <div className="text-gray-400 text-xs">{pos.period}</div>
                    <ul className="list-disc list-inside text-gray-400 text-sm mt-1 space-y-1">
                      {Array.isArray(pos.description) ? (
                        pos.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))
                      ) : (
                        <li>{pos.description}</li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Extra Curriculars Section */}
      <section id="extracurriculars" className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">
          Extracurriculars
        </h2>
        <div className="flex flex-col gap-3">
          {extracurriculars.map((job, idx) => (
            <div
              key={idx}
              className="border border-neutral-800 rounded-md bg-neutral-900/40 p-4 flex items-start gap-3"
            >
              {job.logo && (
                <Image
                  src={job.logo}
                  alt={job.company + " logo"}
                  width={40}
                  height={40}
                  className="rounded object-contain p-1"
                />
              )}
              <div className="flex-1">
                <div className="text-lg font-bold text-yellow-300 flex items-center gap-2">
                  {job.company}
                </div>
                {job.positions.map((pos, posIdx) => (
                  <div
                    key={posIdx}
                    className="mt-2 pl-2 border-l-2 border-yellow-700"
                  >
                    <div className="font-semibold text-yellow-200">
                      {pos.role}
                    </div>
                    <div className="text-gray-400 text-xs">{pos.period}</div>
                    <ul className="list-disc list-inside text-gray-400 text-sm mt-1 space-y-1">
                      {Array.isArray(pos.description) ? (
                        pos.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))
                      ) : (
                        <li>{pos.description}</li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Blogs */}
      <section id="featured-blogs" className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">
          Featured Blogs
        </h2>
        <div className="flex flex-col gap-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
          <ViewAllCard href="/blogs" label="View all blogs" />
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">
          Featured Projects
        </h2>
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          <ViewAllCard href="/projects" label="View all projects" />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
