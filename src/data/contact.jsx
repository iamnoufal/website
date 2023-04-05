import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOn from '@mui/icons-material/LocationOn';

const contactData = [
  {
    name: 'Karur',
    link: 'https://goo.gl/maps/CZqspVSMvNgxrMFC7',
    text: 'TN, India',
    icon: <LocationOn />
  },
  {
    name: 'Mail',
    link: 'mailto:jnrahman12@gmail.com',
    text: 'jnrahman12@gmail.com',
    icon: <EmailIcon />
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/iamnoufal',
    text: 'Noufal Rahman',
    icon: <LinkedInIcon />
  },
  {
    name: 'GitHub',
    link: 'https://github.com/iamnoufal',
    text: 'iamnoufal',
    icon: <GitHubIcon />
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/_iam_noufal',
    text: '_iam_noufal',
    icon: <TwitterIcon />
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/_iam_noufal',
    text: '_iam_noufal',
    icon: <InstagramIcon />
  },
  {
    name: 'Whatsapp',
    link: 'https://wa.me/+918610023136',
    text: '+91 86100 23136',
    icon: <WhatsAppIcon />
  },
]

export default contactData;