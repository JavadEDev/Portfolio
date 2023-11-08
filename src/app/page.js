import Image from 'next/image'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import AboutSection from './Components/AboutSection'
import ProjectsSection from './Components/ProjectsSection'
import EmailSection from './Components/EmailSection'
import Footer from './Components/Footer'
import AchievementsSection from './Components/AchievementsSection'

export default function Home() {
  
  return (
    <main className="flex flex-col min-h-screen bg-[#121212] scroll-snap-type-y-mandatory scroll-behavior-smooth overflow-auto">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
        <Footer />
    </main>
  )
}
