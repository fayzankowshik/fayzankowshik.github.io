/* ============================================================================
   content.js — EVERYTHING you see on the website is written in this one file.

   HOW TO EDIT
   1. Change the text between the "quotes". Keep the quotes and the commas.
   2. To add an item to a list, copy an existing { ... } block (including the
      comma after it), paste it, and change the text.
   3. To remove an item, delete its whole { ... } block.
   4. Save (on GitHub: "Commit changes"). The live site updates in about a minute.

   IF THE SITE GOES BLANK after an edit, a quote, comma or bracket is missing
   in your last change. Undo it on GitHub (History > Revert) or fix the typo.
   Text that contains a " must write it as \"  (example: "the \"best\" paper").
   ========================================================================== */

window.SITE = {

  /* ---- Top of the page ---------------------------------------------------- */
  name: "Fayzan Kowshik Khan",
  headline: "Network engineer and M.Sc. researcher in wireless communications, seeking a Ph.D. position in Electrical and Computer Engineering.",
  intro: "I model and analyse wireless fading channels with machine learning at BRAC University, and I plan and optimise national fiber backbone networks at Fiber@Home. I want to bring both to doctoral research on channel modeling and next-generation wireless systems.",
  photo: "assets/photo.jpg",
  cv: "",   /* to show the "Download CV" button, upload the PDF into assets/ and write: cv: "assets/Fayzan_Kowshik_Khan_CV.pdf" */
  email: "kowshik.f.khan@gmail.com",
  location: "Uttara, Dhaka, Bangladesh",
  updated: "November 2026",

  links: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=cyqevQIAAAAJ" },
    { label: "GitHub", url: "https://github.com/fayzankowshik" }
  ],

  /* Short facts shown beside the photo. Add or remove lines freely. */
  facts: [
    { label: "Now", value: "Network Engineer, Fiber@Home Ltd. (since June 2024)" },
    { label: "Studying", value: "M.Sc. in EEE, BRAC University, expected July 2027" },
    { label: "Thesis", value: "ML-assisted modeling of fading channels in wireless networks" },
    { label: "English", value: "IELTS 7.5 overall" }
  ],

  /* ---- For prospective supervisors --------------------------------------- */
  interests: [
    "Wireless communications",
    "Channel modeling",
    "Antennas and beamforming",
    "Machine learning for wireless systems",
    "5G/6G networks",
    "Radio communication systems"
  ],

  fit: [
    {
      title: "Research in progress on fading channels",
      text: "My M.Sc. thesis applies machine learning to the modeling and performance analysis of fading channels in wireless networks, supervised by Professor Dr. Amirul Islam."
    },
    {
      title: "Operational network experience",
      text: "At Fiber@Home I plan and optimise a national backbone. Traffic engineering I contributed to lowered latency by 17%, and predictive traffic modeling reduced average downtime by 12%."
    },
    {
      title: "A record of finishing and presenting research",
      text: "Co-author of a paper at Frontiers in Optics + Laser Science 2023, and Champion of the Undergraduate Thesis Paper Contest at the IEEE Student-Led Conference 2023."
    }
  ],

  /* ---- Education ----------------------------------------------------------- */
  education: [
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      school: "BRAC University, Dhaka, Bangladesh",
      dates: "July 2025 to July 2027 (expected)",
      details: [
        "GPA 3.67/4.00 (projected)",
        "Thesis: Machine Learning-Assisted Modeling and Performance Analysis of Fading Channels in Wireless Networks",
        "Advisor: Professor Dr. Amirul Islam"
      ]
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      school: "Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      dates: "July 2019 to September 2023",
      details: [
        "GPA 3.47/4.00, among the top 12% of the class. Last 60 credit hours: 3.62/4.00",
        "Thesis: Efficient Paddy Yield Detection in Bangladesh Using Machine Learning: A Dataset Driven Approach",
        "Advisor: Professor Md. Adnan Quaium"
      ]
    }
  ],

  /* ---- Research and publications ---------------------------------------- */
  /* "status" is the small note shown next to the title. "link" is optional. */
  research: [
    {
      title: "Machine Learning-Assisted Modeling and Performance Analysis of Fading Channels in Wireless Networks",
      status: "M.Sc. thesis, in progress",
      authors: "Advisor: Professor Dr. Amirul Islam, BRAC University",
      venue: "",
      text: "Uses machine learning to model fading behaviour and to analyse the communication performance of wireless links.",
      link: "",
      linkLabel: ""
    },
    {
      title: "Nearly Perfect and Wavelength-Adjustable Hexa Narrowband Absorber Using a One-Dimensional Defective Photonic Crystal Structure with Two Graphene Defects",
      status: "Conference paper, 2023",
      authors: "Angkur Ghosh Priyam, Ayon Datta, Tahera Shormila Toma, Fayzan Kowshik Khan",
      venue: "Frontiers in Optics + Laser Science 2023 (FiO + LS), Washington, United States, 9 to 12 October 2023",
      text: "Proposes a wavelength-adjustable absorber built from a one-dimensional photonic crystal with two graphene defects. It reaches more than 95% absorption at six separate wavelengths in the visible spectrum.",
      link: "https://scholar.google.com/citations?user=cyqevQIAAAAJ",
      linkLabel: "View on Google Scholar"
    },
    {
      title: "Efficient Paddy Yield Detection in Bangladesh Using Machine Learning: A Dataset Driven Approach",
      status: "B.Sc. thesis, 2023. Contest champion",
      authors: "Fayzan Kowshik Khan, Shamik Dey, Tahera Shormila Toma, Shoyeb Ahmed Fahim, Md. Adnan Quaium",
      venue: "Champion, Undergraduate Thesis Paper Contest, International Student-Led Conference, IEEE Bangladesh Section Co-located Conferences 2023",
      text: "A dataset-driven machine learning study of paddy yield in Bangladesh, supervised by Professor Md. Adnan Quaium.",
      link: "",
      linkLabel: ""
    }
  ],

  /* ---- Work experience ----------------------------------------------------- */
  experience: [
    {
      role: "Network Engineer",
      org: "Fiber@Home Ltd., Dhaka, Bangladesh",
      dates: "June 2024 to present",
      points: [
        "Design and implement end-to-end fiber optic pathways for national telecommunication infrastructure. Optimised topology design reduced deployment cost by 10% and improved link redundancy.",
        "Contributed to traffic engineering that achieved 17% lower latency and 10% higher bandwidth utilisation.",
        "Applied predictive traffic modeling and statistical analysis to find network stress patterns, leading to a 12% reduction in average downtime.",
        "Analyse latency, packet loss, throughput and bandwidth utilisation to support network optimisation.",
        "Run feasibility studies and prepare technical and financial reports for enterprise clients, ISPs and telecom operators.",
        "Explore modeling approaches for network design and protocol optimisation, connecting theory with operational data."
      ]
    }
  ],

  /* ---- Projects -------------------------------------------------------------
     area   : used for the filter buttons. Reuse an existing name or invent one.
     image  : optional picture in the assets folder ("" for none).
     links  : optional list of { label, url }.
  -------------------------------------------------------------------------- */
  projects: [
    {
      title: "Starlink and Fiber@Home connectivity and fiber backhaul integration",
      date: "March 2025",
      area: "Networks",
      context: "Fiber@Home Ltd.",
      summary: "Coordinated fiber backhaul for Starlink ground stations and optimised the links between Fiber@Home points of presence and Starlink terminals, enabling high-speed internet at more than 100 remote sites.",
      points: [
        "Coordinated the deployment of fiber backhaul infrastructure for Starlink ground stations, with low-latency routing into the Fiber@Home backbone.",
        "Optimised connectivity between Fiber@Home points of presence and Starlink satellite terminals."
      ],
      tools: "Fiber backhaul, PoP connectivity, satellite ground stations",
      image: "", imageAlt: "",
      links: []
    },
    {
      title: "Multimedia-enabled network design for the EEE Department, AUST",
      date: "",
      area: "Networks",
      context: "Design study",
      summary: "A two-tier campus network for the department's teaching labs with redundant cores, one VLAN per lab, lab isolation and quality of service for video conferencing and lecture streaming.",
      points: [
        "Redundant pair of Layer 3 core switches with HSRP gateways and dual uplinks from every lab switch.",
        "13 VLANs summarised into a single 192.168.96.0/20 block, so the edge router needs one return route.",
        "Access control lists keep labs isolated and allow only designated PCs to reach the internet.",
        "DSCP marking and queueing guarantee bandwidth for video conferencing, lecture streaming and lab data.",
        "Estimated peak internet demand of about 250 Mbps from per-application traffic assumptions.",
        "A theoretical design: configuration is documented in Cisco IOS syntax with a test plan, not validated on hardware."
      ],
      tools: "Cisco IOS, Packet Tracer, VLANs, HSRP, ACLs, NAT, QoS, SNMP",
      image: "", imageAlt: "",
      links: [ { label: "Read the report (PDF)", url: "reports/campus-network-design-report.pdf" } ]
    },
    {
      title: "Smart environment monitoring and alert system with edge-cloud integration",
      date: "September 2025",
      area: "Embedded and power",
      context: "Group project",
      summary: "An ESP32 sensor node that raises local alerts at the edge and streams temperature, humidity and light readings to a ThingsBoard cloud dashboard over MQTT secured with TLS.",
      points: [
        "DHT22 and LDR sensors on an ESP32, with LEDs, a buzzer and an LCD for local normal, warning and critical alerts.",
        "Edge processing applies thresholds and sends 5-sample averages to reduce the data sent to the cloud.",
        "JSON telemetry published over MQTT to a ThingsBoard dashboard with gauges and time-series charts.",
        "Moved from plain MQTT on port 1883 to MQTT over TLS on port 8883 with server certificate verification, and kept credentials out of the main source file."
      ],
      tools: "ESP32, Arduino IDE (C/C++), MQTT, TLS, JSON, ThingsBoard",
      image: "assets/iot-hardware.jpg",
      imageAlt: "Breadboard with an ESP32, sensors, LEDs and an LCD beside a laptop showing the cloud dashboard",
      links: [
        { label: "Read the report (PDF)", url: "reports/smart-environment-monitoring-report.pdf" },
        { label: "Watch the demonstration videos", url: "https://www.youtube.com/watch?v=Aebty2T9l8s&list=PLsbiEWhcUI4pJ_f-VOUnGMUgKx2fmlagf" }
      ]
    },
    {
      title: "12 nm gate-all-around stacked nanosheet FET with high-k gate dielectrics",
      date: "",
      area: "Semiconductor devices",
      context: "TCAD simulation",
      summary: "Simulated single, double and triple vertically stacked nanosheet GAA FETs at a 12 nm channel length and compared SiO2, Si3N4 and HfO2 gate oxides.",
      points: [
        "Device: 12 nm channel length, 2 nm oxide, 50 nm by 5 nm sheets, simulated in Sentaurus TCAD.",
        "Compared gate dielectrics with dielectric constants from 3.9 to 22.",
        "Against SiO2, the HfO2 device gave about 1.6 times the ON current and about 1.9 times lower OFF current."
      ],
      tools: "Sentaurus TCAD",
      image: "", imageAlt: "",
      links: []
    },
    {
      title: "TCAD replication and analysis of a 45 nm double-gate MOSFET",
      date: "",
      area: "Semiconductor devices",
      context: "Paper replication",
      summary: "Rebuilt a published 45 nm double-gate MOSFET in Sentaurus and reproduced its ID-VGS and ID-VDS characteristics across six channel doping levels.",
      points: [
        "Replicates the study by Naved Ali et al. (2015) on channel doping in a 45 nm DG-MOSFET.",
        "Simulated threshold voltage rises from 0.34 V to 0.46 V as doping goes from 1e16 to 2e18 per cubic cm, following the paper's trend (0.28 V to 0.40 V).",
        "Resolved convergence failures at high doping by refining the mesh and reducing the minimum step size."
      ],
      tools: "Sentaurus Device Editor, SDevice, Sentaurus Visual",
      image: "assets/dg-mosfet-structure.jpg",
      imageAlt: "Simulated double-gate MOSFET cross-section coloured by doping concentration",
      links: [ { label: "Read the report (PDF)", url: "reports/45nm-DG-MOSFET-TCAD-report.pdf" } ]
    },
    {
      title: "Design and simulation of a 7-transistor SRAM cell",
      date: "",
      area: "Semiconductor devices",
      context: "VLSI design",
      summary: "Designed, simulated and laid out a 7T SRAM cell with a dedicated read port in Cadence Virtuoso on a 90 nm PDK. The layout passes DRC and LVS.",
      points: [
        "Separate read port of two series NMOS transistors, so a read cannot flip the stored bit.",
        "Transient simulation in Spectre confirms write, hold and non-destructive read for both logic values.",
        "Average power of about 210 nW during active operation.",
        "Layout is DRC-clean and LVS reports zero net, device, pin and parameter mismatches."
      ],
      tools: "Cadence Virtuoso, Spectre, 90 nm generic PDK",
      image: "assets/sram-layout.jpg",
      imageAlt: "Layout of the 7T SRAM cell with poly gates and Metal 1 routing",
      links: [ { label: "Read the report (PDF)", url: "reports/7T-SRAM-cell-report.pdf" } ]
    },
    {
      title: "GUI for an ODE solver and differentiator in MATLAB",
      date: "February 2022",
      area: "Software",
      context: "MATLAB App Designer",
      summary: "A MATLAB app that solves ordinary differential equations up to second order and differentiates functions numerically, with plots for each result.",
      points: [
        "Several solver methods, including Euler's method, with a choice of forward, backward or central differentiation.",
        "Opens a Simulink model from the app for further simulation.",
        "Checked against known analytical solutions."
      ],
      tools: "MATLAB, App Designer, Simulink",
      image: "assets/ode-solver.jpg",
      imageAlt: "The MATLAB app showing a second-order ODE solution and the derivative of sin(x)",
      links: []
    },
    {
      title: "Thyristor-based cycloconverter for induction motor speed control",
      date: "",
      area: "Embedded and power",
      context: "Power electronics lab project",
      summary: "Built a thyristor-based cycloconverter that varies the frequency of the AC supply to control the speed of an induction motor.",
      points: [
        "Hardware circuit built around thyristors and PC817 optocouplers.",
        "Reviewed power factor and harmonic limits for such converters against IEEE 519-2014."
      ],
      tools: "Thyristors, PC817 optocoupler",
      image: "", imageAlt: "",
      links: []
    },
    {
      title: "Fault detection on overhead transmission lines",
      date: "",
      area: "Embedded and power",
      context: "Group project",
      summary: "An Arduino-based model of a transmission line that detects faults and shows the fault type and location on an LCD.",
      points: [
        "Step-down transformer (220 V to 9 V), bridge rectifier, relays and bulbs as loads.",
        "Built both as a simulation and as a hardware setup."
      ],
      tools: "Arduino, relays, 16x2 LCD",
      image: "", imageAlt: "",
      links: []
    },
    {
      title: "Automated billing smart shopping trolley",
      date: "",
      area: "Embedded and power",
      context: "Microprocessor lab, group of six",
      summary: "An Arduino and RFID trolley that bills items as they are added, to cut queueing time at checkout.",
      points: [
        "My part: set up the RFID reader module in the circuit and prepared the project report."
      ],
      tools: "Arduino, RFID reader, LCD",
      image: "", imageAlt: "",
      links: []
    }
  ],

  /* ---- Honours and awards --------------------------------------------------- */
  awards: [
    {
      title: "Champion, Undergraduate Thesis Paper Contest",
      where: "International Student-Led Conference, IEEE Bangladesh Section Co-located Conferences",
      year: "2023"
    },
    {
      title: "Runners-up, Final Year Design Project Poster Exhibition and Competition",
      where: "Ahsanullah University of Science and Technology, Fall 2022",
      year: "2022"
    }
  ],

  /* ---- Skills ----------------------------------------------------------------- */
  skills: [
    { group: "Networking", items: "Network architecture, wireless communication systems, IP networking, routing, VLANs, traffic engineering, network performance analysis" },
    { group: "Programming", items: "Python, MATLAB, C, C++, SQL, HTML/CSS" },
    { group: "Data analysis", items: "Pandas, NumPy, Matplotlib" },
    { group: "Simulation and design tools", items: "Cadence, Sentaurus TCAD, Quartus, Proteus, PSpice, AutoCAD, Arduino, Connect Master" }
  ],

  /* IELTS scores. Delete the whole "english" block to hide it. */
  english: {
    test: "IELTS",
    overall: "7.5",
    parts: [
      { label: "Listening", value: "7.0" },
      { label: "Reading", value: "8.0" },
      { label: "Writing", value: "7.0" },
      { label: "Speaking", value: "7.5" }
    ]
  },

  /* ---- Leadership and memberships -------------------------------------------- */
  service: [
    {
      role: "Vice President, Dohar-Nawabganj Community Development Initiative (DNCDI)",
      dates: "January 2022 to present",
      points: [
        "Taught basic computer literacy to about 120 students over three days in rural areas.",
        "Led winter clothing distribution to more than 200 people in 2024."
      ]
    },
    {
      role: "Student Member, Institute of Electrical and Electronics Engineers (IEEE)",
      dates: "",
      points: []
    }
  ],

  /* ---- Contact ------------------------------------------------------------------ */
  contactNote: "I am looking for a Ph.D. supervisor in wireless communications, channel modeling or machine learning for wireless systems. I am glad to share transcripts, my thesis progress or anything else that helps."
};
