import fpImg from "@/assets/images/fp.webp";
import calcImg from "@/assets/images/calc.webp"
import cvsImg from "@/assets/images/cvs.webp"
import invImg from "@/assets/images/inv.webp"
// import rm8Img from "@/assets/images/rm8.webp"
import attImg from "@/assets/images/att.webp"
// import thImg from "@/assets/images/th.webp"
import bscImg from "@/assets/images/bsc.webp"
import sdbImg from "@/assets/images/sdb.webp"
import chemImg from "@/assets/images/chem.webp"
import waImg from "@/assets/images/wa.webp"
import countImg from "@/assets/images/count.webp"
import kbImg from '@/assets/images/kanban.webp'

const projectsData = [
  {
    name: "Portfolio",
    stack: "HTML, CSS",
    url: "https://noufal.engineer/v1",
    git: "https://github.com/iamnoufal/iamnoufal.github.io",
    img: `${fpImg.src}`,
    desc: "My first portfolio design"
  },
  {
    name: "Kanban Board",
    stack: "Flask, Bootstrap",
    git: "https://github.com/iamnoufal/kanban-app-flask",
    img: `${kbImg.src}`,
    desc: "A Kanban Board is a modern to-do list app where you can organize your tasks based as lists. More controls over your finished and unfinished tasks along with a dedicated summary for each user. There is an API too!"
  },
  {
    name: "Certificate Verification System",
    stack: "HTML, Bootstrap, Flask, Firebase, Python",
    git: "https://github.com/iamnoufal/cvs-front-end",
    url: "https://verify.iitmbsc.org",
    img: `${cvsImg.src}`,
    desc: "Certificate Verification System helps the students to verify their e-certificates provided as part of any competition with a QR code. API part is different!"
  },
  {
    name: "Invictus",
    stack: "ReactJS, Bootstrap, Firebase",
    url: "https://invictus.fun",
    git: "https://github.com/iamnoufal/invictus",
    img: `${invImg.src}`,
    desc: "Invictus is a virtual cultural fest organized by the students of IITM BS. With an expectation of around 5000 users a day, it was really a nightmare to build such a website in 2 days, at least not without help"
  },
  {
    name: "Attendance Tracker",
    stack: "HTML, Bootstrap, JS, Firebase",
    git: "https://github.com/iamnoufal/attendance-tracker",
    img: `${attImg.src}`,
    desc: "Let's level up the way maintaining the class attendance. Come on bro, we are living in a technologically advanced world!"
  },
  {
    name: "IITM BSc Students Website",
    stack: "ReactJS, React Bootstrap",
    url: "https://iitmbs.org",
    git: "https://github.com/iamnoufal/iitmbsc.org",
    img: `${bscImg.src}`,
    desc: "Public facing website depicting the life of an IITian (not the regular wala IITian, we are special)"
  },
  {
    name: "Calculator",
    stack: "Flutter",
    git: "https://github.com/iamnoufal/calculator-app",
    img: `${calcImg.src}`,
    desc: "Just a usual Calculator app used to, you know, calculate stuff. The difference is just that the developer is different"
  },
  {
    name :"GCE Salem Student Database",
    stack: "HTML, JS, Firebase",
    url: "https://gcesalem-edu.web.app",
    img: `${sdbImg.src}`,
    desc: "How easy would it be if you can find all the information at a single place. An initiative nearer to Tim Berner Lee's effort"
  },
  {
    name: "Chemistry For CSE",
    stack: "HTML, CSS",
    url: "https://noufal.me/chemistryforcse",
    git: "https://github.com/iamnoufal/chemistryforcse",
    img: `${chemImg.src}`,
    desc: "Classes were online. The videos were recorded, but scattered. This website brings all the recorded class videos in one place, arranged according to the topics"
  },
  {
    name: "WhatsApp Link Generator",
    stack: "HTML, CSS, JS",
    url: "https://noufal.me/wa-link-generator",
    git: "https://github.com/iamnoufal/wa-link-generator",
    img: `${waImg.src}`,
    desc: "Now you can send someone a Hi in WhatsApp without saving their number. Let this site create a link for you with their number"
  },
  {
    name: "Counter",
    stack: "HTML, JS",
    url: "https://noufal.me/counter",
    git: "https://github.com/iamnoufal/counter",
    img: `${countImg.src}`,
    desc: "Nothing great, some 1 2 3 stuff"
  }
]

export default projectsData;