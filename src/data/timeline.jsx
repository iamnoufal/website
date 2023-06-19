import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import ContactPageIcon from '@mui/icons-material/ContactPage'; 
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const timelineData = [
  {
    name: 'About',
    icon: <InfoIcon sx={{color: 'white'}} />,
    param: 'about'
  },
  {
    name: 'Education',
    year: 'Till 2025',
    icon: <SchoolIcon sx={{color: 'white'}} />,
    param: 'edu'
  },
  {
    name: 'Learnings',
    year: 'Since 2016',
    icon: <CodeIcon sx={{color: 'white'}} />,
    param: 'learnings'
  },
  {
    name: 'Skills',
    year: 'All time',
    icon: <SentimentSatisfiedAltIcon sx={{color: 'white'}} />,
    param: 'skills'
  },
  {
    name: 'Projects',
    year: 'Since 2020',
    icon: <DevicesIcon sx={{color: 'white'}} />,
    param: 'projects'
  },
  {
    name: 'Contact',
    year: 'Anytime',
    icon: <ContactPageIcon sx={{color: 'white'}} />,
    param: 'contact'
  }
];

export default timelineData;