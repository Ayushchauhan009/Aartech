import {
  industryimg1,
  industryimg2,
  industryimg3,
  industryimg4,
} from "../assets/industryimages";

const industry = [
  {
    title: "RENEWABLE ENERGY",
    image: industryimg1,
    desc: "Dive into the future of renewable energy with Aartech Solonics. Leveraging our extensive expertise, global network, and robust infrastructure, we collaborate with clients to tailor comprehensive unitized power management solutions.",
  },
  {
    title: "POWER T&D",
    image: industryimg2,
    desc: "Whether you're an expert in distribution, EPC contracting, or system integration, or system integration, our solutions address pressing concerns like deregulation, privatization, power quality, and more,  to optimize energy management.",
  },
  {
    title: "HEAVY ENGINEERING",
    image: industryimg3,
    desc: "We pioneer solutions in industries like petrochemical, mining, textile, and cement. We optimize operations through reactive power compensation, cutting-edge control & automation via CRPS, and fault current limiting for enhanced safety.",
  },
  {
    title: "DEFENCE & EXPLORATION",
    image: industryimg4,
    desc: "Elevate defense capabilities with Aartech Solonics. Empowering space, marine, and remote sensing sectors through cutting-edge solutions. Our solutions offer uninterrupted power supply and advanced control systems that redefine reliability.",
  },
  {
    title: "HEALTHCARE",
    image: industryimg2,
    desc: "For consulting, EPC, and integration, Aartech Solonics optimizes power quality in health care industry. Our solutions address inter-dependency challenges & enhance plant utilization, revenue, productivity, and overall system improvements.",
  },
  {
    title: "IT & TELECOM",
    image: industryimg3,
    desc: "IT & Telecom demand top power quality. We offer advanced solutions to address high TCO associated with conventional UPS. Our facility protection surpasses load-only safeguarding, aligning with criticality and interdependence.",
  },
  {
    title: "WASTE MANAGEMENT",
    image: industryimg4,
    desc: "Wind power usage has seen unprecedented growth in the last few decades. Commercial deployment of wind power technologies has been backed up by strong fiscal measures for promoting renewable energy; just as turbine ratings are increasing on",
  },
  {
    title: "NON RENEWABLES",
    image: industryimg2,
    desc: "We drive non-renewable industries forward. From nuclear & thermal to diesel power, we empower critical sectors. Our expertise lies in fault current limiting, ensuring system stability, distributed automation, & remote telemetry-based solutions.",
  },
];
const product = [
  {
    title: "BTS 2000",
    image: industryimg1,
    desc: "BTS 2000 ensures uninterrupted power to critical plant motors. With precision timing and advanced features like fast transfer, phase prediction, and more, BTS 2000 excels in both thermal and nuclear power generation, as well as other sectors.",
  },
  {
    title: "CONTROL RELAY PANEL",
    image: industryimg2,
    desc: "Engineered for effortless control of transformers & lines through outdoor switchgear at 11KV & 33KV substations. Complete with main relays, fuses, switches, and more, these panels ensure efficient equipment monitoring.",
  },
  {
    title: "Kranking Ultracapacitors",
    image: industryimg3,
    desc: "Innovative KranKing® range of Ultracapacitors, specifically designed to transform engine cranking applications. They improve battery performance and extend its lifespan by reducing the burden on lead-acid batteries during engine starting.",
  },
  {
    title: "WTC",
    image: industryimg4,
    desc: "Wind power usage has seen unprecedented growth in the last few decades. Commercial deployment of wind power technologies has been backed up by strong fiscal measures for promoting renewable energy; just as turbine ratings are increasing on",
  },
  {
    title: "Fuel Cell",
    image: industryimg2,
    desc: "Wind power usage has seen unprecedented growth in the last few decades. Commercial deployment of wind power technologies has been backed up by strong fiscal measures for promoting renewable energy; just as turbine ratings are increasing on",
  },
  {
    title: "CLiP FAULT CURRENT LIMITORS",
    image: industryimg3,
    desc: "It has been safeguarding global systems for 25+ years. It offers protection up to 38kV, with high current ratings (5000A) & fault interruption up to 300kA rms symmetrical at 15.5kV. It is electronically sensed &  triggers to limit current.",
  },
  {
    title: "BEST CASE",
    image: industryimg4,
    desc: "Best case is beyond just an enclosure, it's your product's image. For lab cuts, demos, to crucial meets, we ensure your Best Case Scenario! We offer the right, durable & affordable enclosure that is customised as per your products.",
  },
  {
    title: "APU",
    image: industryimg2,
    desc: "Wind power usage has seen unprecedented growth in the last few decades. Commercial deployment of wind power technologies has been backed up by strong fiscal measures for promoting renewable energy; just as turbine ratings are increasing on",
  },
  {
    title: "Incinerator",
    image: industryimg2,
    desc: "Wind power usage has seen unprecedented growth in the last few decades. Commercial deployment of wind power technologies has been backed up by strong fiscal measures for promoting renewable energy; just as turbine ratings are increasing on",
  },
  {
    title: "CRP",
    image: industryimg2,
    desc: "Best case is beyond just an enclosure, it's your product's image. For lab cuts, demos, to crucial meets, we ensure your Best Case Scenario! We offer the right, durable & affordable enclosure that is customised as per your products.",
  },
];
const solution = [
  {
    title: "LOAD LIMITING",
    image: industryimg1,
    desc: "We understand the importance of maintaining optimal load levels, and our expertise lies in the creation of load limiters. These solutions offer exceptional reliability and performance, specifically catering to low-rating (< 100W) requirements.",
  },
  {
    title: "PULSE POWER",
    image: industryimg2,
    desc: "Our FaraDigm® Ultracapacitors excel in pulse power applications. From remote solar power to automotive needs, our solution offers high reliability, long life, and maintenance-free operation. We customize integrated solutions for diverse industries.",
  },
  {
    title: "ENERGY HARVESTING",
    image: industryimg3,
    desc: "We pioneer energy harvesting, harnessing micro sources like Solar, Wind, and Hydro power for portable devices via PV/micro-turbines. Versatile in Marine, Defense, Telecom, and more. FaraDigm™ Ultracapacitors offer tailored solutions.",
  },
  {
    title: "Energy Storage",
    image: industryimg4,
    desc: "Wind power usage has seen unprecedented growth in the last few decades. Commercial deployment of wind power technologies has been backed up by strong fiscal measures for promoting renewable energy; just as turbine ratings are increasing on",
  },
  {
    title: "Energy Efficiency",
    image: industryimg2,
    desc: "Wind power usage has seen unprecedented growth in the last few decades. Commercial deployment of wind power technologies has been backed up by strong fiscal measures for promoting renewable energy; just as turbine ratings are increasing on",
  },
  {
    title: "Demand Side Management",
    image: industryimg3,
    desc: "Wind power usage has seen unprecedented growth in the last few decades. Commercial deployment of wind power technologies has been backed up by strong fiscal measures for promoting renewable energy; just as turbine ratings are increasing on",
  },
  {
    title: "Solid Waste Treatment",
    image: industryimg4,
    desc: "Wind power usage has seen unprecedented growth in the last few decades. Commercial deployment of wind power technologies has been backed up by strong fiscal measures for promoting renewable energy; just as turbine ratings are increasing on",
  },
  {
    title: "CONTROL & AUTOMATION",
    image: industryimg2,
    desc: "From affordable distribution solutions to advanced customizations, we seamlessly blend technology. We craft control solutions by integrating components, adding value through solid-state & microprocessor-based controls for unique needs.",
  },
  {
    title: "Portable Backup Unit",
    image: industryimg2,
    desc: "Wind power usage has seen unprecedented growth in the last few decades. Commercial deployment of wind power technologies has been backed up by strong fiscal measures for promoting renewable energy; just as turbine ratings are increasing on",
  },
  {
    title: "RELIABLE ENGINE STARTING",
    image: industryimg4,
    desc: "Our KranKing™ Ultracapacitors are a long-term solution for IC Engine cranking. Alongside batteries, they provide a powerful cranking current during the first moments of ignition, surmounting initial friction and energizing the starter motor.",
  },
  {
    title: "FAULT CURRENT LIMITING",
    image: industryimg2,
    desc: "Aartech, in partnership with M/s G&W Elec. Co. USA, is a trusted integrator of CLiP® Fault Current Limiter solutions. It excels with high continuous current ratings & rapid operation. Its versatility extends to system upgrades, reactor bypass, & more.",
  },
  {
    title: "PROCESS CONTINUITY",
    image: industryimg2,
    desc: "We work with consultants, equipment manufacturers, contractors, and end users to address process continuity challenges. For sectors like Thermal Power, Nuclear Power, etc, our BTS 2000 Numerical Fast Bus Transfer Systems offer proven solutions.",
  },
  {
    title: "Green Energy Backup Unit",
    image: industryimg4,
    desc: "Our KranKing™ Ultracapacitors are a long-term solution for IC Engine cranking. Alongside batteries, they provide a powerful cranking current during the first moments of ignition, surmounting initial friction and energizing the starter motor.",
  },
  {
    title: "AC to DC Converter",
    image: industryimg2,
    desc: "Aartech, in partnership with M/s G&W Elec. Co. USA, is a trusted integrator of CLiP® Fault Current Limiter solutions. It excels with high continuous current ratings & rapid operation. Its versatility extends to system upgrades, reactor bypass, & more.",
  },
  {
    title: "Customised Plastic Cases",
    image: industryimg2,
    desc: "We work with consultants, equipment manufacturers, contractors, and end users to address process continuity challenges. For sectors like Thermal Power, Nuclear Power, etc, our BTS 2000 Numerical Fast Bus Transfer Systems offer proven solutions.",
  },
];

export { industry, product, solution };
