import Tag from "../tag";
import Comment from "../comment";
import { Container, Typography, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import projectsData from "@/data/projects";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ArticleIcon from '@mui/icons-material/Article';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import ContactComponent from "./contact";

const ProjectsComponent = () => {
  return (
    <Box sx={{ p:4, background: 'linear-gradient(0deg, #080808 5%, transparent 40%), linear-gradient(180deg, #018891, transparent), linear-gradient(130deg, #6610f2 10%, #6f42c1 20%, #d63384 35%, #dc3545 65%, #fd7e14 83%, #ffc107 91%)' }} id='projects'>
      <Tag>Projects</Tag>
      <Comment>Projects are the best ways to practice what we&apos;ve learnt</Comment>
      <Container maxWidth="md" >
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={0}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          style={{height: '70vh'}}
          className='projectsCarousel'
        >
          {projectsData.map(project => {
            return (
              <SwiperSlide key={project.name} style={{display: 'flex', justifyContent: 'center', backgroundImage: `url("${project.img}")`, backgroundSize: 'cover', backgroundPosition: 'top center'}}>
                <Box sx={{position: "absolute", left: 0, background: "linear-gradient(160deg, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0.6) 93%) ", top: 0, height: "100%", width: "100%" }}>
                  <Typography variant="h5" color={"white"} p={3}>{project.name}</Typography>
                  <Typography variant="body1" color={"white"} px={3}>{project.desc}</Typography>
                </Box>
                <Box sx={{position: "absolute", bottom: 0, right: 0}}>
                  <Box sx={{display: "flex"}}>
                    {project.git && <IconButton href={project.git} sx={{m: 2}}><GitHubIcon className="text-white" /></IconButton>}
                    {project.url && <IconButton href={project.url} sx={{m: 2}}><LanguageIcon className="text-white" /></IconButton>}
                    {project.doc && <IconButton href={project.doc} sx={{m: 2}}><ArticleIcon className="text-white" /></IconButton>}
                  </Box>
                </Box>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Container>
      <ContactComponent />
    </Box>
  )
}

export default ProjectsComponent;