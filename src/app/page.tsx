import Header from '@/components/Header'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Repositories from '@/components/Repositories'
import MobileGitHub from '@/components/MobileGitHub'
import ThemeToggle from '@/components/ThemeToggle'
import ScrollToTop from '@/components/ScrollToTop'
import SettingsPanel from '@/components/SettingsPanel'
import StickyNav from '@/components/StickyNav'

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <ScrollToTop />
      <SettingsPanel />
      <StickyNav />
      
      <div className="container">
        <section id="header">
          <Header />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="repositories">
          <MobileGitHub />
        </section>
      </div>
      <Repositories />
    </>
  )
}