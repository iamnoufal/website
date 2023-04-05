import sslcImg from '@/assets/images/sslc.webp';
import hscImg from '@/assets/images/hsc.webp';
import dsImg from '@/assets/images/ds.webp';
import cseImg from '@/assets/images/cse.webp';

const educationData = [
  {
    name: 'Government College of Technology Coimbatore',
    caption: 'Diving into the world of Engineering where I get to learn about the fundamentals of Hardware and Software.',
    degree: 'B. E. Computer Science and Engineering',
    img: `${cseImg.src}`,
    bgColor: '#fefdee',
    year: "2020-2024"
  },
  {
    name: 'Indian Institute of Technology Madras',
    caption: "Getting to know about Data Science and it's applications in different fields in the world.",
    degree: 'BS Data Science and Application',
    img: `${dsImg.src}`,
    bgColor: '#ebecee',
    year: "2020-2025"
  },
  {
    name: 'Karur Vetri Vinayaka Matric. Hr. Sec. School, Karur',
    caption: 'Indulged to know about the flora and fauna around us.',
    degree: 'HSC',
    img: `${hscImg.src}`,
    bgColor: '#fff',
    year: "2018-2020"
  },
  {
    name: 'Cheran Matric. Hr. Sec. School, Vennaimalai, Karur',
    caption: 'The first step in my education path.',
    degree: 'SSLC',
    img: `${sslcImg.src}`,
    bgColor: '#deedf2',
    year: "2017-2018"
  },
];

export default educationData;