---
name: "Asim Altaf"
tagline: "Backend Telecom Engineer"
heroHeadline: "I build the systems mobile networks run on."
heroSub: "Backend telecom systems in Go and C: 5G core, eSIM
provisioning, subscriber data, SS7 signalling, and VoIP paths at
production scale."
location: "Islamabad, Pakistan (UTC+5)"
availability: "Available immediately · remote or relocation"
email: "asimaltaf.dev@gmail.com"
phone: "+92-312-6358833"
whatsapp: "923126358833"
linkedin: "https://linkedin.com/in/asim-altaf"
github: "https://github.com/AsimAltaf-eg"
resume: "/Asim_Altaf_CV.pdf"
portrait: "/media/asim-altaf.png"
heroIntro: "ASIM ALTAF"
heroKicker: "BACKEND TELECOM SYSTEMS FOR LIVE MOBILE NETWORKS"
heroKickerHighlight: "LIVE MOBILE NETWORKS"
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
    - "5G CORE"
    - "SM-DP+"
    - "ES2+"
    - "SS7"
    - "MAP"
    - "TCAP"
    - "USSD"
    - "SIGTRAN"
    - "UDM/UDR"
    - "HLR"
  row2:
    - "GO"
    - "C/LIBUV"
    - "GRPC"
    - "KUBERNETES"
    - "SIP/RTP"
    - "10K CALLS/SEC"
    - "POSTGRESQL"
    - "REDIS"
    - "ORACLE"
    - "MTLS"
stats:
  - value: "10K+"
    label: "calls/sec on Go SIP traffic"
  - value: "70%"
    label: "API latency cut on VoIP APIs"
  - value: "3"
    label: "carrier systems in production"
experience:
  - company: "Safarifone"
    role: "Backend / Systems Engineer"
    dates: "Nov 2025 – Present"
    where: "Islamabad · mobile operator"
    lines:
      - "I work across four production teams at a carrier with a
        multi-million subscriber base — 5G core, eSIM, SS7, and the
        subscriber platform."
      - "Built our eSIM provisioning service in Go against a live
        SM-DP+ (ES2+, GSMA SGP.02): the whole flow from 'customer buys
        a plan' to 'profile installed on the phone', failure modes
        included."
      - "Implemented the 5G UDM/UDR in C with libuv — subscriber data,
        SUPI/SUCI, authentication vectors. Moved it from threads to an
        async event loop and watched the tail latency drop."
      - "Wrote the SS7 MAP adapter and USSD connector so application
        teams can speak JSON instead of learning TCAP."
  - company: "ContactVA"
    role: "Golang Developer · part-time remote contract"
    dates: "Sep 2024 – Jul 2026"
    where: "Remote · US enterprise clients"
    lines:
      - "VoIP/SIP infrastructure in Go: a UDP signalling server that
        held up at 10,000+ calls per second, with RTP relay and
        OpenSIPS routing."
      - "Cut API latency from about a second to ~300ms by reworking
        OpenSIPS flows and the PostgreSQL/Redis layer."
    note: "Ran alongside my full-time role from late 2025, with the
      client's agreement, until the contract wrapped."
  - company: "ZIXEL"
    role: "Backend Developer"
    dates: "Sep 2023 – Jun 2024"
    where: "Islamabad"
    lines:
      - "First role out of university. Go microservices across five
        products; caching and autoscaling that cut response times
        roughly 20%; mentored two juniors."
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
  - group: "Signalling & core"
    items: "SS7 (MAP, TCAP, USSD, SIGTRAN) · HLR/HSS · 5G SBA (UDM/UDR)
      · SIP/RTP"
  - group: "eSIM / RSP"
    items: "GSMA SGP.02 · ES2+ · SM-DP+ · mTLS"
  - group: "Languages & infra"
    items: "Go · C · C++ (libuv) · gRPC · Kubernetes · Docker · Oracle ·
      PostgreSQL · Redis · Temporal.io"
howIWork: "I build backend systems where correctness, latency, and uptime
  matter. My work sits close to live telecom traffic: eSIM provisioning,
  subscriber data, 5G core services, SS7/MAP adapters, and VoIP paths
  that have to keep working while customers are already using them."
hobbies:
  - name: "Systems thinking"
    line: "I break large telecom flows into state, failure modes, and
      observable boundaries."
  - name: "Hiking"
    line: "Islamabad sits against the Margalla Hills. I walk the trails
      to think through designs."
  - name: "Traveling"
    line: "Partly why I work on eSIMs — I've been the person landing
      without connectivity."
  - name: "Incident calm"
    line: "I prefer clear traces, small fixes, and postmortems people can
      actually use."
education:
  degree: "BS Computer Science"
  school: "National University of Computer & Emerging Sciences
    (FAST-NUCES)"
  years: "2019 – 2023"
  campusLabel: "FAST-NUCES Islamabad Campus"
  campusUrl: "https://isb.nu.edu.pk/"
  blurb: "FAST-NUCES is where I built the computer science base behind the telecom systems I work on now: operating systems, networking, databases, and the habit of debugging from first principles."
  certificationsTitle: "Certifications & focused learning"
  certifications:
    - title: "GSMA eSIM RSP / SM-DP+"
      issuer: "SGP.02, ES2+, callbacks, lifecycle state"
      year: "Production track"
    - title: "5G Core Subscriber Data"
      issuer: "UDM/UDR, SUPI/SUCI, authentication vectors"
      year: "3GPP focus"
    - title: "Cloud-native Backend Systems"
      issuer: "Kubernetes, Docker, gRPC, PostgreSQL, Redis"
      year: "Applied stack"
contactHeadline: "The inbox is open."
contactSub: "Hiring for backend or telecom systems? I answer fast — I
  deal with signalling failures daily."
---
