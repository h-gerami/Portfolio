import Header from '@/components/Header'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Repositories from '@/components/Repositories'
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
      </div>
      <Repositories />
    </>
  )
}