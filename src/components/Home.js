import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import BlogCard from "@/app/blogs/BlogCard";
import { getAllBlogs } from "@/lib/blogs";
import { getAllProjects } from "@/lib/projects";
import ProjectCard from "@/app/projects/ProjectCard";
import Script from "next/script";
import Contact from "./contact";

function ViewAllCard({ href, label }) {
  return (
    <Link href={href} className="w-full">
      <Card className="w-full flex items-center justify-center border border-neutral-700 rounded-md bg-neutral-900/40 hover:bg-neutral-800/60 transition-colors cursor-pointer py-3 mt-2">
        <CardContent className="text-accent font-semibold text-sm">
          {label} &rarr;
        </CardContent>
      </Card>
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
    .slice(0, 4);

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "National Institute of Technology Karnataka, Surathkal",
      year: "Aug 2023 - Present",
      grade: "CGPA: 8.76",
    },
  ];

  const experience = [
    {
      company: "CapitalOne",
      logo: "/logos/capital_one.png",
      positions: [
        {
          role: "SDE Intern",
          period: "May 2026 - Jul 2026",
          description: [
            "Developed the Next Best Actions feature, aggregating dataset health metrics and integrating remediation workflows from diverse enterprise tools across multiple Business Applications.",
            "Eliminated manual metric analysis by engineering a prioritized recommendation engine that routes users to the most effective dataset fixes, leading to a reduction in analysis time by several hours.",
            "Streamlined communication by building a notification interface to email data owners, eliminating context-switching.",
          ],
        },
      ],
    },
    {
      company: "Tata Communications",
      logo: "/logos/tata_comm.png",
      positions: [
        {
          role: "Intern",
          period: "May 2025 - Jul 2025",
          description: [
            "Developed a proof of concept for WAN aggregation and failover for high-availability media and vehicle connectivity.",
            "Simulated failovers on MPTCP and OpenWRT, ensuring quick recovery on real time applications.",
            "Wrote scripts to switch routing paths based on real-time link health for automated WAN failover.",
          ],
        },
      ],
    },
    {
      company: "IRIS, NITK",
      logo: "/logos/iris.png",
      positions: [
        {
          role: "Systems Lead",
          period: "Mar 2024 - Present",
          description: [
            "Managed the deployment and operations of IRIS, an ERP platform scaling to serve 24,000+ users.",
            "Architected and configured the core mail server infrastructure using Proxmox Mail Gateway, Postal and Mailu for secure and consistent email delivery.",
            "Load tested critical modules using k6 to handle 1,000+ concurrent users, ensuring zero downtime during peak traffic.",
            "Built an in-house staging environment to drive workflows for on-demand web and mobile application builds and deployments.",
            "Evaluated and tested high-availability databases by configuring MySQL InnoDB Clusters with Group Replication.",
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
          role: "Executive Member, Systems and Security SIG",
          period: "Sept 2024 - Present",
          description: [
            "Held technical sessions on Linux CLI, shell scripting, and Docker (Compose, Networking, Volumes) for 150+ attendees.",
            "Co-organized WebClub CTF 2025 and 2026 alongside multiple events within the Systems and Security domain.",
          ],
        },
      ],
    },
    {
      company: "IEEE, NITK",
      logo: "/logos/ieee.png",
      positions: [
        {
          role: "Executive Member",
          period: "Oct 2024 - Present",
          description: [
            "Served as Point of Contact for Eureka (CTF), IEEE's flagship event for 150+ participants.",
            "Mentored juniors on a Docker project and built a 6502 architecture NES emulator.",
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
            people solve problems and for fun too. <br />
            Feel free to <span className="italic">explore me</span> xd
          </p>
          <div>
            <ul className="mx-auto flex flex-row items-center justify-start gap-4">
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
            className="rounded-xl object-cover shadow-xl w-60 md:w-96"
            priority
          />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Education</h2>
        <div className="flex flex-col gap-3">
          {education.map((edu, idx) => (
            <Card key={idx} className="p-4">
              <CardHeader className="p-0 pb-2">
                <CardTitle className="text-lg font-bold text-blue-300">
                  {edu.degree}
                </CardTitle>
                <CardDescription className="text-gray-200">
                  {edu.institution}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="text-gray-400 text-sm">{edu.year}</div>
                <div className="text-gray-400 text-sm">{edu.grade}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Experience</h2>
        <div className="flex flex-col gap-3">
          {experience.map((job, idx) => (
            <Card key={idx} className="p-4 flex items-start gap-3">
              {job.logo && (
                <Image
                  src={job.logo}
                  alt={job.company + " logo"}
                  width={40}
                  height={40}
                  className="object-contain p-1"
                />
              )}
              <div className="flex-1">
                <CardHeader className="p-0 pb-2">
                  <CardTitle className="text-lg font-bold text-green-300 flex items-center gap-2">
                    {job.company}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
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
                </CardContent>
              </div>
            </Card>
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
            <Card key={idx} className="p-4 flex items-start gap-3">
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
                <CardHeader className="p-0 pb-2">
                  <CardTitle className="text-lg font-bold text-yellow-300 flex items-center gap-2">
                    {job.company}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
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
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Blogs */}
      <section id="featured-blogs" className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">
          Featured Blogs
        </h2>
        <div className="grid grid-cols-1 gap-4">
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
        <div className="grid grid-cols-1 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          <ViewAllCard href="/projects" label="View all projects" />
        </div>
      </section>

      <Contact />
    </main>
  );
}

export default HomePage;
