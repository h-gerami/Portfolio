import Header from '@/components/Header'
import About from '@/components/About'
import Projects from '@/components/Projects'
import ThemeToggle from '@/components/ThemeToggle'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <ScrollToTop />
      
      <div className="container">
        <Header />
        <About />
        <Projects />
      </div>
    </>
  )
}