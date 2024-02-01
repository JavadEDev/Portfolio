import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import AboutSection from './Components/AboutSection'
import ProjectsSection from './Components/ProjectsSection'
import EmailSection from './Components/EmailSection'
import Footer from './Components/Footer'
import AchievementsSection from './Components/AchievementsSection'
import BackToTopButton from './Components/BackToTopButton'

export default function Home() {

  return (
    <main className="min-h-screen bg-bkg snap-y snap-mandatory overflow-auto scroll-smooth">
      <Navbar />
      <section className="container mt-24 mx-auto px-12 py-4 snap-y">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <BackToTopButton />
      </section>
      <Footer />
    </main>
  )
}
