import { useState, useEffect } from 'react';
// Using the imported bg variable directly
import './tech-theme.css';
// Animation imports
import { ScrollReveal, ScaleReveal, TiltCard, Parallax } from './components/ScrollReveal';
import { ScrollProgress, FloatingElement } from './components/ScrollProgress';
import { SpaceBackground } from './components/SpaceBackground';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { RiTelegramLine } from "react-icons/ri";
import { AiOutlineDiscord } from "react-icons/ai";
import Arya from "./sp/Arya.png";
import Cipher from "./sp/cipher.jpg";
import Dev from "./sp/DEV.png";
import Hack from "./sp/hack.jpg";
import Lincom from "./sp/lincom.jpg";
import movie from "./sp/movie.jpg";
import photo from "./sp/photographyclub.jpg";
import wem from "./sp/wem.jpg";
import AIC from "./sp/AIC logo.svg";
import IIC from "./sp/iic.png";
import cup from './sp/UP.png';
import grass from './sp/grass.jpg';
import cloudy from './sp/2.png';
import nature from './sp/1.png';
import softserv from './sp/softserv.jpg';
import origin from './sp/65537c8bbad723130b5e7dcd_origin-logo-1200x630.png';
import wisflux from './assets/Sponsor post/wisflux.png';
import microsoft from './sp/microsoft_logo.jpg';
import azure from './sp/Azure.png';
import celabal from './sp/celebal.png';
import meta from './sp/metacube_logo.jpg';
import aiQuant from './assets/Sponsor post/aiquant.png';
import dotSquares from './assets/Sponsor post/Dot squares .png';
import habileLabs from './assets/Sponsor post/habile labs.png';
import mongoDb from './assets/Sponsor post/mongoDB.png';
import postman from './assets/Sponsor post/postman.png';
import unstopLogo from './assets/Sponsor post/unstop.png';
import xyzLogo from './assets/Sponsor post/xyz.png';
import youngXcode from './assets/Sponsor post/youngxcode.png';
import alphonic from './assets/Sponsor post/Alphonic.png';
import appyzie from './assets/Sponsor post/Appyzie.png';
import brandmetrics from './assets/Sponsor post/Brandmetrics.png';
import mandelbulb from './assets/Sponsor post/Mandelbulb.png';
import moneyGrow from './assets/Sponsor post/MoneyGrow.png';
import sumindex from './assets/Sponsor post/SUMINDEX.png';
import wavvyy from './assets/Sponsor post/Wavvyy.png';
import zordial from './assets/Sponsor post/Zordial.png';
import kabadcart from './assets/Sponsor post/kabadcart.png';
import youthTalks from './assets/Sponsor post/youth Talks.png';

// Import images
import hlogo from './assets copy/HAV2.0_.png';
import spaceBackground from './assets copy/space.jpg';

// Import Past Glimpses images
import G1 from './assets/G1.JPG';
import G2 from './assets/G2.JPG';
import G3 from './assets/G3.JPG';
import G4 from './assets/G4.JPG';
import G5 from './assets/G5.JPG';
import G6 from './assets/G6.JPG';
import G7 from './assets/G7.JPG';
// import devesh from './mentors/deveshbirla.jpg';
// import ajay from './mentors/ajayshram.jpg';
// import ajeet from './mentors/ajeetchaudhry.jpg';
// import akhil from './mentors/akhilashtrivadi.jpg';
// import aman from './mentors/amanpandey.jpg';
// import ashutosh from './mentors/ashutosh.jpg';
// import ayush from './mentors/ayush.jpg';
// import bhuvnash from './mentors/bhuvnashwar.jpg';
// import jaghmohan from './mentors/jagmohan.jpg';
// import manish from './mentors/manish.jpg';
// import nitin from './mentors/nitinShulkla.jpg';
// import puneet from './mentors/puneet jain.jpg';
// import rahul from './mentors/rahulvyas.jpg';
// import rajat from './mentors/rajatgoyal.jpg';
// import sarwan from './mentors/sarwan.jpg';
// import sunil from './mentors/sunilkumar.jpg'
// import satyam from './mentors/satyamgupta.jpg';
// import tapendra from './mentors/tapendra.jpg';
// import umashankar from './mentors/umashanker.jpg';
import {
  Shield,
  Cloud,
  Blocks,
  Gamepad2,
  Cpu,
  Mail,
  MapPin,
  MessageSquare,
  ExternalLink,
  Eye,
  Lightbulb,
  Instagram,
  Linkedin,
  Twitter,
  Sword,
  Zap,
  Target,
  Menu,
  X,
  Phone,
  UserCheck,
  Trophy,
  Award,
  AlertTriangle,
  Laptop,
  CreditCard,
  Gift,
  Clock,
  Mic,
  Users,
  Music,
  Coffee,
  Upload,
} from 'lucide-react';

// Loader component
const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f1923]">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          {/* Valorant-inspired loader animation */}
          <div className="absolute inset-0 border-4 border-[#ffffff] border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-4 border-4 border-[#0f1923] border-b-transparent rounded-full animate-spin animation-delay-150"></div>
          <div className="absolute inset-8 border-4 border-[#ffffff] border-l-transparent rounded-full animate-spin animation-delay-300"></div>
        </div>
        <h2 className="text-2xl font-bold text-[#ffffff] mb-2">LOADING MISSION DATA</h2>
        <p className="text-gray-400">Initializing tactical systems...</p>
      </div>
    </div>
  );
};

// Valorant agent roles for theme categories
// const agentRoles = {
//   DUELIST: 'Duelist',
//   SENTINEL: 'Sentinel',
//   INITIATOR: 'Initiator',
//   CONTROLLER: 'Controller'
// };

//Tech-Based theme name for categories
const agentRoles = {
  INNOVATOR: 'Innovator',
  GUARDIAN: 'Guardian',
  PIONEER: 'Pioneer',
  ARCHITECT: 'Architect'
};

// Timeline Data with Valorant theme
// Timeline Data with Valorant theme - Updated Schedule
// Timeline Data with Valorant theme - Precise Timing
const day1Data = [
  {
    time: "9:00 AM - 3:00 PM",
    event: "Registration and Check-in of Participants",
    icon: UserCheck
  },
  {
    time: "3:00 PM",
    event: "Inauguration Ceremony & Revealing of Problem Statements",
    icon: Mic
  },
  {
    time: "4:00 PM",
    event: "Participants Begin Coding",
    icon: Laptop
  },
  {
    time: "7:00 PM - 8:00 PM",
    event: "Session by Appyzie on Low-Code, Automation, and AI",
    icon: Users
  },
  {
    time: "10:00 PM",
    event: "Mentor Round 1",
    icon: Shield
  },
  {
    time: "11:30 PM - 12:00 AM",
    event: "Pac Quest by GDG ACEIT",
    icon: Gamepad2
  },
  {
    time: "12:00 AM",
    event: "Networking Session for Participants",
    icon: MessageSquare
  }
];

const day2Data = [
  {
    time: "1:00 AM - 2:00 AM",
    event: "FUN Zone Begins & Music Jamming",
    icon: Music
  },
  {
    time: "2:00 AM",
    event: "Participants Continue Hacking & Finalize Key Modules",
    icon: Laptop
  },
  {
    time: "7:00 AM - 8:00 AM",
    event: "Freshen Up and Prepare for the Final Stretch",
    icon: Coffee
  },
  {
    time: "10:00 AM",
    event: "Mentor Round 2 (Final Mentoring Round)",
    icon: Shield
  },
  {
    time: "1:00 PM",
    event: "Project Submission, Code Freeze and Handover",
    icon: Upload
  },
  {
    time: "2:00 PM",
    event: "Judging Round & Final Evaluation Begins",
    icon: Trophy
  },
  {
    time: "3:00 PM",
    event: "Valedictory / Closing Ceremony, Announcement of Winners & Vote of Thanks",
    icon: Award
  }
];
// FAQs Data
const faqsData = {
  general: [
    {
      question: "Who can participate in Hack Arya Verse 2.0?",
      answer: "The hackathon is only open to college and university students currently pursuing their bachelor's or master's degrees."
    },
    {
      question: "What is the team size?",
      answer: "Teams can consist of 1-4 members. You can register as a team or individually and we'll help you find teammates during our team formation session."
    },
    {
      question: "Is there any registration fee?",
      answer: "No, Hack Arya Verse 2.0 is completely free to participate in the event. Food stalls will be at the venue A workspace will be provided throughout the event."
    }
  ],
  technical: [
    {
      question: "What technologies can we use?",
      answer: "You can use any programming language, framework, or tool you're comfortable with. The only requirement is that your project must be built during the hackathon."
    },
    {
      question: "Can we work on pre-existing projects?",
      answer: "No, all projects must be started from scratch at the hackathon. However, you're encouraged to come with ideas and familiarize yourself with any technologies you plan to use."
    },
    {
      question: "What if we don't have experience with certain technologies?",
      answer: "That's perfectly fine! Hackathons are great learning experiences. We'll have mentors available to help you with technical challenges throughout the event."
    }
  ],
  logistics: [
    {
      question: "Will there be travel reimbursements?",
      answer: "No, we are unable to provide travel reimbursements for participants."
    },
    {
      question: "What should we bring?",
      answer: "Bring your laptop, charger,extension board,any hardware you plan to use, and a valid student ID. We recommend bringing a change of clothes and any personal items you might need."
    },
    //{
    // question: "Will there be food provided?",
    //answer: "Yes! Meals, snacks, and coffee will be available at the event, but they will be paid. Students can purchase them directly from the stalls at the venue."
    //}
  ]
};

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-03-14T12:00:00+05:30'); // Countdown to 14 March 2026 12pm IST

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 sm:gap-8 text-white justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="text-2xl sm:text-4xl font-bold valorant-glow bg-[#1f2f3f] p-2 sm:p-4 rounded-none valorant-clip">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="mt-1 sm:mt-2 text-xs sm:text-sm uppercase tracking-wider">{unit}</div>
        </div>
      ))}
    </div>
  );
}

const themes = [
  {
    icon: Sword,
    title: 'AI & Machine Learning',
    role: agentRoles.INNOVATOR,
    description: 'Intelligent solutions using AI models & Open Innovation.'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    role: agentRoles.GUARDIAN,
    description: 'Strengthening digital defenses with AI-driven threat detection and blockchain security.'
  },
  {
    icon: Blocks,
    title: 'Web 3.0 & Blockchain',
    role: agentRoles.GUARDIAN,
    description: 'Building a secure, decentralized, and transparent digital world with blockchain.'
  },
  {
    icon: Target,
    title: 'Web & App Development',
    role: agentRoles.PIONEER,
    description: 'Innovative and functional applications & Open Innovation.'
  },
  {
    icon: Gamepad2,
    title: 'Game Development',
    role: agentRoles.INNOVATOR,
    description: 'Game development is the process of designing, creating, and programming interactive digital games.'
  },
  {
    icon: Eye,
    title: 'AR/VR',
    role: agentRoles.PIONEER,
    description: 'AR/VR blends the real and virtual worlds to create immersive, interactive experiences.'
  },
  {
    icon: Cpu,
    title: 'IoT & Smart Devices',
    role: agentRoles.ARCHITECT,
    description: 'Tech solutions for social good & Open Innovation.'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    role: agentRoles.ARCHITECT,
    description: 'Cloud and DevOps streamline app delivery through automation, scalability, and continuous deployment.'
  },
  {
    icon: Lightbulb,
    title: 'Open Innovation',
    role: agentRoles.INNOVATOR,
    description: 'Open innovation encourages collaboration and idea-sharing across diverse teams to develop creative, real-world solutions.'
  }
];

// const mentors = [
//   {
//     name: 'Agent Phoenix',
//     role: 'AI Research Lead',
//     image: '/images/valorant-phoenix.png'
//   },
//   {
//     name: 'Agent Cypher',
//     role: 'Cybersecurity Expert',
//     image: '/images/valorant-cypher.png'
//   },
//   {
//     name: 'Agent Sage',
//     role: 'Web3 Developer',
//     image: '/images/valorant-sage.png'
//   }
// ];



// function JudgesSection() {
//   const judges = [
//     {
//       name: "Mr. Devesh Birla",
//       designation: "Senior Consultant - Microsoft",
//       linkedin: "https://www.linkedin.com/in/devesh-birla-80106344/",
//       image: `${devesh}`
//     },
//     {
//       name: "Mr. Satyam Gupta",
//       designation: "Data Engineer - Microsoft",
//       linkedin: "https://www.linkedin.com/in/satyam-gupta-ab869663/",
//       image: `${satyam}`
//     },
//     {
//       name: "Mr. Aman Pandey",
//       designation: "Data Engineer - Microsoft",
//       linkedin: "https://www.linkedin.com/in/amanpandey112/",
//       image: `${aman}`
//     },
//     {
//       name: "Mr. Ajeet Choudhary",
//       designation: "Senior Technical Consultant - Microsoft",
//       linkedin: "https://www.linkedin.com/in/ajeetchoudhary/",
//       image: `${ajeet}`
//     },
//     {
//       name: "Mr. Punit Jain",
//       designation: "Co-Founder - Reskill",
//       linkedin: "https://www.linkedin.com/in/puntijainfarhom/",
//       image: `${puneet}`
//     },
//     {
//       name: "Mr. Akhilesh Trivedi",
//       designation: "Vice President - TechForce Services",
//       linkedin: "https://www.linkedin.com/in/akhilesh-trivedi-globalmentor-startupsentrepnruship/",
//       image: `${akhil}`
//     },
//     {
//       name: "Mr. Ashutosh Vyas",
//       designation: "CTO - SoftServ",
//       linkedin: "https://www.linkedin.com/in/ashutoshyas/",
//       image: `${ashutosh}`
//     },
//     {
//       name: "Mr. Rahul Vyas",
//       designation: "Founder - Startup Saarthi",
//       linkedin: "https://www.linkedin.com/in/vyasrahul/",
//       image: `${rahul}`
//     },
//     {
//       name: "Mr. Nitinn Shukla",
//       designation: "Assistant Vice President - Genpact",
//       linkedin: "https://www.linkedin.com/in/nitinn-shukla-a9431411/",
//       image: `${nitin}`
//     },
//     {
//       name: "Mr. Uma Shankar Arora",
//       designation: "Managing Director & Co-Founder - SevenX Consulting Pvt. Ltd.",
//       linkedin: "https://www.linkedin.com/in/usarora/",
//       image: `${umashankar}`
//     },
//     {
//       name: "Mr. Tapendra Singh Ranawat",
//       designation: "Associate Project lead - MetaCube Software Pvt. Ltd.",
//       linkedin: "https://www.linkedin.com/in/tapendraranawat/",
//       image: `${tapendra}`
//     },
//     {
//       name: "Mr. Ayush Badhera",
//       designation: "Assistant Vice President - Celebal Technologies",
//       linkedin: "https://www.linkedin.com/in/ayushbadhera/",
//       image: `${ayush}`
//     },
//     {
//       name: "Mr. Jagmohan Singh Rathore",
//       designation: "Managing Director - ORIGIN",
//       linkedin: "https://www.linkedin.com/in/jagmohansinghrathore/",
//       image: `${jaghmohan}`
//     },
//     {
//       name: "Mr. Ajay Sharma",
//       designation: "Data & AI Architect - ORIGIN",
//       linkedin: "https://www.linkedin.com/in/me-ajay-sharma/",
//       image: `${ajay}`
//     },
//     {
//       name: "Mr. Bhuvaneshwar Solanki",
//       designation: "Solutions Architect - ORIGIN",
//       linkedin: "https://www.linkedin.com/in/bhuvaneshwar-solanki-4259542a/",
//       image: `${bhuvnash}`
//     },
//     {
//       name: "Dr. Srawan Nath",
//       designation: "Project Manager - Xebia",
//       linkedin: "https://www.linkedin.com/in/dr-srawan-nath-73016b29/",
//       image: `${sarwan}`
//     },
//     {
//       name: "Dr. Sunil Kumar Jangir",
//       designation: "Senior Manager - Wisflux Tech Labs",
//       linkedin: "https://www.linkedin.com/in/dr-sunil-kumar-jangir/",
//       image: `${sunil}`
//     },
//     {
//       name: "Mr. Ripudaman Magon",
//       designation: "Director and CEO - Natural Group",
//       linkedin: "https://www.linkedin.com/in/ripudaman-magon-37265822/",
//       image: `${ripu}`
//     },
//     {
//       name: "Mr. Rajat Goyal",
//       designation: "Director - Grras Solutions",
//       linkedin: "https://www.linkedin.com/in/rajat-goyal-0a045021/",
//       image: `${rajat}`
//     },
//     {
//       name: "Mr. Alok Sharma",
//       designation: "Co-Founder - MarkTine Technology Solutions",
//       linkedin: "https://www.linkedin.com/in/marketeraloksharma/",
//       image: `${alok}`
//     },
//     {
//       name: "Mr. Manish Namdev",
//       designation: "Co-Founder - MarkTine Technology Solutions",
//       linkedin: "https://www.linkedin.com/in/manish-namdev-244ab93/",
//       image: `${manish}`
//     },
//     {
//       name: "Mr. Rajesh Panchal",
//       designation: "Senior Consultant - Microsoft",
//       linkedin: "https://www.linkedin.com/in/rajesh-panchal-199bb124/",
//       image: `${rajesh}`
//     },
//     {
//       name: "Mr. Bharat Tiwari",
//       designation: "Cloud Architect at Google",
//       linkedin: "https://www.linkedin.com/in/bharat-tiwari-4213a664/",
//       image: `${bharat}`
//     }
//   ];

// Create a duplicated array for seamless infinite scrolling
// const duplicatedJudges = [...judges, ...judges, ...judges];

// return (
//   <section id="judges" className="py-20 px-4 valorant-section">
//     <div className="w-full mx-auto overflow-x-hidden">
//       <h2 className="section-title text-4xl md:text-5xl font-bold mb-8 text-center">
//         Mentors & Judges
//       </h2>

//       <div className="relative">
//         {/* Slider Container */}
//         <div className="relative w-full py-8 overflow-hidden">
//           {/* Infinite Loop Slider */}
//           <div className="animate-infinite-scroll hover:pause">
//             {duplicatedJudges.map((judge, index) => (
//               <div
//                 key={`${judge.name}-${index}`}
//                 className="flex-shrink-0 px-3"
//               >
//                 <JudgeCard judge={judge} />
//               </div>
//             ))}
//           </div>
//         </div>

//           {/* Gradient Overlays */}
//           <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0f1923]/80 to-transparent z-10 pointer-events-none"></div>
//           <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0f1923]/80 to-transparent z-10 pointer-events-none"></div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function JudgeCard({ judge }: { judge: { name: string; designation: string; linkedin: string; image: string } }) {
//   return (
//     <div className="theme-card max-h-[450px] valorant-card-hover flex flex-col h-full w-[280px] sm:w-[320px] overflow-hidden transition-transform duration-500 hover:scale-105">
//       {/* Image Container */}
//       <div className="relative w-full aspect-square overflow-hidden group">
//         <img
//           src={judge.image || 'https://via.placeholder.com/400x400?text=No+Image'}
//           alt={judge.name}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//           onError={(e) => {
//             const target = e.target as HTMLImageElement;
//             target.onerror = null;
//             target.src = 'https://via.placeholder.com/400x400?text=No+Image';
//           }}
//         />
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923]/90 via-[#0f1923]/30 to-transparent"></div>
//       </div>

//       {/* Text Content */}
//       <div className="p-4 flex flex-col flex-1">
//         <h3 className="text-lg font-bold valorant-text-gradient mb-2 text-center line-clamp-2">
//           {judge.name}
//         </h3>
//         <p className="text-sm text-[#ff4655] mb-4 text-center font-semibold line-clamp-2">
//           {judge.designation}
//         </p>

//         {/* LinkedIn Button */}
//         <div className="mt-auto flex justify-center">
//           <a
//             href={judge.linkedin}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center justify-center p-2 bg-[#0077b5] hover:bg-[#005f91] text-white rounded-full transition-transform duration-300 transform hover:scale-110 shadow-lg"
//             aria-label={`Connect with ${judge.name} on LinkedIn`}
//           >
//             <FaLinkedin className="h-5 w-5" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="absolute right-0 top-0 h-full w-64 bg-[#0f1923] valorant-clip transform transition-transform duration-300">
        <div className="p-4">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-300 hover:text-[#ffffff]">
            <X className="w-6 h-6" />
          </button>
          <div className="mt-12 space-y-4">
            <a href="#about" className="block text-gray-300 hover:text-[#ffffff] transition-colors" onClick={onClose}>About</a>
            <a href="#timeline" className="block text-gray-300 hover:text-[#ffffff] transition-colors" onClick={onClose}>Timeline</a>
            <a href="#tracks" className="block text-gray-300 hover:text-[#ffffff] transition-colors" onClick={onClose}>Theme</a>
            {/* <a href="#problem-statement" className="block text-gray-300 hover:text-[#ffffff] transition-colors" onClick={onClose}>Problem Statement</a> */}
            <a href="#faqs" className="block text-gray-300 hover:text-[#ffffff] transition-colors" onClick={onClose}>FAQs</a>
            <a href="#belongings" className="block text-gray-300 hover:text-[#ffffff] transition-colors" onClick={onClose}>Belongings</a>
            <a href="#contact" className="block text-gray-300 hover:text-[#ffffff] transition-colors" onClick={onClose}>Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQsSection() {
  const [visibleCategory, setVisibleCategory] = useState<keyof typeof faqsData>("general");
  const [showAll, setShowAll] = useState(false);

  const allFaqs = Object.values(faqsData).flat();
  const displayedFaqs = showAll ? allFaqs : faqsData[visibleCategory];

  return (
    <section id="faqs" className="py-20 px-4 valorant-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">FAQS</h2>

        {/* Category Selector */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {Object.keys(faqsData).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 border border-[#ffffff] text-sm rounded-none transition-all duration-300 hover:bg-[#ffffff] hover:text-black ${visibleCategory === category && !showAll ? 'bg-[#ffffff]' : 'bg-transparent'
                }`}
              onClick={() => {
                setVisibleCategory(category as keyof typeof faqsData);
                setShowAll(false);
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
          <button
            className={`px-4 py-2 border border-[#ffffff] text-sm rounded-none transition-all duration-300 hover:bg-[#ffffff] hover:text-black ${showAll ? 'bg-[#ffffff]' : 'bg-transparent'
              }`}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Categories' : 'Show All'}
          </button>
        </div>

        {/* FAQs List */}
        <div className="space-y-6">
          {displayedFaqs.map((faq, index) => (
            <div key={index} className="theme-card valorant-card-hover group">
              <h3 className="text-xl font-bold mb-2 valorant-text-gradient">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function TimelineSection() {
  const [activeDay, setActiveDay] = useState(1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeData = activeDay === 1 ? day1Data : day2Data;

  return (
    <section id="timeline" className="py-20 px-4 valorant-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Event Timeline</h2>

        {/* Day Selector Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveDay(1)}
            className={`valorant-button ${activeDay === 1 ? 'bg-[#ff4655]' : 'bg-transparent'}`}
          >
            <span>Day 1 (Mar 14)</span>
          </button>
          <button
            onClick={() => setActiveDay(2)}
            className={`valorant-button ${activeDay === 2 ? 'bg-[#ff4655]' : 'bg-transparent'}`}
          >
            <span>Day 2 (Mar 15)</span>
          </button>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-[#ff4655] transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {activeData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`relative pl-12 md:pl-0 md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                    } transition-all duration-500 ${activeIndex === index ? 'scale-105' : 'scale-100'}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-[#ff4655] rounded-full transform -translate-x-1/2 z-10"></div>

                  {/* Timeline Card */}
                  <div
                    className={`theme-card valorant-card-hover group w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                      }`}
                  >
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Icon className="w-6 h-6 text-[#ff4655] valorant-pulse" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-sm text-gray-400">{item.time}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-1 valorant-text-gradient">{item.event}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function BelongingsSection() {
  return (
    <section id="belongings" className="py-10 px-4 valorant-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center text-lg sm:text-2xl">Essentials</h2>

        <div className="theme-card valorant-card-hover p-4 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 valorant-text-gradient">Required Mission Gear</h3>

          {/* Student ID Card - Highlighted Item */}
          <div className="group relative p-4 sm:p-6 mb-4 sm:mb-6 bg-[#1a242d] border border-[#ffffff]/30 hover:border-[#ffffff] transition-all rounded-lg valorant-pulse">
            <div className="flex items-start flex-wrap">
              <div className="bg-[#ffffff] p-2 rounded-full mr-4">
                <UserCheck className="w-5 h-5 text-white" />
              </div>
              <div className="text-sm sm:text-base w-full">
                <h4 className="text-base sm:text-lg font-bold text-white mb-1 flex items-center">
                  Student College ID Card
                  <span className="ml-2 px-2 py-1 text-xs bg-[#ffffff] text-black rounded-full">MANDATORY</span>
                </h4>
                <p className="text-gray-300">
                  Original physical ID card issued by your educational institution with:
                </p>
                <ul className="mt-2 space-y-1 text-gray-400 pl-5 list-disc">
                  <li>Clear photo identification</li>
                  <li>Valid academic year (2025-26)</li>
                  <li>Institution seal/stamp</li>
                  <li>No photocopies/digital versions accepted</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-[#0f1923] border border-[#ff4655]/20 rounded-sm">
              <p className="text-xs sm:text-sm text-gray-300 flex items-start">
                <Shield className="w-4 h-4 text-[#ff4655] mt-1 mr-2 flex-shrink-0" />
                <span>Without this ID, you <span className="text-[#ff4655] font-medium">will not</span> be granted access to the venue or allowed to participate.</span>
              </p>
            </div>
          </div>

          {/* Other Requirements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* <div className="p-4 bg-[#1a242d] hover:bg-[#22303d] transition-all rounded-lg border border-[#2a3a4d]">
              <div className="flex items-start">
                <div className="bg-[#ff4655] p-1 rounded-full mr-3 mt-1">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-lg font-medium text-white">Food Coupons</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Provided at registration - required for all meals</p>
                </div>
              </div>
            </div> */}

            <div className="p-4 bg-[#1a242d] hover:bg-[#22303d] transition-all rounded-lg border border-[#2a3a4d]">
              <div className="flex items-start">
                <div className="bg-[#ff4655] p-1 rounded-full mr-3 mt-1">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-lg font-medium text-white">Event ID Badge</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Must be visibly worn at all times</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#1a242d] hover:bg-[#22303d] transition-all rounded-lg border border-[#2a3a4d]">
              <div className="flex items-start">
                <div className="bg-[#ff4655] p-1 rounded-full mr-3 mt-1">
                  <X className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-lg font-medium text-white">Prohibited Items</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">No sharp objects, weapons, or hazardous materials</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#1a242d] hover:bg-[#22303d] transition-all rounded-lg border border-[#2a3a4d]">
              <div className="flex items-start">
                <div className="bg-[#ff4655] p-1 rounded-full mr-3 mt-1">
                  <Laptop className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-lg font-medium text-white">Laptop , Charger & Extension Board</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Essential for hacking (no lab computers provided)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 p-4 bg-[#1a242d] border-l-4 border-[#ff4655]">
            <p className="text-xs sm:text-sm text-gray-300 flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff4655] mr-3 mt-0.5 flex-shrink-0" />
              <span>
                <span className="font-bold">Security Protocol:</span> All items subject to security screening.
                Counterfeit IDs will result in immediate disqualification and removal from premises.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Background is fully handled by background.css
    // No JavaScript background manipulation needed

    // Simulate loading all resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Reduced loading time

    // You can also use this for actual image loading:
    const imageUrls = [
      // Background image is now handled by CSS
      hlogo,
      Arya,
      Cipher,
      Dev,
      Hack,
      Lincom,
      movie,
      photo,
      wem,
      AIC,
      IIC,
      cup
    ];

    const loadImages = imageUrls.map(url => {
      const img = new Image();
      img.src = url;
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve; // Continue even if some images fail
      });
    });

    Promise.all(loadImages).then(() => {
      setIsLoading(false);
    });

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen text-gray-100 main-container">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Space Background Effects */}
      <SpaceBackground
        showStars={true}
        showNebula={true}
        showShootingStars={true}
        showPlanets={true}
        starCount={200}
      />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--tech-dark-bg)] bg-opacity-95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold valorant-glow flex items-center">
              <img src={hlogo} alt="" className='w-16' />
            </div>
            <div className="hidden md:flex space-x-10">
              <a href="#about" className="text-gray-300 hover:text-[var(--tech-electric-blue)] transition-colors">About</a>
              <a href="#timeline" className="text-gray-300 hover:text-[var(--tech-electric-blue)] transition-colors">Timeline</a>
              <a href="#tracks" className="text-gray-300 hover:text-[var(--tech-electric-blue)] transition-colors">Theme</a>
              {/* <a href="#problem-statement" className="text-gray-300 hover:text-[var(--tech-electric-blue)] transition-colors">Problem Statement</a> */}
              <a href="#faqs" className="text-gray-300 hover:text-[var(--tech-electric-blue)] transition-colors">FAQs</a>
              <a href="#belongings" className="text-gray-300 hover:text-[var(--tech-electric-blue)] transition-colors">Belongings</a>
              <a href="#contact" className="text-gray-300 hover:text-[var(--tech-electric-blue)] transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="valorant-button text-sm group"
                onClick={() => window.location.href = 'https://bit.ly/4aME7PO'}
              >
                <Zap className="w-4 h-4 inline-block mr-2 group-hover:valorant-glitch" />
                <span className="group-hover:valorant-glitch">Register Now</span>
              </button>
              <button
                className="md:hidden text-gray-300 hover:text-[var(--tech-electric-blue)] transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden pb-20"
        style={{
          backgroundImage: `url(${spaceBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[600px]">
          <ScaleReveal delay={0.2} className="mb-2 w-[90%] sm:w-[40%] lg:w-[100%]">
            <img src={hlogo} alt="Hack Arya Verse 2.0 Logo" className="mx-auto drop-shadow-2xl" style={{ filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.5))' }} />
          </ScaleReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg sm:text-xl lg:text-2xl mb-4 space-title leading-relaxed font-bold tracking-wider">
              PLANT IDEAS • DEFUSE LIMITS
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5} className="mb-4">
            <CountdownTimer />
          </ScrollReveal>
          <ScrollReveal delay={0.8}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="space-button group"
                onClick={() => window.location.href = 'https://bit.ly/4aME7PO'}
              >
                <span className="relative z-10">🚀 Register Now</span>
              </button>
              <button
                className="valorant-button bg-transparent group"
                onClick={() => window.location.href = 'https://linktr.ee/HackAryaVerse_2.0'}
              >
                <span className="group-hover:valorant-glitch">Know More</span>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bounty Gravity Well (Prize Section) */}
      <section id="prizes" className="py-20 px-4 relative overflow-hidden zero-gravity-wrapper">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <ScrollReveal delay={0.2}>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bounty-glow-text uppercase tracking-widest">
              ₹5,00,000 <br className="md:hidden" />
              <span className="text-3xl md:text-5xl text-[var(--tech-neon-cyan)] block mt-2">Prize Pool</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="flex justify-center mt-12 w-full">
            <Parallax speed={-0.05} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch justify-center w-full">

                {/* Left Card: Credits */}
                <TiltCard className="terminal-card flex flex-col p-6 md:p-8 bg-[rgba(15,20,30,0.8)] border-[1px] border-[#00d4ff]/40 hover:border-[#00d4ff] transition-all group h-full relative overflow-hidden" intensity={8}>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent opacity-50"></div>
                  <div className="absolute top-4 left-4 text-[#00d4ff]/50">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div className="flex-grow flex flex-col justify-center items-center text-center mt-6">
                    <h3 className="text-base md:text-lg lg:text-xl text-gray-300 font-medium mb-3 tracking-wider uppercase text-center space-title-font">Platforms & APIs</h3>
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 valorant-text-gradient drop-shadow-[0_0_10px_rgba(0,212,255,0.4)] whitespace-nowrap">
                      Up to ₹3,00,000
                    </div>
                    <p className="text-[#00d4ff] font-bold tracking-widest uppercase text-xs md:text-sm mt-2">In Credits</p>
                  </div>
                </TiltCard>

                {/* Center Card: Liquid Cash */}
                <TiltCard className="golden-glass-card p-6 md:p-8 lg:p-10 transform md:-translate-y-4 md:scale-105 z-10 h-full flex flex-col justify-center relative shadow-[0_0_30px_rgba(255,215,0,0.15)] group hover:shadow-[0_0_50px_rgba(255,215,0,0.3)] transition-shadow duration-300" intensity={15}>
                  <div className="absolute top-4 right-4 text-[#FFD700]/50 group-hover:text-[#FFD700] transition-colors">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <div className="flex-grow flex flex-col justify-center items-center text-center mt-6">
                    <h3 className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium mb-2 space-title-font uppercase tracking-wider">Top Performers</h3>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 golden-cash-text drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] whitespace-nowrap">
                      ₹1,00,000
                    </div>
                    <p className="text-[#FFD700] font-bold tracking-widest uppercase text-sm md:text-base mb-4">Liquid Cash</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-[rgba(255,215,0,0.3)] text-center w-full">
                    <p className="text-xs text-gray-300">The grand mission bounty.</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-80"></div>
                </TiltCard>

                {/* Right Card: Swags */}
                <TiltCard className="terminal-card flex flex-col p-6 md:p-8 bg-[rgba(15,20,30,0.8)] border-[1px] border-[#00d4ff]/40 hover:border-[#00d4ff] transition-all group h-full relative overflow-hidden" intensity={8}>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent opacity-50"></div>
                  <div className="absolute top-4 right-4 text-[#00d4ff]/50 group-hover:text-[#00d4ff] transition-colors">
                    <Gift className="w-6 h-6" />
                  </div>
                  <div className="flex-grow flex flex-col justify-center items-center text-center mt-6">
                    <h3 className="text-base md:text-lg lg:text-xl text-gray-300 font-medium mb-3 tracking-wider uppercase text-center space-title-font">Exclusive Merch</h3>
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 valorant-text-gradient drop-shadow-[0_0_10px_rgba(0,212,255,0.4)] whitespace-nowrap">
                      Up to ₹50,000
                    </div>
                    <p className="text-[#00d4ff] font-bold tracking-widest uppercase text-xs md:text-sm mt-2">Swags, Goodies & Bounties</p>
                  </div>
                </TiltCard>

              </div>
            </Parallax>
          </ScrollReveal>
        </div>

        {/* Floating Particles/Elements to simulate zero gravity */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <FloatingElement amplitude={15} duration={8} className="absolute top-20 left-[10%] opacity-20 hidden md:block">
            <div className="w-32 h-32 rounded-full border border-[var(--tech-electric-blue)] mix-blend-screen shadow-[0_0_30px_rgba(0,212,255,0.3)]"></div>
          </FloatingElement>
          <FloatingElement amplitude={20} duration={12} className="absolute bottom-20 right-[15%] opacity-10">
            <div className="w-48 h-48 rounded-full bg-[var(--tech-bright-purple)] mix-blend-screen blur-[80px]"></div>
          </FloatingElement>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 valorant-section">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="section-title space-title">🌟 MISSION BRIEFING</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal direction="left" delay={0.1}>
              <TiltCard className="theme-card space-card group h-full">
                <h3 className="text-2xl font-bold mb-4 space-title">🚀 The Mission</h3>
                <p className="text-gray-300">
                  Hack Arya Verse 2.0 is not just a hackathon; it's a cosmic journey where talented students come together to solve universal challenges using technology and creativity.
                </p>
              </TiltCard>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <TiltCard className="theme-card space-card group h-full">
                <h3 className="text-2xl font-bold mb-4 space-title">🌌 The Objective</h3>
                <p className="text-gray-300">
                  Join hands with mentors, experts, and fellow astronauts to create solutions that can propel humanity forward and build the future.
                </p>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      {/* <ProblemStatementSection /> */}

      {/* Timeline Section */}
      <TimelineSection />

      {/* Ecosystem Section */}
      <section id="sponsors" className="py-20 px-4 valorant-section relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="section-title space-title text-center mb-16">🛰️ MISSION PARTNERS</h2>
          </ScrollReveal>

          <div className="space-y-24">
            {/* SUPPORTED BY */}
            <div className="w-full">
              <ScrollReveal delay={0.1}>
                <div className="flex flex-col items-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-widest uppercase text-center space-title-font text-[#007FFF] drop-shadow-[0_0_15px_rgba(0,127,255,0.6)]">Supported By</h3>
                  <div className="w-16 h-1 mt-3 bg-[#007FFF] shadow-[0_0_10px_rgba(0,127,255,0.5)]"></div>
                </div>
              </ScrollReveal>

              <div className="flex justify-center flex-wrap gap-8">
                {[
                  { img: microsoft, name: 'MICROSOFT AZURE' },
                  { img: azure, name: 'AZURE DEV COMMUNITY' },
                ].map((sponsor, idx) => (
                  <ScrollReveal key={idx} delay={0.1 * (idx % 4)}>
                    <TiltCard className="terminal-card flex flex-col items-center justify-center p-6 bg-[rgba(15,20,30,0.8)] h-64 w-64 border-[1px] border-[#007FFF]/40 hover:border-[#007FFF] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#007FFF] to-transparent opacity-50"></div>
                      <div className="w-40 h-32 flex flex-col items-center justify-center p-2 transition-transform duration-300 group-hover:scale-110 mt-2 mb-6">
                        <img src={sponsor.img || `https://ui-avatars.com/api/?name=${encodeURIComponent(sponsor.name)}&background=fff&color=000`} alt={sponsor.name} className="max-w-full max-h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,127,255,0.3)]" />
                      </div>
                      <p className="text-gray-300 font-bold tracking-wider text-center text-sm">
                        {sponsor.name}
                      </p>
                    </TiltCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* MINOR PARTNERS 2x2 GRID */}
            <div className="w-full max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {[
                  {
                    title: "Edu Partner", img: mongoDb, name: 'MONGODB',
                    titleClass: "text-[#007FFF] drop-shadow-[0_0_15px_rgba(0,127,255,0.6)]",
                    lineClass: "bg-[#007FFF] shadow-[0_0_10px_rgba(0,127,255,0.5)]",
                    cardBorder: "border-[#007FFF]/40 hover:border-[#007FFF]",
                    cardBg: "via-[#007FFF]",
                    imgFilter: "drop-shadow-[0_0_8px_rgba(0,127,255,0.3)]",
                    intensity: 5
                  },
                  {
                    title: "API Partner", img: postman, name: 'POSTMAN',
                    titleClass: "text-[#007FFF] drop-shadow-[0_0_15px_rgba(0,127,255,0.6)]",
                    lineClass: "bg-[#007FFF] shadow-[0_0_10px_rgba(0,127,255,0.5)]",
                    cardBorder: "border-[#007FFF]/40 hover:border-[#007FFF]",
                    cardBg: "via-[#007FFF]",
                    imgFilter: "drop-shadow-[0_0_8px_rgba(0,127,255,0.3)]",
                    intensity: 5
                  },
                  {
                    title: "Domain Partner", img: xyzLogo, name: '.XYZ',
                    titleClass: "text-[#007FFF] drop-shadow-[0_0_15px_rgba(0,127,255,0.6)]",
                    lineClass: "bg-[#007FFF] shadow-[0_0_10px_rgba(0,127,255,0.5)]",
                    cardBorder: "border-[#007FFF]/40 hover:border-[#007FFF]",
                    cardBg: "via-[#007FFF]",
                    imgFilter: "drop-shadow-[0_0_8px_rgba(0,127,255,0.3)]",
                    intensity: 5
                  },
                  {
                    title: "Powered By", img: unstopLogo, name: 'UNSTOP',
                    titleClass: "text-[#007FFF] drop-shadow-[0_0_15px_rgba(0,127,255,0.6)]",
                    lineClass: "bg-[#007FFF] shadow-[0_0_10px_rgba(0,127,255,0.5)]",
                    cardBorder: "border-[#007FFF]/40 hover:border-[#007FFF]",
                    cardBg: "via-[#007FFF]",
                    imgFilter: "drop-shadow-[0_0_8px_rgba(0,127,255,0.3)]",
                    intensity: 5
                  },
                ].map((partner, idx) => (
                  <ScrollReveal key={idx} delay={0.1 * idx}>
                    <div className="flex flex-col items-center">
                      <div className="flex flex-col items-center mb-6">
                        <h3 className={`text-xl md:text-2xl font-bold tracking-widest uppercase text-center space-title-font ${partner.titleClass}`}>
                          {partner.title}
                        </h3>
                        <div className={`w-16 h-1 mt-3 ${partner.lineClass}`}></div>
                      </div>
                      <TiltCard className={`terminal-card flex flex-col items-center justify-center p-6 bg-[rgba(15,20,30,0.8)] h-64 w-64 border-[1px] ${partner.cardBorder} transition-colors relative overflow-hidden group`} intensity={partner.intensity}>
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${partner.cardBg} to-transparent opacity-50`}></div>
                        <div className="w-40 h-32 flex flex-col items-center justify-center p-2 transition-transform duration-300 group-hover:scale-110 mt-2 mb-6">
                          <img src={partner.img} alt={partner.name} className={`max-w-full max-h-full object-contain filter ${partner.imgFilter}`} />
                        </div>
                        <p className="text-white font-bold tracking-wider text-center text-sm">
                          {partner.name}
                        </p>
                      </TiltCard>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* TECHNICAL PARTNERS */}
            <div className="w-full">
              <ScrollReveal delay={0.1}>
                <div className="flex flex-col items-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-widest uppercase text-center space-title-font text-[#007FFF] drop-shadow-[0_0_15px_rgba(0,127,255,0.6)]">Technical Partners</h3>
                  <div className="w-16 h-1 mt-3 bg-[#007FFF] shadow-[0_0_10px_rgba(0,127,255,0.5)]"></div>
                </div>
              </ScrollReveal>

              <div className="flex justify-center flex-wrap gap-8">
                {[
                  // Dark Background Logos
                  { img: aiQuant, name: 'AIQUANT' },
                  { img: celabal, name: 'CELEBAL TECHNOLOGIES' },
                  { img: cloudy, name: 'CLOUDY CODERS' },
                  { img: habileLabs, name: 'HABILELABS' },
                  { img: moneyGrow, name: 'MONEYGROW' },
                  { img: appyzie, name: 'APPYZIE' },
                  { img: brandmetrics, name: 'BRANDMETRICS' },
                  { img: sumindex, name: 'SUMINDEX' },
                  // Light/White Background Logos
                  { img: origin, name: 'ORIGIN' },
                  { img: youngXcode, name: 'YOUNGXCODE' },
                  { img: nature, name: 'NATURAL' },
                  { img: wisflux, name: 'WISFLUX' },
                  { img: dotSquares, name: 'DOTSQUARES' },
                  { img: softserv, name: 'SOFTSERV' },
                  { img: meta, name: 'METACUBE' },
                  { img: grass, name: 'GRRAS' },
                  { img: mandelbulb, name: 'MANDELBULB' },
                  { img: alphonic, name: 'ALPHONIC' },
                  { img: wavvyy, name: 'WAVVYY' },
                  { img: zordial, name: 'ZORDIAL' },
                  { img: kabadcart, name: 'KABADCART' },
                  { img: youthTalks, name: 'YOUTH TALKS' },
                ].map((sponsor, idx) => (
                  <ScrollReveal key={idx} delay={0.1 * (idx % 4)}>
                    <TiltCard className="terminal-card flex flex-col items-center justify-center p-6 bg-[rgba(15,20,30,0.8)] h-64 w-64 border-[1px] border-[#007FFF]/40 hover:border-[#007FFF] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#007FFF] to-transparent opacity-50"></div>
                      <div className="w-40 h-32 flex flex-col items-center justify-center p-2 transition-transform duration-300 group-hover:scale-110 mt-2 mb-6">
                        <img src={sponsor.img || `https://ui-avatars.com/api/?name=${encodeURIComponent(sponsor.name)}&background=fff&color=000`} alt={sponsor.name} className="max-w-full max-h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,127,255,0.3)]" />
                      </div>
                      <p className="text-gray-300 font-bold tracking-wider text-center text-sm">
                        {sponsor.name}
                      </p>
                    </TiltCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-xl font-bold valorant-text-gradient mb-6">Want to join our network?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://drive.google.com/file/d/1vqMPTBtVy4t6N0D2HPyYxFNHb4mkqh1f/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="valorant-button group flex items-center justify-center"
              >
                <ExternalLink className="inline-block w-4 h-4 mr-2" />
                <span>Transmit Signal (Sponsorship Deck)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQsSection />

      {/* Themes Section */}
      <section id="tracks" className="py-20 px-4 valorant-section">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="section-title space-title">🛠️ TRACKS TO BUILD</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {themes.map((theme, index) => {
              const IconComponent = theme.icon;
              return (
                <ScrollReveal key={index} delay={0.1 * index} direction="up">
                  <TiltCard
                    className={`theme-card space-card group h-full ${selectedTrack === index ? 'ring-2 ring-[var(--cosmic-cyan)]' : ''
                      }`}
                    intensity={8}
                  >
                    <div onClick={() => setSelectedTrack(index)} className="cursor-pointer h-full">
                      <div className="flex items-center mb-4">
                        <FloatingElement amplitude={5} duration={3 + index * 0.5}>
                          <IconComponent className={`w-12 h-12 text-[#ff4655] ${selectedTrack === index ? 'valorant-ultimate' : ''
                            }`} />
                        </FloatingElement>
                        <span className="ml-2 text-sm agent-role-label">{theme.role}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 valorant-text-gradient">{theme.title}</h3>
                      <p className="text-gray-400">{theme.description}</p>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Belongings Section */}
      <BelongingsSection />

      {/* {/* Night Market Section
      {/* Night Market Section */}



      {/* Past Glimpses Section */}
      <section id="past-glimpses" className="py-20 px-4 valorant-section">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="section-title space-title">🌍 MISSION MEMORIES</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="theme-card space-card p-8">
              <div className="relative overflow-hidden">
                <div className="flex gap-6 animate-scroll-right-to-left" style={{ width: 'fit-content' }}>
                  {/* First set of images */}
                  {[G1, G2, G3, G4, G5, G6, G7].map((image, index) => (
                    <div
                      key={`img-${index}`}
                      className="relative flex-shrink-0 w-[400px] h-[300px] overflow-hidden rounded-lg border border-[#ffffff]/20 hover:border-[#ff4655] transition-all duration-300 group cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`Past Glimpse ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {[G1, G2, G3, G4, G5, G6, G7].map((image, index) => (
                    <div
                      key={`img-duplicate-${index}`}
                      className="relative flex-shrink-0 w-[400px] h-[300px] overflow-hidden rounded-lg border border-[#ffffff]/20 hover:border-[#ff4655] transition-all duration-300 group cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`Past Glimpse ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 valorant-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Contact</h2>
          <div className="theme-card valorant-card-hover p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="flex-shrink-0 w-6 h-6 text-[#ff4655] mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Location</h4>
                  <p className=" font-mono font-semibold text-gray-400">Arya College of Engineering & IT, Jaipur</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="flex-shrink-0 w-6 h-6 text-[#ff4655] mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Mail</h4>
                  <p className="font-mono font-semibold text-gray-400 break-all text-xs sm:text-sm">
                    aryastudentclubs@aryacollege.in
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="flex-shrink-0 w-6 h-6 text-[#ff4655] mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Team Contacts</h4>
                  <p className="text-gray-400 font-semibold font-mono">+91 9653926918 Lalit Punjabi</p>
                  <p className="text-gray-400 font-semibold font-mono">+91 9256954320 Amit Kumar</p>
                </div>
              </div>

              <div className="flex items-start">
                <MessageSquare className="flex-shrink-0 w-6 h-6 text-[#ff4655] mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Social Channels</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://www.instagram.com/hackaryaverse2.0/?igsh=MzJxZjJpc24wZWNz#" className="hover:text-blue-500 transition-colors">
                      <Instagram className="w-6 h-6 text-blue-500 valorant-glow-blue" />
                    </a>
                    <a href="https://x.com/hackaryaverse?s=11" className="hover:text-blue-500 transition-colors">
                      <Twitter className="w-6 h-6 text-blue-500 valorant-glow-blue" />
                    </a>
                    <a href="https://www.linkedin.com/company/hack-arya-verse" className="hover:text-blue-500 transition-colors">
                      <Linkedin className="w-6 h-6 text-blue-500 valorant-glow-blue" />
                    </a>
                    <a href="https://t.me/hackaryaverse" className="hover:text-blue-500 transition-colors">
                      <RiTelegramLine className="w-6 h-6 text-blue-500 valorant-glow-blue" />
                    </a>
                    <a href="https://discord.gg/J6e8ZRpb" className='hover:text-blue-500 transition-colors'>
                      <AiOutlineDiscord className="w-6 h-6 text-blue-500 valorant-glow-blue" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1923] text-gray-400 w-full py-12 px-5 relative">
        <div className="md:w-[80%] w-full mx-auto px-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 valorant-text-gradient">HAV 2.0 Protocol</h3>
              <p>Where innovation meets technical brilliance.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 valorant-text-gradient">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-[#ff4655] transition-colors">About</a></li>
                <li><a href="#tracks" className="hover:text-[#ff4655] transition-colors">Theme</a></li>
                <li><a href="#faqs" className="hover:text-[#ff4655] transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 valorant-text-gradient">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/hackaryaverse2.0/?igsh=MzJxZjJpc24wZWNz#" className="hover:text-blue-500 transition-colors">
                  <Instagram className="w-6 h-6 text-blue-500 valorant-glow-blue" />
                </a>
                <a href="https://x.com/hackaryaverse?s=11" className="hover:text-blue-500 transition-colors">
                  <Twitter className="w-6 h-6 text-blue-500 valorant-glow-blue" />
                </a>
                <a href="https://www.linkedin.com/company/hack-arya-verse" className="hover:text-blue-500 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-500 valorant-glow-blue" />
                </a>
                <a href="https://t.me/hackaryaverse" className="hover:text-blue-500 transition-colors">
                  <RiTelegramLine className="w-6 h-6 text-blue-500 valorant-glow-blue" />
                </a>
                <a href="https://discord.gg/J6e8ZRpb" className='hover:text-blue-500 transition-colors'>
                  <AiOutlineDiscord className="w-6 h-6 text-blue-500 valorant-glow-blue" />
                </a>
              </div>
            </div>

            {/* Map Section */}
            <div className="col-span-full mt-8 flex justify-center">
              <div className="relative w-full h-0 pb-[56.25%] md:w-[75%] md:pb-[40%] lg:w-[50%] lg:pb-[30%]">
                <iframe
                  title="College Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.0091768445336!2d75.89098077479052!3d27.029875955046872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396daf9e6f4d2f3b%3A0x5b28af6fe5c60627!2sArya%20College%20of%20Engineering%20%26%20IT!5e0!3m2!1sen!2sin!4v1743687727628!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2025 Hack Arya Verse 2.0.All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// function ProblemStatementSection() {
//   return (
//     <section id="problem-statement" className="py-20 px-4 valorant-section">
//       <div className="max-w-6xl mx-auto">
//       <h2 className="section-title">Problem Statement</h2>
//         <h3 className="text-2xl font-bold mb-6 valorant-text-gradient">Build for Bharat – AI Solutions that Serve Every Citizen</h3>

//         <div className="theme-card valorant-card-hover p-8 mb-8">
//           <h4 className="text-xl font-bold mb-4 text-[#ff4655]">Challenge Overview</h4>
//           <p className="text-gray-300 mb-6">
//             Address key societal challenges in India using the power of next-generation AI models. 
//             Build solutions that are inclusive, impactful, and accessible — especially for underserved 
//             communities, small businesses, rural populations, and non-English speakers.
//           </p>
//           <p className="text-gray-300">
//             The goal is to use AI not just for innovation, but for real-world impact that bridges 
//             India's digital, economic, and linguistic divides.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Theme 1 */}
//           <div className="theme-card valorant-card-hover p-6">
//             <div className="flex items-center mb-4">
//               <Sword className="w-6 h-6 text-[#ff4655] mr-3" />
//               <h4 className="text-lg font-bold">Economic Development</h4>
//             </div>
//             <ul className="space-y-2 text-gray-300">
//               <li className="flex items-start">
//                 <span className="text-[#ff4655] mr-2">•</span>
//                 <span>Tools for small businesses and artisans</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-[#ff4655] mr-2">•</span>
//                 <span>AI-based job-matching for gig workers</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-[#ff4655] mr-2">•</span>
//                 <span>Productivity solutions for micro-entrepreneurs</span>
//               </li>
//             </ul>
//           </div>

//           {/* Theme 2 */}
//           <div className="theme-card valorant-card-hover p-6">
//             <div className="flex items-center mb-4">
//               <Shield className="w-6 h-6 text-[#ff4655] mr-3" />
//               <h4 className="text-lg font-bold">Science & Sustainability</h4>
//             </div>
//             <ul className="space-y-2 text-gray-300">
//               <li className="flex items-start">
//                 <span className="text-[#ff4655] mr-2">•</span>
//                 <span>Climate resilience systems</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-[#ff4655] mr-2">•</span>
//                 <span>AI-driven health checkers in local languages</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-[#ff4655] mr-2">•</span>
//                 <span>Voice-based crop advisory for farmers</span>
//               </li>
//             </ul>
//           </div>

//           {/* Theme 3 */}
//           <div className="theme-card valorant-card-hover p-6">
//             <div className="flex items-center mb-4">
//               <Blocks className="w-6 h-6 text-[#ff4655] mr-3" />
//               <h4 className="text-lg font-bold">Public Services</h4>
//             </div>
//             <ul className="space-y-2 text-gray-300">
//               <li className="flex items-start">
//                 <span className="text-[#ff4655] mr-2">•</span>
//                 <span>Making government services more accessible</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-[#ff4655] mr-2">•</span>
//                 <span>AI tools for local panchayats</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-[#ff4655] mr-2">•</span>
//                 <span>Multilingual tools for migrants</span>
//               </li>
//             </ul>
//           </div>

//           {/* Theme 4 */}
//           <div className="theme-card valorant-card-hover p-6">
//             <div className="flex items-center mb-4">
//               <BookOpen className="w-6 h-6 text-[#ff4655] mr-3" />
//               <h4 className="text-lg font-bold">Education & Inclusion</h4>
//             </div>
//             <ul className="space-y-2 text-gray-300">
//               <li className="flex items-start">
//                 <span className="text-[#ff4655] mr-2">•</span>
//                 <span>AI-powered learning in regional languages</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-[#ff4655] mr-2">•</span>
//                 <span>Tools that work natively in Indian languages</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-[#ff4655] mr-2">•</span>
//                 <span>Solutions for low-bandwidth environments</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-12 theme-card valorant-card-hover p-8">
//           <h4 className="text-xl font-bold mb-4 text-[#ff4655]">Contextual Video Generation Challenge</h4>
//           <p className="text-gray-300 mb-6">
//             Design an AI system that generates contextually accurate videos from input text, 
//             capturing tone, emotion, and background setting to produce relevant output.
//           </p>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h5 className="font-bold mb-2">Example Input:</h5>
//               <p className="text-gray-400 italic">"A lonely boy walks through a stormy night looking for his dog."</p>
//             </div>
//             <div>
//               <h5 className="font-bold mb-2">Expected Output:</h5>
//               <p className="text-gray-400">Dark visuals, rain effects, sad background music, emotional expressions</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default App;