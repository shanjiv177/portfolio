// Content for the home page. Edit here; components only render it.

export const links = {
  resume: "/Shanjiv_A_Resume.pdf",
  email: "shanjiv177@gmail.com",
  github: "https://github.com/shanjiv177",
  linkedin: "https://linkedin.com/in/shanjiv",
  x: "https://x.com/shanjiv177",
};

// Hero highlights: plain language, no tool names. `live` marks things still ongoing.
export const highlights = [
  { text: "Leading a team of systems developers at IRIS, serving 24,000+ people at NITK", href: "/#work", live: true },
  { text: "Software engineering intern at Capital One, 2026", href: "/#work" },
  { text: "Finalist at ETHGlobal Mumbai 2026 with RupeeRail", href: "/projects/rupeerail" },
  { text: "Studying computer science at NIT Karnataka, class of 2027", live: true },
];

// Ordered newest first. This is a real sequence, so the timeline is numbered by year.
export const experience = [
  {
    company: "Capital One",
    logo: "/logos/capital_one.png",
    role: "Software Engineer Intern",
    period: "May 2026 – Jul 2026",
    year: "2026",
    place: "Bengaluru",
    stack: ["React", "NestJS", "PySpark"],
    points: [
      "Built an Actions Recommendation Engine, which pulls dataset health metrics and remediation workflows from several enterprise tools into one view across Business Applications.",
      "Replaced manual metric analysis with a prioritised recommendation engine that sends people to the fix that matters most, saving several hours of analysis.",
      "Added a notification flow that emails data owners directly, so nobody has to switch tools to chase a fix.",
    ],
  },
  {
    company: "Tata Communications",
    logo: "/logos/tata_comm.png",
    role: "Corporate Strategy, Innovations Intern",
    period: "May 2025 – Jul 2025",
    year: "2025",
    place: "Pune",
    stack: ["Linux", "OpenWRT", "mwan3", "MPTCP", "OpenMPTCProuter", "Shadowsocks"],
    points: [
      "Built a proof of concept for WAN aggregation and failover to keep media and vehicle links up.",
      "Compared commercial and open-source SD-WAN and failover options, including Cisco SD-WAN, Peplink and pfSense.",
      "Deployed and benchmarked OpenMPTCProuter on x86 and ARM, with a VPS relay over MPTCP and Shadowsocks, and tested Shadowsocks and Glorytun under simulated outages.",
      "Tested OpenWRT with mwan3 for recovery and load balancing across several uplinks.",
      "Wrote scripts that switch routing paths based on live link health, so failover happens without a human.",
    ],
  },
  {
    company: "IRIS, NITK",
    logo: "/logos/iris.png",
    role: "Systems Lead",
    period: "Apr 2026 – present",
    previous: [{ role: "Systems Developer", period: "Mar 2024 – Apr 2026" }],
    year: "2024",
    place: "Surathkal",
    stack: ["Linux", "Docker", "Proxmox", "Nginx", "MySQL", "Teleport", "k6", "Zabbix", "Grafana"],
    stats: [
      { value: 24000, suffix: "+", label: "people use IRIS" },
      { value: 1000, suffix: "+", label: "concurrent users load tested" },
    ],
    points: [
      "Run the infrastructure behind IRIS, the institute ERP: deployments, OS and service upgrades, migrations and backups.",
      "Designed a segmented inbound and outbound mail stack with Proxmox Mail Gateway, Mailu and Postal.",
      "Deployed HA Teleport for zero-trust access, with tbot for CI/CD and audited RBAC sessions for people.",
      "Load tested the Hostels module with k6 at 1,000+ concurrent users, so hostel allotment ran with no downtime.",
      "Set up monitoring with Zabbix and Grafana, and tried Telegraf and InfluxDB pipelines.",
      "Migrated the IRIS status page and moved services into Docker for simpler deploys.",
      "Built mobile staging with adb, Facebook's idb and GitLab CI, so developers get on-demand web and mobile builds.",
      "Evaluating MySQL Group Replication with MySQL Router and ProxySQL for high availability, and ClickHouse for activity logs.",
    ],
  },
];

export const community = [
  {
    org: "WebClub, NITK",
    logo: "/logos/webclub.png",
    role: "Executive Member, Systems and Security SIG",
    period: "Sept 2024 – present",
    points: [
      "Co-organised WebClub CTF 2025 and 2026, plus other systems and security events.",
    ],
  },
  {
    org: "IEEE, NITK",
    logo: "/logos/ieee_nitk.png",
    role: "Executive Member",
    period: "Oct 2024 – present",
    points: [
      "Point of contact for Eureka, IEEE NITK's flagship CTF, with 150+ participants.",
      "Mentored juniors on a Docker project and built a 6502 NES emulator with them.",
    ],
  },
  {
    org: "FOSS United Mangalore",
    logo: "/logos/fossunited.png",
    role: "Volunteer",
    period: "Jun 2024 – present",
    points: [
      "Help run the FOSS United city meetups in Mangalore, held every two months.",
      "Help organise MangaloreFOSS, the city's yearly FOSS event.",
    ],
  },
];

// The hero stack, top to bottom. Each layer lists the work done at that level,
// so technical areas always sit next to something real.
export const layers = [
  {
    id: "web",
    name: "Web",
    color: "var(--web)",
    work: [
      { text: "Hamfest India 2026: ticketing and check-in at the venue", href: "/projects/hamfest-india-2026-website" },
      { text: "Actions Recommendation Engine at Capital One", href: "/#work" },
      { text: "RupeeRail: a hackathon build, finalist at ETHGlobal Mumbai", href: "/projects/rupeerail" },
      { text: "ImpactChain: another one, from ETHGlobal New Delhi", href: "/projects/impactchain" },
    ],
  },
  {
    id: "net",
    name: "Networking",
    color: "var(--networks)",
    work: [
      { text: "IndiaFOSS 6.0: Wi-Fi for 700 people over 36 access points, with zero downtime", href: "/projects/indiafoss-event-network" },
      { text: "Automatic failover between internet links at Tata Communications", href: "/#work" },
    ],
  },
  {
    id: "linux",
    name: "Linux & servers",
    color: "var(--systems)",
    work: [
      { text: "Leading the systems team behind IRIS, used by 24,000+ people", href: "/#work" },
      { text: "Device Farm: Android and iOS simulators, in the browser", href: "/projects/device-farm" },
      { text: "Contributed to KubeVirt, which runs VMs on Kubernetes", href: "/projects/kubevirt" },
    ],
  },
  {
    id: "os",
    name: "OS & low level",
    color: "var(--violet)",
    work: [
      { text: "shaunAlloc: my own malloc and free, written on top of mmap", href: "/projects/shaunalloc" },
      { text: "shaunStore: a Redis-style server on a single event loop", href: "/projects/shaunstore" },
      { text: "CHIP-8 and NES emulators, to learn how a CPU actually runs", href: "/projects/emulators" },
    ],
  },
];

export const domains = {
  systems: { label: "Systems", color: "var(--systems)" },
  networks: { label: "Networks", color: "var(--networks)" },
  web: { label: "Web", color: "var(--web)" },
  hackathon: { label: "Hackathons", color: "var(--web3)" },
};
