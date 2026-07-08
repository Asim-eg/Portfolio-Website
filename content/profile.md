---
name: "Asim Altaf"
tagline: "Backend Systems Engineer"
heroHeadline: "I build backend systems that stay correct under load."
heroSub: "Backend systems in C/C++ and Go: distributed services, event-driven
telecom backends, real-time communication paths, and production debugging
workflows."
location: "Islamabad, Pakistan (UTC+5)"
availability: "Available immediately · remote or relocation"
email: "asimaltaf.dev@gmail.com"
phone: "+92-312-6358833"
whatsapp: "923126358833"
linkedin: "https://linkedin.com/in/asim-altaf"
github: "https://github.com/AsimAltaf-eg"
resume: "/resume/index.html"
portrait: "/media/asim-altaf.png"
heroIntro: "ASIM ALTAF"
heroKicker: "HIGH-PERFORMANCE BACKENDS FOR LIVE SYSTEMS"
heroKickerHighlight: "LIVE SYSTEMS"
nav:
  links:
    - label: "Skills"
      href: "#skills"
    - label: "About"
      href: "#about"
    - label: "Craft"
      href: "#craft"
    - label: "Work"
      href: "#work"
    - label: "Education"
      href: "#education"
    - label: "Contact"
      href: "#contact"
  actions:
    - label: "GitHub"
      kind: "github"
    - label: "LinkedIn"
      kind: "linkedin"
    - label: "WhatsApp"
      kind: "whatsapp"
    - label: "Resume"
      kind: "resume"
    - label: "+92-312-6358833"
      kind: "phone"
actions:
  contact: "Contact Me"
  details: "Details"
  downloadResume: "Download Resume"
sections:
  about: "About me"
  skills: "Skills stack"
  craft: "Craft"
  work: "Work"
  education: "Education"
  contact: "Say hello"
marquee:
  row1:
    - "C/C++"
    - "LIBUV"
    - "5G CORE"
    - "SM-DP+"
    - "ES2+"
    - "SS7"
    - "MAP"
    - "TCAP"
    - "USSD"
    - "SIGTRAN"
    - "UDM/UDR"
    - "CODE REVIEW"
  row2:
    - "GO"
    - "DISTRIBUTED SYSTEMS"
    - "GRPC"
    - "KUBERNETES"
    - "SIP/RTP"
    - "10K CALLS/SEC"
    - "POSTGRESQL"
    - "REDIS"
    - "VALGRIND"
    - "BENCHMARKING"
stats:
  - value: "10K+"
    label: "calls/sec on Go SIP traffic"
  - value: "70%"
    label: "API latency cut on VoIP APIs"
  - value: "3+"
    label: "years across backend and telecom systems"
experience:
  - company: "Safarifone"
    role: "Software Engineer · C/C++/Go"
    dates: "Nov 2025 – Present"
    where: "Islamabad, PK · telecom backends"
    lines:
      - "Building high-performance telecom backends in C/C++ with libuv
        event loops and Go services for UDM, eSIM, and subscriber platforms."
      - "Implementing 5G Core UDM features aligned with 3GPP Release 19
        requirements, including subscriber data and authentication flows."
      - "Improving scalability and debuggability in 50K+ LOC codebases
        with async components, profiling, and Valgrind."
    impact:
      label: "Production depth"
      text: "Carrier-grade C/C++ and Go work across UDM, eSIM, subscriber platforms, and live telecom backends."
      tags:
        - "C/C++"
        - "libuv"
        - "5G UDM"
        - "eSIM"
  - company: "ContactVA"
    role: "Go Developer"
    dates: "Sep 2024 – Jul 2026"
    where: "Turkey · Remote"
    lines:
      - "Built scalable real-time communication systems with a focus on
        low-latency call processing and reliability."
      - "Designed a Go UDP server for 10,000+ real-time calls per second
        and tuned OpenSIPS call flows."
      - "Reduced API latency by roughly 70%, from about 1000ms to ~300ms,
        by optimizing PostgreSQL, Redis, and high-concurrency paths."
    impact:
      label: "Scale under traffic"
      text: "Remote delivery on real-time communication systems: 10K+ calls/sec and roughly 70% API latency reduction."
      tags:
        - "10K+ calls/sec"
        - "~70% latency cut"
        - "OpenSIPS"
        - "Redis"
  - company: "ZIXEL"
    role: "Software Engineer"
    dates: "Sep 2023 – Jun 2024"
    where: "Islamabad, PK"
    lines:
      - "Designed, optimized, and maintained scalable Go microservices
        with emphasis on reliability, performance, and business impact."
      - "Built and optimized 3+ services using autoscaling, concurrency,
        and caching, improving response performance by roughly 20%."
      - "Led code reviews and mentored developers to improve consistency
        and maintainability across services."
    impact:
      label: "Foundation to ownership"
      text: "First software role: built Go microservices, improved response time by ~20%, and grew into code-review ownership."
      tags:
        - "3+ services"
        - "~20% faster"
        - "Go"
        - "Reviews"
systems:
  - title: "eSIM lifecycle"
    desc: "Order to installed profile, against a live SM-DP+."
    nodes:
      - "App"
      - "SM-DP+"
      - "HLR"
      - "Phone"
  - title: "5G UDM / UDR"
    desc: "Subscriber data and auth vectors, 3GPP TS 29.503/29.505."
    nodes:
      - "AMF"
      - "UDM"
      - "UDR"
  - title: "SS7 MAP · USSD"
    desc: "The signalling layer, translated to JSON for app teams."
    nodes:
      - "App"
      - "JSON GW"
      - "MAP"
      - "HLR"
  - title: "VoIP at 10K calls/sec"
    desc: "SIP signalling, RTP relay, OpenSIPS routing, in Go."
    nodes:
      - "SIP"
      - "Server"
      - "RTP relay"
craft:
  - title: "eSIM provisioning"
    desc: "Full lifecycle against a live SM-DP+: ordering, callbacks, state machine, HLR lookups. From 'customer buys a plan' to 'profile installed'."
  - title: "5G core"
    desc: "UDM/UDR per 3GPP TS 29.503/29.505 in C with libuv. Subscriber data, SUPI/SUCI, authentication vectors."
  - title: "Signalling"
    desc: "SS7 MAP and USSD adapters so application teams speak JSON instead of learning TCAP."
  - title: "VoIP at scale"
    desc: "SIP signalling and RTP relay in Go. 10,000+ calls per second, latency cut from ~1s to ~300ms."
  - title: "Production debugging"
    desc: "Race conditions, correlation timeouts, binary framing edge cases. I write the postmortem people can read."
stack:
  - group: "Systems & languages"
    items: "C/C++ · Go · libuv event loops · Distributed systems ·
      Real-time systems · Memory management"
  - group: "Telecom & data paths"
    items: "5G UDM · eSIM / RSP · USM · CBS · BSS · SS7/MAP ·
      SIP/RTP · HLR/HSS"
  - group: "Infra & tooling"
    items: "Code review · Git/GitHub · Kubernetes · Docker ·
      PostgreSQL · Redis · Jenkins · Valgrind · Benchmarking"
howIWork: "I build backend systems where correctness, latency, and uptime
  matter: C/C++ event loops, Go services, telecom subscriber platforms,
  real-time communication paths, production debugging, and code review
  practices."
hobbies:
  - name: "Systems thinking"
    line: "I map states, edge cases, and failure modes."
  - name: "Hiking"
    line: "Margalla hikes keep me clear-headed."
  - name: "Traveling"
    line: "Travel keeps me close to real eSIM problems."
  - name: "Incident calm"
    line: "Traces first, small fixes, usable postmortems."
education:
  degree: "BS Computer Science"
  school: "National University of Computer & Emerging Sciences
    (FAST-NUCES)"
  years: "Aug 2019 – Aug 2023"
  campusLabel: "FAST-NUCES Islamabad Campus"
  campusUrl: "https://isb.nu.edu.pk/NEW/this.html"
  blurb: "FAST-NUCES is where I built the computer science base behind the telecom systems I work on now: operating systems, networking, databases, and the habit of debugging from first principles."
  certificationsTitle: "Certifications & focused learning"
  certifications:
    - title: "5G Network Fundamentals"
      issuer: "Core networks and subscriber systems"
      year: "Completed"
    - title: "Go Complete Course"
      issuer: "Concurrency, services, and tooling"
      year: "Completed"
    - title: "AWS Cloud Practitioner"
      issuer: "Cloud fundamentals and architecture"
      year: "Ongoing"
contactHeadline: "The inbox is open."
contactSub: "Hiring for backend, telecom, or systems work? I answer fast
  and bring the debugging discipline required for production code."
---
