import Head from 'next/head'
import Layout from '@/components/layout'
import IntroComponent from '@/components/intro'
import TimelineComponent from '@/components/home/timeline'
import TimelineSpeedDialComponent from '@/components/home/timline-speeddial'
import AboutComponent from '@/components/home/about'
import EducationComponent from '@/components/home/education'
import SkillsComponent from '@/components/home/skills'
import LearningsComponent from '@/components/home/learning'
import ProjectsComponent from '@/components/home/projects'
import ContactComponent from '@/components/home/contact'
import IntroImg from '@/assets/images/intro.webp'

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Noufal Rahman</title>
        <meta name="description" content="Read< Inspire, Share" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Noufal Rahman" />
        <meta property="og:description" content="Read, Inspire, Learn from the posts written by Noufal Rahman. This blog features topics from tech to science, from ground to space and from you to me" />
        <meta property="og:image" content="/assets/images/logo.webp" />
        <meta property="og:url" content="https://noufal.engineer" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Noufal Rahman" />
      </Head>
      <Layout>
        <main style={{ background: `url(${IntroImg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
          <IntroComponent title="I'm Noufal Rahman" subtitle="a self-taught full stack developer" />
          <TimelineComponent />
          <TimelineSpeedDialComponent />
          <AboutComponent />
          <EducationComponent />
          <LearningsComponent />
          <SkillsComponent />
          <ProjectsComponent />
          <ContactComponent />
        </main>
      </Layout>
    </>
  )
}