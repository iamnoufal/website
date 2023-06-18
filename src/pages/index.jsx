import Head from 'next/head'
import Layout from '@/components/layout'
import IntroComponent from '@/components/intro'
import TimelineComponent from '@/components/home/timeline'
import TimelineSpeedDialComponent from '@/components/home/timline-speeddial'
import AboutComponent from '@/components/home/about'
import EducationComponent from '@/components/home/education'
import SkillsComponent from '@/components/home/skills'
import LearningsComponent from '@/components/home/learnings'
import ProjectsComponent from '@/components/home/projects'

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Noufal Rahman</title>
        <meta name="description" content="Noufal Rahman is an aspiring full stack engineer who wishes to build high end solutions that could possibly help the people to boost their productivity." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Noufal Rahman" />
        <meta property="og:description" content="Noufal Rahman is an aspiring full stack engineer who wishes to build high end solutions that could possibly help the people to boost their productivity." />
        <meta property="og:image" content="home.webp" />
        <meta property="og:url" content="https://noufal.engineer" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Noufal Rahman" />
      </Head>
      <Layout>
        <IntroComponent 
          title="I'm Noufal Rahman" 
          subtitle="a self-taught full stack developer" 
          style={{
            background: `linear-gradient(0deg, black, transparent 100%), linear-gradient(300deg, #08083a, transparent 21%), linear-gradient(198deg, rgba(255, 193, 7, 0.2) 11%, transparent 0%), linear-gradient(50deg, #6610f2 10%, #6f42c1 20%, #d63384 35%, #dc3545 65%, #fd7e14 83%, #ffc107 91%)`
          }}
        >
          <TimelineComponent />
        </IntroComponent>
        <TimelineSpeedDialComponent />
        <AboutComponent />
        <EducationComponent />
        <LearningsComponent />
        <SkillsComponent />
        <ProjectsComponent />
      </Layout>
    </>
  )
}