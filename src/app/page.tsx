import Header from '@/components/Header'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Repositories from '@/components/Repositories'
import MobileGitHub from '@/components/MobileGitHub'
import ThemeToggle from '@/components/ThemeToggle'
import ScrollToTop from '@/components/ScrollToTop'
import SettingsPanel from '@/components/SettingsPanel'

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <ScrollToTop />
      <SettingsPanel />
      
      <div className="container">
        <Header />
        <About />
        <Projects />
        <MobileGitHub />
      </div>
      <Repositories />
    </>
  )
}